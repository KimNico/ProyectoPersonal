import {
    GET_EMPRESA,
    GET_USERS,
    GET_PUBLICACIONES,
    GET_PUBLICACIONES_BY_ID,
    GET_EMPRESA_BY_ID,
    GET_USERS_BY_ID,
    DELETE_EMPLEO,
    DELETE_EMPRESA,
    DELETE_USER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    POST_USER,
    LOGOUT,
} from "./action";

const initialState = {
    users: [],
    user:{},
    publicaciones: [],
    empresas: [],
    saved: [],
    publicacion_details:{},
    currentUser: null,
    loginError: null,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
            };
        case GET_USERS_BY_ID:
            return{
                ...state,
                user:action.payload,
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
        case GET_PUBLICACIONES_BY_ID:
            return {
                ...state,
                publicacion_details: action.payload,
                
            };
            
        case GET_EMPRESA_BY_ID:
            return {
                ...state,
                empresas: state.empresas.map(emp =>
                    emp.id === action.payload.id ? action.payload : emp
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
        case LOGIN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                loginError: null,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                currentUser: null,
                loginError: action.payload,
            };
        case POST_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case LOGOUT: // Handle logout action
            return {
                ...state,
                currentUser: null,
                loginError: null,
            };
        default:
            return state;
    }
};

export default rootReducer;
