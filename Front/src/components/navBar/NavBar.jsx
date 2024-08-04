import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import styles from './NavBar.module.css';

export const NavBar = () => {
    return (
        <AppBar position="static" className={styles.navBar}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="home" component={NavLink} to="/">
                    <HomeIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    My App
                </Typography>
                <Box className={styles.navLinks}>
                    <Button color="inherit" component={NavLink} to="/login" className={styles.navLink}>
                        Ingresar
                    </Button>
                    <Button color="inherit" component={NavLink} to="/registrarme" className={styles.navLink}>
                        Registrarme
                    </Button>
                </Box>
                <Box className={styles.searchBar}>
                    <SearchBar />
                </Box>
            </Toolbar>
        </AppBar>
    );
};
