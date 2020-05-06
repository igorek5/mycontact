import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./components/redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getState()}
                     addPost={store.addPost.bind(store)}
                     addMessage={store.addMessage.bind(store)}
                     updateNewPostText={store.updateNewPostText.bind(store)}
                     updateNewMessageText={store.updateNewMessageText.bind(store)}
                     addNews={store.addNews.bind(store)}
                     updateNewNewsText={store.updateNewNewsText.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree();

store.subscribe(renderEntireTree);


serviceWorker.unregister();
