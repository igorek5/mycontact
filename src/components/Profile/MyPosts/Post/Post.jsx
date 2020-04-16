import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (


        <div className={s.post}>
            <div className={s.avatar}></div>
            <p className={s.text}>{props.message}</p>
            <span className={s.like}>Like {props.like}</span>
        </div>

    )
}

export default Post;