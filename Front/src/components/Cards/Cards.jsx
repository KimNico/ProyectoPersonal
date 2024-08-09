import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

export const Cards = ({ cardsData }) => {
  return (
    <Grid container spacing={2}>
      {cardsData.map((empresa) => (
        <Grid item xs={12} sm={6} md={4} key={empresa.id_empresa}>
          <Link to={`/company/${empresa.id_empresa}`} style={{ textDecoration: 'none' }}>
            <Card sx={{ minWidth: 275, marginBottom: 2 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {empresa.nombre_empresa}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {empresa.descripcion}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Empleados: {empresa.cant_empleados}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Eemail: {empresa.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Categoría: {empresa.categoria}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Teléfono: {empresa.telefono}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
