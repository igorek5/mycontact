import React from 'react';
import s from './PostForm.module.css';
import {Field, reduxForm} from "redux-form";

const PostNewForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea'
                   className={s.input} name='text' rows='3' placeholder='Что у вас нового?'/>

            <button className='button' type='submit'>Send
            </button>
        </form>
    )
};

const PostReduxForm = reduxForm({form: 'profilePost'})(PostNewForm);


const PostForm = (props) => {
    let newPost = (value) => {
        props.addPost(value.text);
    }

    /*let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }*/



    return (

        <div className={s.form}>
            <PostReduxForm onSubmit={newPost}/>
        </div>

    )
}

export default PostForm;