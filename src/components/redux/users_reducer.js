import React from 'react';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE_СURRENT = 'SET_PAGE_СURRENT';
const TOTAL_COUNT = 'TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGLE_IS_FETCHING';
let initialState = {
    users: [],
    pageSize: 50,
    totalCount: 0,
    pageСurrent: 1,
    isFetching: true
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
                users: [...action.users]
                //users: [...state.users, ...action.users] склееваем два массива
            }
        case TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            }
        case SET_PAGE_СURRENT:
            return {
                ...state,
                pageСurrent: action.pageCurrent
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
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
    ({type: SET_USERS, users});
export const setPageCurrentAC = (pageCurrent) =>
    ({type: SET_PAGE_СURRENT, pageCurrent});
export const usersTotalCountAC = (totalCount) =>
    ({type: TOTAL_COUNT, totalCount});
export const toggleIsFetchingAC = (isFetching) =>
    ({type: TOGGLE_IS_FETCHING, isFetching});


export default usersReducer;