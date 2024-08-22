import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import styles from './Filtro.module.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CategoryIcon from '@mui/icons-material/Category';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import BusinessIcon from '@mui/icons-material/Business';

export const Filtro = ({ onFilter }) => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [modality, setModality] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [area, setArea] = useState('');

  const locations = ['Ubicación 1', 'Ubicación 2', 'Ubicación 3'];
  const categories = ['Categoría 1', 'Categoría 2', 'Categoría 3'];
  const modalities = ['Modalidad 1', 'Modalidad 2', 'Modalidad 3'];
  const areas = ['Área 1', 'Área 2', 'Área 3'];

  useEffect(() => {
    onFilter({ title, location, category, modality, publicationDate, area });
  }, [title, location, category, modality, publicationDate, area, onFilter]);

  const handleClear = () => {
    setTitle('');
    setLocation('');
    setCategory('');
    setModality('');
    setPublicationDate('');
    setArea('');
    onFilter({ title: '', location: '', category: '', modality: '', publicationDate: '', area: '' });
  };

  return (
    <Grid container spacing={2} className={styles['filter-container']}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Filtrar por título"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          InputProps={{
            startAdornment: <WorkOutlineIcon style={{ marginRight: '8px' }} />
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Ubicación</InputLabel>
          <Select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            label="Ubicación"
            startAdornment={<LocationOnIcon style={{ marginRight: '8px' }} />}
          >
            <MenuItem value=""><em>Seleccionar</em></MenuItem>
            {locations.map((loc, index) => (
              <MenuItem key={index} value={loc}>{loc}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Categoría</InputLabel>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            label="Categoría"
            startAdornment={<CategoryIcon style={{ marginRight: '8px' }} />}
          >
            <MenuItem value=""><em>Seleccionar</em></MenuItem>
            {categories.map((cat, index) => (
              <MenuItem key={index} value={cat}>{cat}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Modalidad</InputLabel>
          <Select
            value={modality}
            onChange={(e) => setModality(e.target.value)}
            label="Modalidad"
            startAdornment={<BusinessIcon style={{ marginRight: '8px' }} />}
          >
            <MenuItem value=""><em>Seleccionar</em></MenuItem>
            {modalities.map((mod, index) => (
              <MenuItem key={index} value={mod}>{mod}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Filtrar por fecha de publicación"
          type="date"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          value={publicationDate}
          onChange={(e) => setPublicationDate(e.target.value)}
          InputProps={{
            startAdornment: <EventIcon style={{ marginRight: '8px' }} />
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Área</InputLabel>
          <Select
            value={area}
            onChange={(e) => setArea(e.target.value)}
            label="Área"
            startAdornment={<WorkOutlineIcon style={{ marginRight: '8px' }} />}
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
