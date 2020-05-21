import React from 'react';
import {addNewsActionCreator, updateNewNewsTextActionCreator} from "../redux/news_reducer";
import News from "./News";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newsPage: state.newsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNews: () => {
            dispatch(addNewsActionCreator());
        },
        newNewsText: (text) => {
        dispatch(updateNewNewsTextActionCreator(text));
        }
    }
}


const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;