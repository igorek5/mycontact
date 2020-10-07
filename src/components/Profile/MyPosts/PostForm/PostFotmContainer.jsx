import React from 'react';
import PostForm from "./PostForm";
import {addPostActionCreator} from "../../../redux/profile_reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch( addPostActionCreator(text) );
        }
    }
}

const PostFormContainer = connect(mapStateToProps, mapDispatchToProps)(PostForm);

export default PostFormContainer;