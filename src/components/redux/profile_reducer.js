import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'myContact/profile/ADD_POST';
const SET_USER_PROFILE = 'myContact/profile/SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'myContact/profile/SET_PROFILE_STATUS';
const DELETE_POST = 'myContact/profile/DELETE_POST';

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
    profileStatus: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:

           let newPostText = action.text;
            return {
                ...state,
                post: [{id: 7, message: newPostText, Like: 0}, ...state.post],

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
            };
        case DELETE_POST:

            return {
                ...state,
                post: state.post.filter(p => p.id != action.idPost)
            };


        default:
            return state;
    }

    return state
};

export const addPostActionCreator = (text) => ({type: ADD_POST, text});

export const deletePostAC = (idPost) => ({type: DELETE_POST, idPost});

const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let data = await userAPI.getUserProfile(userId);
            dispatch(setUserProfile(data));
    }
};

const setUserStatus = (status) => ({type: SET_PROFILE_STATUS, status});

export const getUserStatus = (userId) => {
    return async (dispatch) => {
       let data = await profileAPI.getStatus(userId);
            dispatch(setUserStatus(data));
    }
};

export const updateUserStatus = (status) => {
    return async (dispatch) => {
        let data = await profileAPI.putStatus(status);
            if (data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
    }
};




export default profileReducer;