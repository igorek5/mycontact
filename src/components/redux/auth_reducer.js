import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const AUTH_USER_DATA = 'myContact/auth/AUTH_USER_DATA';
const SET_LOGIN_REGISTER = 'myContact/auth/SET_LOGIN_REGISTER';

let initialState = {
    email: null,
    userId: null,
    login: null,

    isAuth: false,
    isFetching: true,
    userIdRegister: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        case SET_LOGIN_REGISTER:
            return {
                ...state,
                userIdRegister: action.userIdRegister
            };

        default:
            return state;
    }
    return state;
}

const authUserData = (email, userId, login, isAuth) =>
    ({type: AUTH_USER_DATA, data: {email, userId, login, isAuth}});

export const getAuthUserData = () => {
    return async (dispatch) => {

        let data = await authAPI.me();
        if (data.resultCode === 0) {
            let {email, id, login} = data.data; //деструктуризируем
            dispatch(authUserData(email, id, login, true));
        }
    }
};

export const setlogin = (email, password, rememberMe) => {
    return async (dispatch) => {
        let data = await authAPI.loginRegister(email, password, rememberMe);
        if (data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            let message = data.messages.length > 0 ? data.messages[0] : 'Ошибка';
            dispatch(stopSubmit('login', {_error: message}))
        }
    }
};

export const logOut = () => {
    return async (dispatch) => {
        let data = await authAPI.logOut();
        if (data.resultCode === 0) {
            dispatch(authUserData(null, null, null, false));
        }
    }
};

export default authReducer;