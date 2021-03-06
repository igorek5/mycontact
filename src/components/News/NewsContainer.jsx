import React from 'react';
import {addNewsActionCreator, updateNewNewsTextActionCreator} from "../redux/news_reducer";
import News from "./News";
import {connect} from "react-redux";
import {compose} from "redux";
import {withHoc} from "../hoc/hocTest";

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

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(News);
