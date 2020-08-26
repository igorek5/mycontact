import React from 'react';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE_СURRENT = 'SET_PAGE_СURRENT';
const TOTAL_COUNT = 'TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 50,
    totalCount: 0,
    pageСurrent: 1,
    isFetching: true,
    followingInProgress: []
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
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId] // если action.isFetching tru то мы добовляем id
                    // в массив диструктуризаруем массив который был и в конец добовляем id пользователя
                    : state.followingInProgress.filter(id => id != action.userId) // если action.isFetching false то мы
                //создаем новый массив с помощью метода filter.Фильтрация удаляем, мы пропускаем ту id которая не равна action.userId
                // которая равна удаляем
            }
        default:
            return state;
    }
    return state;
}

export const follow = (userId) =>
    ({type: FOLLOW, id: userId});
export const unfollow = (userId) =>
    ({type: UNFOLLOW, id: userId});
export const setUsers = (users) =>
    ({type: SET_USERS, users});
export const setPageCurrent = (pageCurrent) =>
    ({type: SET_PAGE_СURRENT, pageCurrent});
export const usersTotalCount = (totalCount) =>
    ({type: TOTAL_COUNT, totalCount});
export const toggleIsFetching = (isFetching) =>
    ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingProgress = (isFetching, userId) =>
    ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});


export default usersReducer;