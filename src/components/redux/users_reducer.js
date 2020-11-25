import {userAPI} from "../api/api";
import {createSelector} from "reselect";
import {updateObjectInArray} from "../utils/object_helpers";

const FOLLOW = 'myContact/users/FOLLOW';
const UNFOLLOW = 'myContact/users/UNFOLLOW';
const SET_USERS = 'myContact/users/SET_USERS';
const SET_PAGE_CURRENT = 'myContact/users/SET_PAGE_СURRENT';
const TOTAL_COUNT = 'myContact/users/TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'myContact/users/TOGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'myContact/users/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 50,
    totalCount: 0,
    pageCurrent: 1,
    isFetching: true,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, 'id', action.id,  {followed: true})
            };

                /*state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }*/
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, 'id', action.id, {followed: false})
            };
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
                //users: [...state.users, ...action.users] склееваем два массива
            };
        case TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            };
        case SET_PAGE_CURRENT:
            return {
                ...state,
                pageCurrent: action.pageCurrent
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId] // если action.isFetching tru то мы добовляем id
                    // в массив диструктуризаруем массив который был и в конец добовляем id пользователя
                    : state.followingInProgress.filter(id => id !== action.userId) // если action.isFetching false то мы
                //создаем новый массив с помощью метода filter.Фильтрация удаляем, мы пропускаем ту id которая не равна action.userId
                // которая равна удаляем
            };
        default:
            return state;
    }
    return  state;
};

const follow = (userId) =>
    ({type: FOLLOW, id: userId});
const unfollow = (userId) =>
    ({type: UNFOLLOW, id: userId});
const setUsers = (users) =>
    ({type: SET_USERS, users});
const setPageCurrent = (pageCurrent) =>
    ({type: SET_PAGE_CURRENT, pageCurrent});
const usersTotalCount = (totalCount) =>
    ({type: TOTAL_COUNT, totalCount});
const toggleIsFetching = (isFetching) =>
    ({type: TOGGLE_IS_FETCHING, isFetching});
const toggleIsFollowingProgress = (isFetching, userId) =>
    ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export const getUsersThunkCreator = (pageCurrent, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setPageCurrent(pageCurrent));
        let data = await userAPI.getUsers(pageCurrent, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(usersTotalCount(data.totalCount));
    }
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    let data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleIsFollowingProgress(false, userId));
};

export const followThC = (userId) => {
    return async (dispatch) => {

        //let apiMethod = await userAPI.follow.bind(userAPI);
        //let actionCreator = follow;

        followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userAPI), follow)
    }
};

export const unfollowThC = (userId) => {
    return async (dispatch) => {

        followUnfollowFlow(dispatch, userId, userAPI.unfollow.bind(userAPI), unfollow)
    }
};

// селекторы

const getUsers = (state) => {
    return state.usersPage.users
};

/*export const getUsersSelect = (state) => { // пример, если создть такой селектор, то метод filter будет постоянно копировать обьект и запускать перересовку если где-то в state поменяется что-то в другом месте
    return getUsers(state).filter(u => true)
};*/

/*export const getUsersSelector = createSelector(getUsers, getIsFetching,
    (users, isFetchung) => {
        console.log('тронул')   // пример добовления нескольких зависимостей
        return users.filter(u => true)
    });*/

export const getUsersSelector = createSelector(getUsers,
    (users) => {
        return users.filter(u => true)
    });


export const getPageSize = (state) => {
    return state.usersPage.pageSize
};

export const getTotalCount = (state) => {
    return state.usersPage.totalCount
};

export const getPageCurrent = (state) => {
    return state.usersPage.pageCurrent
};

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
};

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
};

export default usersReducer;