import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';

const MyPosts = (props) => {

    let PostData = [
        {id: 0, message: 'Привет ребзо, как вы?', like: 26},
        {id: 1, message: 'У меня отличная новость! Да!', like: 10}
    ]

    let newPostData = PostData.map(p => (<Post message={p.message} like={p.like}/> ))

    return (

        <section className={s.my__posts}>
            <h2 className={s.title}>My posts</h2>
            <PostForm />

            <div className={s.posts}>
                { newPostData }
            </div>
        </section>

    )
}

export default MyPosts;