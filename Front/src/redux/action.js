import axios from 'axios';
export const GET_EMPRESA = GET_EMPRESA
export const GET_PUBLICACIONES = GET_PUBLICACIONES
export const GET_USERS = GET_USERS
export const GET_EMPLEOS_BY_ID = GET_EMPLEOS_BY_ID
export const GET_USERS_BY_ID = GET_USERS_BY_ID
export const GET_EMPRESA_BY_ID = GET_EMPRESA_BY_ID
export const DELETE_EMPLEO = DELETE_EMPLEO
export const DELETE_USER = DELETE_USER
export const DELETE_EMPRESA = DELETE_EMPRESA
export const GET_EMPRESA_BY_NAME = GET_EMPRESA_BY_NAME


export const getUsers = () => {
    return async function (dispatch) {
      const usersData = await axios.get(`/users`);
      const user = usersData.data;
      dispatch({ type: GET_USERS, payload: user });
    };
  };

  export const getUser = (id) => {
    return async function (dispatch) {
      const userData = await axios.get(`/users/${id}`);
      const user = userData.data;
      dispatch({ type: GET_USERS_BY_ID, payload: user });
    };
  };

  export const getEmpresas = () => {
    return async function (dispatch) {
      const empresasData = await axios.get(`/empresa`);
      const empresas = empresasData.data;
      dispatch({ type: GET_EMPRESA, payload: empresas });
    };
  };

  export const getEmpresaById = (id) => {
    return async function (dispatch) {
      const empresaData = await axios.get(`/empresa/${id}`);
      const empresa = empresaData.data;
      dispatch({ type: GET_EMPRESA_BY_ID, payload: empresa });
    };
  };
  
  export const getPublicaciones = ()=>{
    return async function(dispatch){
      const publicacionData = await axios.get('/publicaciones')
      const publicaciones = publicacionData.data
      dispatch({type: GET_PUBLICACIONES,payload:publicaciones})
    }
  }

  export const getPublicacionesById = (id)=>{
    return async function(dispatch){
      const publicacionData = await axios.get(`/publicaciones/${id}`)
      const publicaciones = publicacionData.data
      dispatch({type: GET_PUBLICACIONES,payload:publicaciones})
    }
  }
  
  export const deleteEmpresa = (id)=>{
    return async function(dispatch){
      await axios.delete(`/empresa/?id=${id}`).then(dispatch(getEmpresas()))
    }
  }

export const getEmpresaByName = (name) =>{
  return async function(dispatch){
    const empresaData = await axios.get(`/empresa/?name=${name}`)
    const empresa = empresaData.data
    dispatch({type:GET_EMPRESA_BY_NAME,payload:empresa})
  }
}