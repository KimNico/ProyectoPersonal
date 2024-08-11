import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPublicacionesById } from '../redux/action'; // Ajusta el path según corresponda
import styles from '../views/styles/JobDetail.module.css'; 

export const JobDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const job = useSelector(state => state.publicaciones.find(job => job.id === parseInt(id)));

  useEffect(() => {
    dispatch(getPublicacionesById(id));
  }, [dispatch, id]);

  if (!job) {
    return <div className={styles.error}>Job not found</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{job.titulo}</h1>
      <p className={styles.description}>{job.descripcion}</p>
      <div className={styles.section}>
        <h2>Requisitos</h2>
        <p><strong>Experiencia:</strong> {job.requisitos.experiencia}</p>
        <p><strong>Habilidades:</strong></p>
        <ul className={styles.list}>
          {job.requisitos.habilidades.map((habilidad, index) => (
            <li key={index}>{habilidad}</li>
          ))}
        </ul>
        <p><strong>Educación:</strong> {job.requisitos.educacion}</p>
      </div>
      <div className={styles.section}>
        <h2>Beneficios</h2>
        <p><strong>Salario:</strong> {job.beneficios.salario}</p>
        <p><strong>Prestaciones:</strong></p>
        <ul className={styles.list}>
          {job.beneficios.prestaciones.map((prestacion, index) => (
            <li key={index}>{prestacion}</li>
          ))}
        </ul>
        <p><strong>Vacaciones:</strong> {job.beneficios.vacaciones}</p>
        <p><strong>Otros:</strong> {job.beneficios.otros}</p>
      </div>
      <div className={styles.section}>
        <p><strong>Ubicación:</strong> {job.ubicacion}</p>
        <p><strong>Modalidad:</strong> {job.modalidad}</p>
      </div>
    </div>
  );
};


