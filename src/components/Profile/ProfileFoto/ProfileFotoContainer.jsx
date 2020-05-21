import React from 'react';
import ProfileFoto from "./ProfileFoto";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        profileFoto: state.profilePage.profileFoto
    }
}

const ProfileFotoContainer = connect (mapStateToProps)(ProfileFoto);

export default ProfileFotoContainer ;