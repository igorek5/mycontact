import React from 'react';
import {authAPI} from "../api/api";

const SET_Auth_USER_DATA = 'SET_Auth_USER_DATA';
const IS_USER_AUTH = 'IS_USER_AUTH';
const SET_LOGIN_REGISTER = 'SET_LOGIN_REGISTER';

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
        case SET_Auth_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        case SET_LOGIN_REGISTER:
            return {
                ...state,
                userIdRegister: action.userIdRegister
            }

        default:
            return state;
    }
    return state;
}

const setAuthUserData = (email, userId, login) =>
    ({type: SET_Auth_USER_DATA, data: {email, userId, login}});

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me().then(data => {
            if (data.resultCode === 0) {
                let {email, id, login} = data.data; //деструктуризируем
                dispatch(setAuthUserData(email, id, login));
            }
        });
    }
}

const setloginRegisteAC = (userIdRegister) =>
    ({type: SET_LOGIN_REGISTER, userIdRegister});

export const setloginRegister = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.loginRegister(email, password, rememberMe).then(data => {
            debugger
            if (data.resultCode === 0) {
                dispatch(setloginRegisteAC(data.data.userId));
            }
        });
    }
}

export default authReducer;