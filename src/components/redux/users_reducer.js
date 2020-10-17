import {userAPI} from "../api/api";
import {createSelector} from "reselect";

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
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
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
            };
        case SET_PAGE_СURRENT:
            return {
                ...state,
                pageСurrent: action.pageCurrent
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

export const getUsersThunkCreator = (pageСurrent, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setPageCurrent(pageСurrent));
        userAPI.getUsers(pageСurrent, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(usersTotalCount(data.totalCount));
        });
    }
};

export const followThC = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        userAPI.follow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(userId));
            }
            dispatch(toggleIsFollowingProgress(false, userId));
        });
    }
};

export const unfollowThC = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        userAPI.unfollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollow(userId));
            }
            dispatch(toggleIsFollowingProgress(false, userId));
        });
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
    console.log('тронул')
    return users.filter(u => true)
    });


export const getPageSize = (state) => {
    return state.usersPage.pageSize
};

export const getTotalCount = (state) => {
    return state.usersPage.totalCount
};

export const getPageСurrent = (state) => {
    return state.usersPage.pageСurrent
};

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
};

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
};

export default usersReducer;