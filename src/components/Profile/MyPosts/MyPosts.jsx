import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';

const MyPosts = (props) => {

    let PostData = [
        {id: 0, message: 'Привет ребзо, как вы?', like: 25},
        {id: 1, message: 'У меня отличная новость! Да!', like: 10}

    ]

    return (

        <section className={s.my__posts}>
            <h2 className={s.title}>My posts</h2>
            <PostForm />

            <div className={s.posts}>
                <Post message={PostData[0].message} like={PostData[0].like} />
                <Post message={PostData[1].message} like={PostData[1].like} />
            </div>
        </section>

    )
}

export default MyPosts;