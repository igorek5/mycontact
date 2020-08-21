import React from 'react';

const SET_Auth_USER_DATA = 'SET_Auth_USER_DATA';
const IS_USER_AUTH = 'IS_USER_AUTH';

let initialState = {
    email: null,
    userId: null,
    login: null,

    isAuth: false,
    isFetching: true
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_Auth_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
    return state;
}

export const setAuthUserData = (email, userId, login) =>
    ({type: SET_Auth_USER_DATA, data: {email, userId, login}});


export default authReducer;