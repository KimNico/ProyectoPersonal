import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPublicacionesById } from '../redux/action';
import { Typography, Container, Paper, List, ListItem, ListItemText, CircularProgress } from '@mui/material';
import {NavBar} from '../components/NavBar/NavBar'; 
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
        <Paper className={styles.paper}>
          <Typography variant="h4" className={styles.title}>
            {job.titulo}
          </Typography>
          <Typography variant="body1" paragraph>
            {job.descripcion}
          </Typography>
          <Paper className={styles.paperSection}>
            <Typography variant="h6" className={styles.sectionTitle}>Requisitos</Typography>
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
          </Paper>
          <Paper className={styles.paperSection}>
            <Typography variant="h6" className={styles.sectionTitle}>Beneficios</Typography>
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
          </Paper>
          <Paper className={styles.paperSection}>
            <Typography variant="body2"><strong>Ubicación:</strong> {job.ubicacion || 'No disponible'}</Typography>
            <Typography variant="body2"><strong>Modalidad:</strong> {job.modalidad || 'No disponible'}</Typography>
          </Paper>
        </Paper>
      </Container>
    </>
  );
};

export default JobDetail;
