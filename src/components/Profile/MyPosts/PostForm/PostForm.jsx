import React from 'react';
import s from './PostForm.module.css';

const PostForm = () => {
    let newPostElement = React.createRef();

    let newPost = () => {
       let text = newPostElement.current.value;
       alert(text);
    }

    return (

        <div className={s.form}>
            <textarea ref={newPostElement} className={s.input} name='text' rows='3' placeholder='Что у вас нового?'></textarea>

            <button onClick={newPost} className='button' type='submit'>Send
            </button>
        </div>

    )
}

export default PostForm;