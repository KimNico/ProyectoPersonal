import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const JobDetail = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const fetchCompanyDetail = async () => {
      try {
        const response = await axios.get(`/company/${id}`);
        setCompany(response.data);
      } catch (error) {
        console.error('Error fetching company details:', error);
      }
    };

    fetchCompanyDetail();
  }, [id]);

  if (!company) return <div>Loading...</div>;

  return (
    <div>
      <h1>{company.nombre_empresa}</h1>
      <p>{company.descripcion}</p>
      {/* Display other company details and include job information as needed */}
    </div>
  );
};
