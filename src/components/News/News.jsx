import React from 'react';
import s from './News.module.css'

const MessageNews = (props) => {
    return (
        <p>Id = {props.id} сообщение: {props.text}</p>
    )
}

const News = (props) => {
    let newNewsMessage = props.newsPage.newsMessage.map(el => (<MessageNews id={el.id} text={el.newsMessage} /> ));

    let onAddNews = () => {
        props.addNews();
    }

    let onMessageChenge = (e) => {
        let text = e.target.value;
        props.newNewsText(text);
    }


    return (
        <div className={s.wrapper}>

                <textarea onChange={onMessageChenge} value={props.newsPage.newNewsText}></textarea>

                <button onClick={onAddNews} className='button'>отправить</button>

            {newNewsMessage}
        </div>
    )
}

export default News;