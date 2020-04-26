import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {renderEntireTree} from "./render";
import state from "./components/redux/state";

renderEntireTree(state);


serviceWorker.unregister();
