import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import styles from './Filtro.module.css'; // Asegúrate de crear este archivo para estilizar el filtro

export const Filtro = ({ onFilter }) => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [modality, setModality] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [area, setArea] = useState('');

  // Opciones para los filtros desplegables
  const locations = ['Ubicación 1', 'Ubicación 2', 'Ubicación 3']; // Reemplaza con tus opciones
  const categories = ['Categoría 1', 'Categoría 2', 'Categoría 3']; // Reemplaza con tus opciones
  const modalities = ['Modalidad 1', 'Modalidad 2', 'Modalidad 3']; // Reemplaza con tus opciones
  const areas = ['Área 1', 'Área 2', 'Área 3']; // Reemplaza con tus opciones

  useEffect(() => {
    // Llama a la función de filtro cada vez que cambian los valores de los filtros
    onFilter({ title, location, category, modality, publicationDate, area });
  }, [title, location, category, modality, publicationDate, area, onFilter]);

  const handleClear = () => {
    // Limpia los campos de texto
    setTitle('');
    setLocation('');
    setCategory('');
    setModality('');
    setPublicationDate('');
    setArea('');
    // Llama a la función de filtro sin parámetros para mostrar todos los elementos
    onFilter({ title: '', location: '', category: '', modality: '', publicationDate: '', area: '' });
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
        <FormControl fullWidth variant="outlined">
          <InputLabel>Ubicación</InputLabel>
          <Select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            label="Ubicación"
          >
            <MenuItem value=""><em>Seleccionar</em></MenuItem>
            {locations.map((loc, index) => (
              <MenuItem key={index} value={loc}>{loc}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Categoría</InputLabel>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            label="Categoría"
          >
            <MenuItem value=""><em>Seleccionar</em></MenuItem>
            {categories.map((cat, index) => (
              <MenuItem key={index} value={cat}>{cat}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Modalidad</InputLabel>
          <Select
            value={modality}
            onChange={(e) => setModality(e.target.value)}
            label="Modalidad"
          >
            <MenuItem value=""><em>Seleccionar</em></MenuItem>
            {modalities.map((mod, index) => (
              <MenuItem key={index} value={mod}>{mod}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Filtrar por fecha de publicación"
          type="date"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          value={publicationDate}
          onChange={(e) => setPublicationDate(e.target.value)} // Aplica el filtro en tiempo real
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Área</InputLabel>
          <Select
            value={area}
            onChange={(e) => setArea(e.target.value)}
            label="Área"
          >
            <MenuItem value=""><em>Seleccionar</em></MenuItem>
            {areas.map((ar, index) => (
              <MenuItem key={index} value={ar}>{ar}</MenuItem>
            ))}
          </Select>
        </FormControl>
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

