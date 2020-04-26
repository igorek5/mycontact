import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, updateNewMessageText, updateNewPostText} from "./components/redux/state";
import {addMessage} from "./components/redux/state";
import {BrowserRouter} from "react-router-dom";


export let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPost={addPost}
                     addMessage={addMessage}
                     updateNewPostText={updateNewPostText}
                     updateNewMessageText={updateNewMessageText}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
