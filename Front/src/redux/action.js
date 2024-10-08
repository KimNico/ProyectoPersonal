import axios from 'axios';

export const GET_EMPRESA = 'GET_EMPRESA';
export const GET_PUBLICACIONES = 'GET_PUBLICACIONES';
export const GET_USERS = 'GET_USERS';
export const GET_PUBLICACIONES_BY_ID = 'GET_PUBLICACIONES_BY_ID';
export const GET_USERS_BY_ID = 'GET_USERS_BY_ID';
export const GET_EMPRESA_BY_ID = 'GET_EMPRESA_BY_ID';
export const DELETE_EMPLEO = 'DELETE_EMPLEO';
export const DELETE_USER = 'DELETE_USER';
export const DELETE_EMPRESA = 'DELETE_EMPRESA';
export const GET_EMPRESA_BY_NAME = 'GET_EMPRESA_BY_NAME';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const POST_USER = 'POST_USER'
export const LOGOUT = 'LOGOUT';



export const getUsers = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/users');
            dispatch({ type: GET_USERS, payload: response.data });
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };
};

export const getUser = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/user/${id}`);
            console.log(response);
            dispatch({ type: GET_USERS_BY_ID, payload: response.data });
        } catch (error) {
            console.error(`Error fetching user with id ${id}:`, error);
        }
    };
};

export const getEmpresas = () => {
  return async (dispatch) => {
      try {
          const response = await axios.get('http://localhost:3001/empresa');
          console.log('Empresas data:', response.data); 
          dispatch({ type: GET_EMPRESA, payload: response.data });
      } catch (error) {
          console.error('Error fetching empresas:', error);
      }
  };
};


export const getEmpresaById = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/empresa/${id}`);
            dispatch({ type: GET_EMPRESA_BY_ID, payload: response.data });
        } catch (error) {
            console.error(`Error fetching empresa with id ${id}:`, error);
        }
    };
};

export const getPublicaciones = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3001/publicacion');
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
          const response = await axios.get(`http://localhost:3001/publicacion/${id}`);
          console.log('Response data:', response.data); // Verifica la estructura de los datos
          dispatch({ type: GET_PUBLICACIONES_BY_ID, payload: response.data });
      } catch (error) {
          console.error(`Error fetching publicaciones with id ${id}:`, error);
      }
  };
};



export const deleteEmpresa = (id) => {
    return async (dispatch) => {
        try {
            await axios.delete(`http://localhost:3001/empresa/?id=${id}`);
            dispatch(getEmpresas());
        } catch (error) {
            console.error(`Error deleting empresa with id ${id}:`, error);
        }
    };
};

export const getEmpresaByName = (name) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/empresa/?name=${name}`);
            dispatch({ type: GET_EMPRESA_BY_NAME, payload: response.data });
        } catch (error) {
            console.error(`Error fetching empresa by name ${name}:`, error);
        }
    };
};

export const login = (username, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:3001/user/login', { username, password });
      if (response.data.success) {
        dispatch({ type: LOGIN_SUCCESS, payload: response.data.user });
        return true;
      } else {
        dispatch({ type: LOGIN_FAILURE, payload: 'Invalid username or password' });
        return false;
      }
    } catch (error) {
      console.error('Error during login:', error);
      dispatch({ type: LOGIN_FAILURE, payload: 'An error occurred during login' });
      return false;
    }
  };
};

export const signup = (userData)=>{
  return async(dispatch)=>{
    try {
      console.log(userData)
      const response = await axios.post('http://localhost:3001/user',userData)
      dispatch({type:POST_USER,payload:response.data})
    } catch (error) {
      console.error(`Error posting userData ${userData}:`, error);

    }
  }
}
export const logout = () => {
  return {
      type: LOGOUT,
  };
};