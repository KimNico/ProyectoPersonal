import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import styles from './NavBar.module.css';
import { logout } from '../../redux/action'; 
import { SearchBar } from './SearchBar/SearchBar';
import { getUsers } from '../../redux/action';

export const NavBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUser = useSelector(state => state.currentUser);
    console.log(currentUser);
    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <AppBar position="static" className={styles.navBar}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="home" component={NavLink} to="/">
                    <HomeIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    MiTrabajo
                </Typography>
                <Box className={styles.navLinks}>
                    {!currentUser ? (
                        <>
                            <Button color="inherit" component={NavLink} to="/login" className={styles.navLink}>
                                Ingresar
                            </Button>
                            <Button color="inherit" component={NavLink} to="/signup" className={styles.navLink}>
                                Registrarme
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button color="inherit" component={NavLink} to={`/profile/${currentUser.id_user}`} className={styles.navLink}>
                                Profile
                            </Button>
                            <Button color="inherit" component={NavLink} to="/saved" className={styles.navLink}>
                                Saved Jobs
                            </Button>
                            <Button color="inherit" onClick={handleLogout} className={styles.navLink}>
                                Logout
                            </Button>
                        </>
                    )}
                </Box>
                <Box className={styles.searchBar}>
                    <SearchBar />
                </Box>
            </Toolbar>
        </AppBar>
    );
};
