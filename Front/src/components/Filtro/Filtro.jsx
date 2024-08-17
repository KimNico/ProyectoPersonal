import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import styles from './Filtro.module.css'; // Asegúrate de crear este archivo para estilizar el filtro

export const Filtro = ({ onFilter }) => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    // Llama a la función de filtro cada vez que cambian los valores de title o location
    onFilter({ title, location });
  }, [title, location, onFilter]);

  const handleClear = () => {
    // Limpia los campos de texto
    setTitle('');
    setLocation('');
    // Llama a la función de filtro sin parámetros para mostrar todos los elementos
    onFilter({ title: '', location: '' });
  };

  return (
    <Grid container spacing={2} className={styles['filter-container']}>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Filtrar por título"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)} // Aplica el filtro en tiempo real
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Filtrar por ubicación"
          variant="outlined"
          value={location}
          onChange={(e) => setLocation(e.target.value)} // Aplica el filtro en tiempo real
        />
      </Grid>
      <Grid item xs={12}>
        <Button 
          variant="outlined" 
          color="secondary" 
          onClick={handleClear}
          className={styles['filter-clear-button']}
        >
          Limpiar Filtros
        </Button>
      </Grid>
    </Grid>
  );
};

export default Filtro;
