import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmpresas } from "../redux/action"; // Adjust the path as needed
import { NavBar } from "../components/NavBar/NavBar";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import styles from './styles/Home.module.css';

export const Home = () => {
    const dispatch = useDispatch();
    const empresas = useSelector(state => state.empresas); // Adjust the state path as needed

    useEffect(() => {
        dispatch(getEmpresas());
    }, [dispatch]);

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
                            <div>
                                <Typography variant="h5" component="h2" paragraph>
                                    Empresas:
                                </Typography>
                                <ul>
                                    {empresas.map(empresa => (
                                        <li key={empresa.id}>
                                            {empresa.name} {/* Adjust according to your data structure */}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <Typography>No empresas found.</Typography>
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
