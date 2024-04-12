import axios from 'axios';
export const GET_EMPRESA = GET_EMPRESA
export const GET_EMPLEOS = GET_EMPLEOS
export const GET_USERS = GET_USERS
export const GET_EMPLEOS_BY_ID = GET_EMPLEOS_BY_ID
export const GET_USERS_BY_ID = GET_USERS_BY_ID
export const GET_EMPRESA_BY_ID = GET_EMPRESA_BY_ID
export const DELETE_EMPLEO = DELETE_EMPLEO
export const DELETE_USER = DELETE_USER
export const DELETE_EMPRESA = DELETE_EMPRESA


export const getUsers = () => {
    return async function (dispatch) {
      const usersData = await axios.get(`/users`);
      const users = usersData.data;
      // console.log("get users result: ", users.length);
      dispatch({ type: GET_USERS, payload: users });
    };
  };

  export const getUser = (id) => {
    return async function (dispatch) {
      const userData = await axios.get(`/users/${id}`);
      const user = userData.data;
      // console.log("get users result: ", user.length);
      dispatch({ type: GET_USER, payload: user });
    };
  };
  