import React from 'react';
import s from './PostForm.module.css';

const PostForm = () => {
    return (
        
        <form className={s.form} method='post' action='#'>
            <textarea className={s.input} name='text' rows='3' placeholder='Что у вас нового?'></textarea>
            <button className={s.posts__button} type='submit'>Send</button>
        </form>

    )
}

export default PostForm;