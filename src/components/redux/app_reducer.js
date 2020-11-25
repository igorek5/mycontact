import {getAuthUserData} from "./auth_reducer";

const SET_INIZIALIZED = 'myContact/app/SET_INIZIALIZED';

let initialState = {
    initialized: false
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INIZIALIZED:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
    return state
};

const initializedAC = () => ({type: SET_INIZIALIZED});

export const setInitialized = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthUserData());
        Promise.all([promise]).then(() => {  // для того чтобы добавить серию промисов в массив Promise.all([promis, mass, promisesss])
            dispatch(initializedAC());
        })
    }
};



