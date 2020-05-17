import React from 'react';
import s from './PostForm.module.css';


const PostForm = (props) => {
    let newPost = () => {
       props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.newPostText(text);
    }



    return (

        <div className={s.form}>
            <textarea onChange={ onPostChange } value={props.profilePage.newPostText}
                      className={s.input} name='text' rows='3' placeholder='Что у вас нового?'></textarea>

            <button onClick={newPost} className='button' type='submit'>Send
            </button>
        </div>

    )
}

export default PostForm;