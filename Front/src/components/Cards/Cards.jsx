import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export const Cards = ({ cardsData }) => {
  return (
    <Grid container spacing={2}>
      {cardsData.map((empresas) => (
        <Grid item xs={12} sm={6} md={4} key={empresas.id_empresa}>
          <Card sx={{ minWidth: 275, marginBottom: 2 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {empresas.nombre_empresa}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {empresas.descripcion}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Empleados: {empresas.cant_empleados}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: {empresas.mail}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Categoría: {empresas.categoria}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Teléfono: {empresas.telefono}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
