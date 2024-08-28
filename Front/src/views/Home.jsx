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
import { Filtro } from "../components/Filtro/Filtro"; 

export const Home = () => {
    const dispatch = useDispatch();
    const publicaciones = useSelector(state => state.publicaciones || []); 
    const [loading, setLoading] = useState(true);
    const [paginaActual, setPaginaActual] = useState(1);
    const [filtros, setFiltros] = useState({ title: '', location: '', category: '', modality: '', date: '', area: '' }); 
    const publicacionesPorPagina = 10; 

    useEffect(() => {
        dispatch(getPublicaciones())
            .finally(() => setLoading(false));
    }, [dispatch]);

    const publicacionesFiltradas = publicaciones.filter(publicacion => 
        (publicacion.titulo || '').toLowerCase().includes(filtros.title.toLowerCase()) &&
        (publicacion.ubicacion || '').toLowerCase().includes(filtros.location.toLowerCase()) &&
        (publicacion.categoria || '').toLowerCase().includes(filtros.category.toLowerCase()) &&
        (publicacion.modalidad || '').toLowerCase().includes(filtros.modality.toLowerCase()) &&
        (publicacion.fecha || '').toLowerCase().includes(filtros.date.toLowerCase()) &&
        (publicacion.area || '').toLowerCase().includes(filtros.area.toLowerCase())
    );

    const indiceUltimaPublicacion = paginaActual * publicacionesPorPagina;
    const indicePrimeraPublicacion = indiceUltimaPublicacion - publicacionesPorPagina;
    const publicacionesActuales = publicacionesFiltradas.slice(indicePrimeraPublicacion, indiceUltimaPublicacion);

    const handleChangePagina = (nuevaPagina) => {
        setPaginaActual(nuevaPagina);
    };

    const handleFilterChange = (newFilters) => {
        setFiltros({
            title: newFilters.title || '',
            location: newFilters.location || '',
            category: newFilters.category || '',
            modality: newFilters.modality || '',
            date: newFilters.date || '',
            area: newFilters.area || ''
        });
        setPaginaActual(1); 
    };

    return (
        <div>
            <NavBar />
            <main className={styles.mainContent}>
                <Container>
                    <Box display="flex" flexDirection="row" gap={2}>
                        {/* Contenedor de filtros */}
                        <Box className={styles['filter-container']}>
                            <Filtro onFilter={handleFilterChange} />
                        </Box>
                        {/* Contenedor de tarjetas */}
                        <Box className={styles['cards-container']}>
                            {loading ? (
                                <Box display="flex" justifyContent="center" my={4}>
                                    <CircularProgress />
                                </Box>
                            ) : publicacionesActuales && publicacionesActuales.length > 0 ? (
                                <>
                                    <Cards cardsData={publicacionesActuales} />
                                    <Box display="flex" justifyContent="center" position="relative" right="250px" my={4}>
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
