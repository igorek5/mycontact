import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let DialogsData = [
    {id: 1, name: 'Кристю Б.'},
    {id: 2, name: 'Жека Ж.'},
    {id: 3, name: 'Роман З.'},
    {id: 4, name: 'Олек К.'},
    {id: 5, name: 'Иван П.'},
    {id: 6, name: 'Павлик П.'},
    {id: 7, name: 'Санек С.'},
    {id: 8, name: 'Роман Б.'},
    {id: 9, name: 'Зеленев С.'},
    {id: 10, name: 'Андрей М.'},
    {id: 11, name: 'Щёголев Д.'},
    {id: 12, name: 'Андрей П.'},
    {id: 13, name: 'Антон З.'},
    {id: 14, name: 'Черная Б.'},
    {id: 16, name: 'Кристю'}
]

let MessageDate = [
    {id: 1, message: 'Какие дела?'},
    {id: 2, message: 'А у тебя?'},
    {id: 3, message: 'А ты че?'},
    {id: 4, message: 'А я вам звезды дам!'},
    {id: 5, message: 'А я вам звезды дам!'}
]

let PostData = [
        {id: 0, message: 'Привет ребзо, как вы?', like: 28},
        {id: 1, message: 'У меня отличная новость! Да!', like: 10},
        {id: 3, message: 'У меня отличная новость! Да!', like: 11}
    ]


ReactDOM.render(
  <React.StrictMode>
    <App post={PostData} dialogs={DialogsData} message={MessageDate} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
