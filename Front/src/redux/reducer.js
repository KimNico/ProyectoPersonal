import { GET_EMPRESA,
    GET_USERS,
    GET_PUBLICACIONES,
    GET_EMPLEOS_BY_ID,
    GET_EMPRESA_BY_ID,
    GET_USERS_BY_ID,
    DELETE_EMPLEO,
    DELETE_EMPRESA,
    DELETE_USER } from "./action";

const initialState ={
    users:[],
    publicaciones:[],
    empresas:[],
    saved:[],
}

const rootReducer = (state = initialState,action) =>{
    switch(action.type){
        case GET_USERS:
            return{...state,
                users:action.payload
            };
        case GET_EMPRESA:
            return{
                ...state,
                empresas:action.payload
            };
        case GET_PUBLICACIONES:
            return{
                ...state,
                publicaciones:action.payload
            };
        case GET_EMPLEOS_BY_ID:
            return{
                ...state,
                publicaciones:action.payload
            };
        case GET_EMPRESA_BY_ID:
            return{
                ...state,
                empresas:action.payload
            };
        case GET_USERS_BY_ID:
            return{
                ...state,
                users:action.payload
            }
        case DELETE_EMPLEO:
            let deleteEmpleo = state.publicaciones.filter((p)=>p.id !== action.payload)
            return{
                ...state,
                publicaciones:deleteEmpleo
            };
        case DELETE_EMPRESA:
            let deleteEmpresa = state.empresas.filter((p)=>p.id !== action.payload)
            return{
                ...state,
                empresas:deleteEmpresa
            }
        case DELETE_USER:
            let deleteUser = state.users.filter((p)=>p.id !== action.payload)
            return{
                ...state,
                users:deleteUser,
            }
    }
}