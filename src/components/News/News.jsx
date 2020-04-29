import React from 'react';
import s from './News.module.css'

const MessageNews = (props) => {
    return (
        <p>Id = {props.id} сообщение: {props.text}</p>
    )
}

const News = (props) => {
    let newNewsMessage = props.newsMessage.newsMessage.map(el => (<MessageNews id={el.id} text={el.newsMessage} /> ));


    let newNewsElement = React.createRef();
    let addNews = () => {
        props.addNews();
    }

    let onMessageChenge = () => {
        let text = newNewsElement.current.value
        props.updateNewNewsText(text);
    }

    return (
        <div className={s.wrapper}>

                <textarea ref={newNewsElement} onChange={onMessageChenge} value={props.newsMessage.newNewsText}></textarea>

                <button onClick={addNews} className='button'>отправить</button>

            {newNewsMessage}
        </div>
    )
}

export default News;