import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileFoto from './ProfileFoto/ProfileFoto';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
    return (
        <main className={s.profile}>

            <h1 className='visually_hidden'>My contact</h1>

            <ProfileInfo />
            <ProfileFoto store={props.store} />
            <MyPosts store={props.store}/>

        </main>
    )
}

export default Profile;