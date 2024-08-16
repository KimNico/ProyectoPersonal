import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const Paginador = ({ totalPaginas, paginaActual, onCambiarPagina }) => {
    const handleChange = (event, value) => {
        onCambiarPagina(value);
    };

    return (
        <Stack spacing={2}>
            <Pagination 
                count={totalPaginas} 
                page={paginaActual} 
                onChange={handleChange} 
                variant="outlined" 
                shape="rounded" 
                color="primary"
            />
        </Stack>
    );
};
