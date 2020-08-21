import {combineReducers, createStore} from "redux";
import messagesReducer from "./messages_reducer";
import profileReducer from "./profile_reducer";
import newsReducer from "./news_reducer";
import navbarReducer from "./navbar_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";

let reducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    navbarPage: navbarReducer,
    newsPage: newsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers);

window.store = store;

export default store;