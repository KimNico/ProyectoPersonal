import axios from 'axios';
export const GET_EMPRESA = 'GET_EMPRESA';
export const GET_PUBLICACIONES = 'GET_PUBLICACIONES';
export const GET_USERS = 'GET_USERS';
export const GET_EMPLEOS_BY_ID = 'GET_EMPLEOS_BY_ID';
export const GET_USERS_BY_ID = 'GET_USERS_BY_ID';
export const GET_EMPRESA_BY_ID = 'GET_EMPRESA_BY_ID';
export const DELETE_EMPLEO = 'DELETE_EMPLEO';
export const DELETE_USER = 'DELETE_USER';
export const DELETE_EMPRESA = 'DELETE_EMPRESA';
export const GET_EMPRESA_BY_NAME = 'GET_EMPRESA_BY_NAME';

export const getUsers = () => {
  return async (dispatch) => {
      try {
          const response = await axios.get('/users');
          dispatch({ type: GET_USERS, payload: response.data });
      } catch (error) {
          console.error('Error fetching users:', error);
          // Optionally dispatch an error action here
      }
  };
};

export const getUser = (id) => {
  return async (dispatch) => {
      try {
          const response = await axios.get(`/users/${id}`);
          dispatch({ type: GET_USERS_BY_ID, payload: response.data });
      } catch (error) {
          console.error(`Error fetching user with id ${id}:`, error);
          // Optionally dispatch an error action here
      }
  };
};

export const getEmpresas = () => {
  return async (dispatch) => {
      try {
          const response = await axios.get('/empresa');
          dispatch({ type: GET_EMPRESA, payload: response.data });
      } catch (error) {
          console.error('Error fetching empresas:', error);
          // Optionally dispatch an error action here
      }
  };
};

export const getEmpresaById = (id) => {
  return async (dispatch) => {
      try {
          const response = await axios.get(`/empresa/${id}`);
          dispatch({ type: GET_EMPRESA_BY_ID, payload: response.data });
      } catch (error) {
          console.error(`Error fetching empresa with id ${id}:`, error);
          // Optionally dispatch an error action here
      }
  };
};

export const getPublicaciones = () => {
  return async (dispatch) => {
      try {
          const response = await axios.get('/publicaciones');
          dispatch({ type: GET_PUBLICACIONES, payload: response.data });
      } catch (error) {
          console.error('Error fetching publicaciones:', error);
          // Optionally dispatch an error action here
      }
  };
};

export const getPublicacionesById = (id) => {
  return async (dispatch) => {
      try {
          const response = await axios.get(`/publicaciones/${id}`);
          dispatch({ type: GET_PUBLICACIONES, payload: response.data });
      } catch (error) {
          console.error(`Error fetching publicaciones with id ${id}:`, error);
          // Optionally dispatch an error action here
      }
  };
};

export const deleteEmpresa = (id) => {
  return async (dispatch) => {
      try {
          await axios.delete(`/empresa/?id=${id}`);
          dispatch(getEmpresas()); // Call getEmpresas after successful deletion
      } catch (error) {
          console.error(`Error deleting empresa with id ${id}:`, error);
          // Optionally dispatch an error action here
      }
  };
};

export const getEmpresaByName = (name) => {
  return async (dispatch) => {
      try {
          const response = await axios.get(`/empresa/?name=${name}`);
          dispatch({ type: GET_EMPRESA_BY_NAME, payload: response.data });
      } catch (error) {
          console.error(`Error fetching empresa by name ${name}:`, error);
          // Optionally dispatch an error action here
      }
  };
};