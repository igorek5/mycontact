import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';

const MyPosts = (props) => {

    let newPostData = props.post.map(p => (<Post message={p.message} like={p.like}/>))

    return (

        <section className={s.my__posts}>
            <h2 className={s.title}>My posts</h2>
            <PostForm dispatch={props.dispatch}
                      newPostText={props.newPostText}
                />

            <div className={s.posts}>
                {newPostData}
            </div>
        </section>

    )
}

export default MyPosts;