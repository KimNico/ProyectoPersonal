import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPublicacionesById } from '../redux/action';
import { Typography, Container, Paper, List, ListItem, ListItemText, CircularProgress, Card, CardContent, CardHeader, Grid, Divider } from '@mui/material';
import { NavBar } from '../components/NavBar/NavBar'; 
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import styles from './styles/JobDetail.module.css';

export const JobDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const job = useSelector(state => state.publicacion_details);
  const loading = useSelector(state => state.loading);

  useEffect(() => {
    dispatch(getPublicacionesById(id));
  }, [dispatch, id]);

  if (loading) {
    return (
      <Container className={styles.container}>
        <CircularProgress />
      </Container>
    );
  }

  if (!job) {
    return (
      <Container className={styles.error}>
        <Typography variant="h6">Job not found</Typography>
      </Container>
    );
  }

  return (
    <>
      <NavBar /> {/* Navbar agregado aquí */}
      <Container className={styles.container}>
        <Card className={styles.card}>
          <CardHeader
            avatar={<WorkIcon />}
            title={job.titulo}
            subheader="Detalles del trabajo"
            className={styles.cardHeader}
          />
          <CardContent>
            <Typography variant="body1" paragraph>
              {job.descripcion}
            </Typography>
            <Divider className={styles.divider} />

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Requisitos
                </Typography>
                <Typography variant="body2"><strong>Experiencia:</strong> {job.requisitos?.experiencia || 'No disponible'}</Typography>
                <Typography variant="body2"><strong>Habilidades:</strong></Typography>
                <List className={styles.list}>
                  {job.requisitos?.habilidades?.length > 0 ? (
                    job.requisitos.habilidades.map((habilidad, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={habilidad} />
                      </ListItem>
                    ))
                  ) : (
                    <ListItem>
                      <ListItemText primary="No disponible" />
                    </ListItem>
                  )}
                </List>
                <Typography variant="body2"><strong>Educación:</strong> {job.requisitos?.educacion || 'No disponible'}</Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Beneficios
                </Typography>
                <Typography variant="body2"><strong>Salario:</strong> {job.beneficios?.salario || 'No disponible'}</Typography>
                <Typography variant="body2"><strong>Prestaciones:</strong></Typography>
                <List className={styles.list}>
                  {job.beneficios?.prestaciones?.length > 0 ? (
                    job.beneficios.prestaciones.map((prestacion, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={prestacion} />
                      </ListItem>
                    ))
                  ) : (
                    <ListItem>
                      <ListItemText primary="No disponible" />
                    </ListItem>
                  )}
                </List>
                <Typography variant="body2"><strong>Vacaciones:</strong> {job.beneficios?.vacaciones || 'No disponible'}</Typography>
                <Typography variant="body2"><strong>Otros:</strong> {job.beneficios?.otros || 'No disponible'}</Typography>
              </Grid>
            </Grid>

            <Divider className={styles.divider} />
            <Typography variant="body2" paragraph>
              <strong>Ubicación:</strong> <LocationOnIcon fontSize="small" /> {job.ubicacion || 'No disponible'}
            </Typography>
            <Typography variant="body2" paragraph>
              <strong>Modalidad:</strong> <HomeWorkIcon fontSize="small" /> {job.modalidad || 'No disponible'}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default JobDetail;
