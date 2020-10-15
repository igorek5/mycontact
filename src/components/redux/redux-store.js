import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import messagesReducer from './messages_reducer';
import profileReducer from './profile_reducer';
import newsReducer from './news_reducer';
import navbarReducer from './navbar_reducer';
import usersReducer from './users_reducer';
import authReducer from './auth_reducer';
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./app_reducer";

let reducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    navbarPage: navbarReducer,
    newsPage: newsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;