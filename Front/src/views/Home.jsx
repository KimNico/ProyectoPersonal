import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPublicaciones } from "../redux/action"; 
import { NavBar } from "../components/NavBar/NavBar"; 
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import styles from './styles/Home.module.css'; 
import { Cards } from "../components/Cards/Cards"; 
import { Paginador } from "../components/Paginador/Paginador";
import { Filtro } from "../components/Filtro/Filtro"; // Importa el componente de filtro

export const Home = () => {
    const dispatch = useDispatch();
    const publicaciones = useSelector(state => state.publicaciones); 
    const [loading, setLoading] = useState(true);
    const [paginaActual, setPaginaActual] = useState(1);
    const [filtros, setFiltros] = useState({ title: '', location: '' }); // Estado para los filtros
    const publicacionesPorPagina = 10; // Número de publicaciones por página

    useEffect(() => {
        dispatch(getPublicaciones())
            .finally(() => setLoading(false));
    }, [dispatch]);

    // Filtrar publicaciones según los filtros aplicados
    const publicacionesFiltradas = publicaciones.filter(publicacion => 
        publicacion.titulo.toLowerCase().includes(filtros.title.toLowerCase()) &&
        publicacion.ubicacion.toLowerCase().includes(filtros.location.toLowerCase())
    );

    // Calcular las publicaciones a mostrar según la página actual
    const indiceUltimaPublicacion = paginaActual * publicacionesPorPagina;
    const indicePrimeraPublicacion = indiceUltimaPublicacion - publicacionesPorPagina;
    const publicacionesActuales = publicacionesFiltradas.slice(indicePrimeraPublicacion, indiceUltimaPublicacion);

    const handleChangePagina = (nuevaPagina) => {
        setPaginaActual(nuevaPagina);
    };

    const handleFilterChange = (newFilters) => {
        setFiltros(newFilters);
        setPaginaActual(1); // Reiniciar a la primera página al aplicar nuevos filtros
    };

    return (
        <div>
            <NavBar />
            <main className={styles.mainContent}>
                <Container>
                    <Box my={4}>
                        <Typography variant="h2" component="h1" gutterBottom>
                            Welcome to My App
                        </Typography>
                        <Filtro onFilter={handleFilterChange} />
                        {loading ? (
                            <Box display="flex" justifyContent="center" my={4}>
                                <CircularProgress />
                            </Box>
                        ) : publicacionesActuales && publicacionesActuales.length > 0 ? (
                            <>
                                <Cards cardsData={publicacionesActuales} />
                                <Box display="flex" justifyContent="center" my={4}>
                                    <Paginador 
                                        totalPaginas={Math.ceil(publicacionesFiltradas.length / publicacionesPorPagina)} 
                                        paginaActual={paginaActual} 
                                        onCambiarPagina={handleChangePagina} 
                                    />
                                </Box>
                            </>
                        ) : (
                            <Typography>No publicaciones found.</Typography>
                        )}
                    </Box>
                </Container>
            </main>
            <footer className={styles.footer}>
                <Container>
                    <Typography variant="body2" color="textSecondary" align="center">
                        © 2024 My App. All rights reserved.
                    </Typography>
                </Container>
            </footer>
        </div>
    );
};
