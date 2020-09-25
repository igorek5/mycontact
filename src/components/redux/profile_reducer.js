import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS ='SET_PROFILE_STATUS';

let initialState = {
    post: [
        {id: 0, message: 'Привет ребзо, как вы?', like: 28},
        {id: 1, message: 'У меня отличная новость! Да!', like: 10},
        {id: 3, message: 'У меня отличная новость! Да!', like: 11},
        {id: 4, message: 'пробаба! Да!', like: 11}
    ],
    profileFoto: [
        {id: 0, foto: 'https://sun9-39.userapi.com/c847218/v847218443/c9d21/gSfLy5GU1Xw.jpg'},
        {id: 1, foto: 'https://sun9-45.userapi.com/c847218/v847218183/ccbe1/GypPjHucukA.jpg'},
        {id: 2, foto: 'https://sun9-44.userapi.com/c847218/v847218443/c9d46/IjWViAXT1C0.jpg'},
        {id: 3, foto: 'https://sun9-26.userapi.com/c847218/v847218443/c9d59/2UlhylPxhuU.jpg'}
    ],
    profile: null,
    newPostText: '',
    profileStatus: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:

            return {
                ...state,
                newPostText: '',
                post: [{id: 7, message: state.newPostText, Like: 0}, ...state.post],

            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_PROFILE_STATUS:
            return {
                ...state,
                profileStatus: action.status
            }

        default:
            return state;
    }

    return state
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (newText) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: newText}
};

const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const getUserProfile = (userId) => {
    return (dispatch) => {
        userAPI.getUserProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
};

const setUserStatus = (status) => ({type: SET_PROFILE_STATUS, status});

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setUserStatus(data));

        });
    }
};

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.putStatus(status).then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        });
    }
}




export default profileReducer;