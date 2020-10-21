import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import PostFormContainer from "./PostForm/PostFotmContainer";


/*window.props = [];*/
const MyPosts = React.memo(props => {
    console.log('Render');

/*shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextProps !== this.props || nextState !== this.state;
}*/
        let newPostData = props.post.map(p => (<Post message={p.message} key={p.id} like={p.like}/>));


        return (

            <section className={s.my__posts}>
                <h2 className={s.title}>My posts</h2>
                <PostFormContainer/>

                <div className={s.posts}>
                    {newPostData}
                </div>
            </section>

        )
    }
);


export default MyPosts;