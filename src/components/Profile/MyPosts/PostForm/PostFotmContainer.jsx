import React from 'react';
import PostForm from "./PostForm";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile_reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch( addPostActionCreator() );
        },
        updateNewPostText: (text) => {
            dispatch( updateNewPostTextActionCreator(text) );
        }
    }
}

const PostFormContainer = connect(mapStateToProps, mapDispatchToProps)(PostForm);

export default PostFormContainer;