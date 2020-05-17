import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./components/redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree();

store.subscribe(renderEntireTree);


serviceWorker.unregister();
