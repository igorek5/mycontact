import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileFotoContainer from "./ProfileFoto/ProfileFotoContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <main className={style.profile}>

            <h1 className='visually_hidden'>My contact</h1>

            <ProfileInfo profile={props.profile}
                         userStatus={props.userStatus}
                         updateUserStatus={props.updateUserStatus}/>
            <ProfileFotoContainer/>
            <MyPostsContainer />

        </main>
    )
}

export default Profile;