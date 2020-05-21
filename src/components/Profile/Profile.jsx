import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileFotoContainer from "./ProfileFoto/ProfileFotoContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <main className={s.profile}>

            <h1 className='visually_hidden'>My contact</h1>

            <ProfileInfo />
            <ProfileFotoContainer/>
            <MyPostsContainer />

        </main>
    )
}

export default Profile;