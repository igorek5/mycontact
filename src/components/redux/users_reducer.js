import React from "react";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [
        /*{
            id: 1,
            followed: true,
            fotoUrl: 'sun9-72.userapi.com/c624718/v624718738/3f55/_KShO4LDOos.jpg',
            UserName: 'Олег К',
            status: 'Я терм...',
            location: {country: 'Russia', city: 'Tolyatti'}
        },
        {
            id: 2,
            followed: false,
            fotoUrl: 'sun9-72.userapi.com/c624718/v624718738/3f55/_KShO4LDOos.jpg',
            UserName: 'Олег К',
            status: 'Я терм...',
            location: {country: 'Russia', city: 'Tolyatti'}

        },
        {
            id: 3,
            followed: true,
            fotoUrl: 'sun9-72.userapi.com/c624718/v624718738/3f55/_KShO4LDOos.jpg',
            UserName: 'Олег К',
            status: 'Я терм...',
            location: {country: 'Russia', city: 'Tolyatti'}

        },
        {
            id: 4,
            followed: true,
            fotoUrl: 'sun9-72.userapi.com/c624718/v624718738/3f55/_KShO4LDOos.jpg',
            UserName: 'Олег К',
            status: 'Я терм...',
            location: {country: 'Russia', city: 'Tolyatti'}

        }*/]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users] //склееваем два массива

            }
        default:
            return state;
    }
    return state;
}

export const followAC = (userId) =>
    ({type: FOLLOW, id: userId});
export const unfollowAC = (userId) =>
    ({type: UNFOLLOW, id: userId});
export const setUsersAC = (users) =>
    ({type: SET_USERS, users})

export default usersReducer;