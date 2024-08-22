import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { CardActionArea, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import styles from './Card.module.css'; 
import { useSelector } from 'react-redux';

export const Cards = ({ cardsData, onSave }) => {
  const currentUser = useSelector(state => state.currentUser);

  if (!cardsData || cardsData.length === 0) {
    return <Typography variant="body1">No hay publicaciones disponibles</Typography>;
  }

  return (
    <Grid container spacing={3} direction="column" justifyContent="center">
      {cardsData.map((publicacion) => (
        <Grid item xs={12} sm={8} md={6} lg={4} key={publicacion.id_trabajo}>
          <CardActionArea 
            component={Link} 
            to={`/publicacion/${publicacion.id_trabajo}`}
          >
            <Card className={styles['card-container']}>
              <div className={styles['card-inner-container']}>
                <div className={styles['card-left-side']}>
                  <CardContent className={styles['card-content']}>
                    <Typography variant="h6" component="div" className={styles['card-text-title']}>
                      {publicacion.titulo}
                    </Typography>
                    <Typography variant="body2" className={styles['card-title']}>
                      <strong>{publicacion.Empresa?.nombre_empresa}</strong>
                    </Typography>
                    <Typography variant="body2" className={styles['card-text']}>
                      {publicacion.descripcion}
                    </Typography>
                  </CardContent>
                </div>
                <div className={styles['card-right-side']}>
                  <CardContent className={styles['card-content']}>
                    <Typography variant="body2" className={styles['card-text-ubicacion']}>
                      <strong>Ubicación:</strong> {publicacion.ubicacion}
                    </Typography>
                    <Typography variant="body2" className={styles['card-text-modalidad']}>
                      <strong>Modalidad:</strong> {publicacion.modalidad}
                    </Typography>
                  </CardContent>
                </div>
              </div>
              <IconButton 
                className={styles['save-button']}
                onClick={(e) => {
                  e.stopPropagation();
                  if (currentUser) {
                    onSave(publicacion);
                  } else {
                    console.log('Please log in to save items to favorites');
                  }
                }}
              >
                <FavoriteIcon />
              </IconButton>
            </Card>
          </CardActionArea>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
