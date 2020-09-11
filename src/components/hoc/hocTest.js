import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsTestHoc = (state) => ({
    auth: state.auth.isAuth
})

export const withHoc = (Component) => {
    let wrapperContainer = (props) => {
        if(!props.auth) return <Redirect to='/login'/>
        return <Component {...props}/>
    }

    let connectedForTestHoc = connect(mapStateToPropsTestHoc)(wrapperContainer)
    return connectedForTestHoc;
}