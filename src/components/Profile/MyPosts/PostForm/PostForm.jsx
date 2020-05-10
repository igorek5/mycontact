import React from 'react';
import s from './PostForm.module.css';

const PostForm = (props) => {
    let newPostElement = React.createRef();

    let newPost = () => {
       props.dispatch({ type: 'ADD_POST' });
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch( {type: 'UPDATE_NEW_POST_TEXT', newText: text} );
    }



    return (

        <div className={s.form}>
            <textarea onChange={ onPostChange } ref={newPostElement} value={props.newPostText}
                      className={s.input} name='text' rows='3' placeholder='Что у вас нового?'></textarea>

            <button onClick={newPost} className='button' type='submit'>Send
            </button>
        </div>

    )
}

export default PostForm;