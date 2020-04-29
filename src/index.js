import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {
    addMessage, addNews,
    addPost, subscribe, updateNewMessageText, updateNewNewsText,
    updateNewPostText
} from "./components/redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPost={addPost}
                     addMessage={addMessage}
                     updateNewPostText={updateNewPostText}
                     updateNewMessageText={updateNewMessageText}
                     addNews={addNews}
                     updateNewNewsText={updateNewNewsText}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree();

subscribe(renderEntireTree);


serviceWorker.unregister();
