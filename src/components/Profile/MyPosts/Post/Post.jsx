import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (


        <div className={s.post}>
            <img className={s.avatar} src={'https://sun9-71.userapi.com/c846324/v846324431/be6df/47a2VaUKAKk.jpg'}/>
            <p className={s.text}>{props.message}</p>
            <span className={s.like}>Like {props.like}</span>
        </div>

    )
}

export default Post;