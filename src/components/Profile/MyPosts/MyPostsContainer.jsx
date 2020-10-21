import React from 'react';
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

let mapStateToPost = (state) => {
    return {
        post: state.profilePage.post
    }
};

const MyPostsContainer = connect(mapStateToPost)(MyPosts);


export default MyPostsContainer;