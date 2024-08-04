import { 
    GET_EMPRESA,
    GET_USERS,
    GET_PUBLICACIONES,
    GET_EMPLEOS_BY_ID,
    GET_EMPRESA_BY_ID,
    GET_USERS_BY_ID,
    DELETE_EMPLEO,
    DELETE_EMPRESA,
    DELETE_USER 
} from "./action";

const initialState = {
    users: [],
    publicaciones: [],
    empresas: [],
    saved: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
            };
        case GET_EMPRESA:
            return {
                ...state,
                empresas: action.payload,
            };
        case GET_PUBLICACIONES:
            return {
                ...state,
                publicaciones: action.payload,
            };
        case GET_EMPLEOS_BY_ID:
            return {
                ...state,
                publicaciones: state.publicaciones.map(pub =>
                    pub.id === action.payload.id ? action.payload : pub
                ),
            };
        case GET_EMPRESA_BY_ID:
            return {
                ...state,
                empresas: state.empresas.map(emp =>
                    emp.id === action.payload.id ? action.payload : emp
                ),
            };
        case GET_USERS_BY_ID:
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.payload.id ? action.payload : user
                ),
            };
        case DELETE_EMPLEO:
            return {
                ...state,
                publicaciones: state.publicaciones.filter(pub => pub.id !== action.payload),
            };
        case DELETE_EMPRESA:
            return {
                ...state,
                empresas: state.empresas.filter(emp => emp.id !== action.payload),
            };
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload),
            };
        default:
            return {...state}; // Always include a default return statement
    }
};

export default rootReducer;
