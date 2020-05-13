import React from 'react';
import s from './News.module.css'
import {addNewsActionCreator, updateNewNewsTextActionCreator} from "../redux/news_reducer";

const MessageNews = (props) => {
    return (
        <p>Id = {props.id} сообщение: {props.text}</p>
    )
}

const News = (props) => {
    let newNewsMessage = props.newsMessage.newsMessage.map(el => (<MessageNews id={el.id} text={el.newsMessage} /> ));

    let addNews = () => {
        props.dispatch( addNewsActionCreator() );
    }

    let onMessageChenge = (e) => {
        let text = e.target.value;
        props.dispatch( updateNewNewsTextActionCreator(text) );
    }

    return (
        <div className={s.wrapper}>

                <textarea onChange={onMessageChenge} value={props.newsMessage.newNewsText}></textarea>

                <button onClick={addNews} className='button'>отправить</button>

            {newNewsMessage}
        </div>
    )
}

export default News;