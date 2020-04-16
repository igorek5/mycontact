import React from 'react';
import s from './Profile.module.css';
import UserInfo from './UserInfo/UserInfo';
import UserFoto from './UserFoto/UserFoto';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <main className={s.profile}>

            <h1 className='visually_hidden'>My contact</h1>

            <UserInfo />
            <UserFoto />
            <MyPosts />

        </main>
    )
}

export default Profile;