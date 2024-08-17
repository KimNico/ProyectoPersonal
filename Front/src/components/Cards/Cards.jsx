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
<Grid container spacing={3} justifyContent="center">
    {cardsData.map((publicacion) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={publicacion.id_trabajo} style={{ display: 'flex' }}>
            <CardActionArea 
                component={Link} 
                to={`/publicacion/${publicacion.id_trabajo}`} 
                style={{ display: 'flex', flexGrow: 1 }}
            >
                <Card className={styles['card-container']}>
                    <CardContent className={styles['card-content']}>
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
                    <IconButton 
                        className={styles['save-button']}
                        onClick={(e) => {
                            e.stopPropagation();
                            onSave(publicacion);
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
