import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { CardActionArea, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite'; // Icono para el botón
import styles from './Card.module.css'; 

export const Cards = ({ cardsData, onSave }) => {
  // Verifica que cardsData no sea null o undefined
  if (!cardsData || cardsData.length === 0) {
    return <Typography variant="body1">No hay publicaciones disponibles</Typography>;
  }

  return (
    <Grid container spacing={3}>
      {cardsData.map((publicacion) => (
        <Grid item xs={12} sm={6} md={4} key={publicacion.id_trabajo}>
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
                <IconButton 
                  className={styles['save-button']}
                  onClick={(e) => {
                    e.stopPropagation(); // Evita que el clic en el botón navegue a la página
                    if (onSave) {
                      onSave(publicacion); // Asegúrate de que onSave esté definido
                    } else {
                      console.error('onSave function is not defined');
                    }
                  }}
                >
                  <FavoriteIcon />
                </IconButton>
              </CardContent>
            </Card>
          </CardActionArea>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
