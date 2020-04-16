import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';

const MyPosts = () => {
    return (

        <section className={s.my__posts}>
            <h2 className={s.title}>My posts</h2>
            <PostForm />

            <div className={s.posts}>
                <Post message='Привет ребзо, как вы?' like='25'/>
                <Post message='У меня отличная новость! Да' like='10'/>
            </div>
        </section>

    )
}

export default MyPosts;