import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { CardActionArea } from '@mui/material';
import styles from './Card.module.css'; // adjust the path as needed

export const Cards = ({ cardsData }) => {
  return (
    <Grid container spacing={3}>
      {cardsData.map((publicacion) => (
        <Grid item xs={12} sm={6} md={4} key={publicacion.id_publicacion}>
          <CardActionArea component={Link} to={`/publicacion/${publicacion.id_trabajo}`}>
            <Card className={styles['card-container']}>
              <CardContent>
                <Typography variant="h5" component="div" className={styles['card-title']}>
                  {publicacion.titulo}
                </Typography>
                <Typography variant="body2" className={styles['card-description']}>
                  {publicacion.descripcion}
                </Typography>
                <Typography variant="body2" className={styles['card-text']}>
                  <strong>Ubicación:</strong> {publicacion.ubicacion}
                </Typography>
                <Typography variant="body2" className={styles['card-text']}>
                  <strong>Modalidad:</strong> {publicacion.modalidad}
                </Typography>
              </CardContent>
            </Card>
          </CardActionArea>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
