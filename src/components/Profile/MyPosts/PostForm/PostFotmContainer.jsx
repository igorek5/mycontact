import React from 'react';
import PostForm from "./PostForm";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile_reducer";

const PostFormContainer = (props) => {

    let profilePage = props.store.getState().profilePage;
    let addPost = () => {
       props.store.dispatch( addPostActionCreator() )
    }

    let newPostText = (text) => {
        props.store.dispatch( updateNewPostTextActionCreator(text) );
    }



    return <PostForm profilePage={profilePage} addPost={addPost} newPostText={newPostText}/>
}

export default PostFormContainer;