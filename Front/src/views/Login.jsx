import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/action';
import { Link, useNavigate } from 'react-router-dom';
import { IconButton, TextField, Button, Typography, Container, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import styles from './styles/Login.module.css'; 

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const loginError = useSelector(state => state.loginError);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await dispatch(login(username, password));
    if (success) {
      navigate('/');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} className={styles['login-container']}>
        <IconButton edge="start" color="inherit" aria-label="home" onClick={() => navigate('/')} className={styles['icon-button']}>
          <HomeIcon />
        </IconButton>
        <Typography component="h1" variant="h5" className={styles['typography']}>
          Login
        </Typography>
        {loginError && <Typography color="error" className={styles.error}>{loginError}</Typography>}
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={styles.button}
          >
            Login
          </Button>
          <div className={styles['signup-redirect']}>
            <Link to='/signup' style={{ textDecoration: 'none' }}>
              Don't have an account? Sign Up
            </Link>
          </div>
        </form>
      </Paper>
    </Container>
  );
};
