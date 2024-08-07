import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmpresas } from "../redux/action"; 
import { NavBar } from "../components/NavBar/NavBar"; 
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import styles from './styles/Home.module.css'; 
import { Cards } from "../components/Cards/Cards"; 

export const Home = () => {
    const dispatch = useDispatch();
    const empresas = useSelector(state => state.empresas); 

    useEffect(() => {
        dispatch(getEmpresas()); 
    }, [dispatch]);

    console.log(empresas); 

    return (
        <div>
            <NavBar />
            <main className={styles.mainContent}>
                <Container>
                    <Box my={4}>
                        <Typography variant="h2" component="h1" gutterBottom>
                            Welcome to My App
                        </Typography>
                        {empresas && empresas.length > 0 ? (
                            <Cards cardsData={empresas} /> // Render Cards component if empresas data is available
                        ) : (
                            <Typography>No empresas found.</Typography> // Message if no empresas data
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
