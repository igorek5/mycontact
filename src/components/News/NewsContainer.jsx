import React from 'react';
import {addNewsActionCreator, updateNewNewsTextActionCreator} from "../redux/news_reducer";
import News from "./News";


const NewsContainer = (props) => {
    let addNews = () => {
        props.store.dispatch( addNewsActionCreator() );
    }

    let newNewsText = (text) => {
        props.store.dispatch( updateNewNewsTextActionCreator(text) );
    }

    return <News  newsPage={props.store.getState().newsPage}
                  newNewsText={newNewsText}
                  addNews={addNews}/>
}

export default NewsContainer;