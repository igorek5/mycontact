import React from "react";
import Login from "./Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {setloginRegister} from "../redux/auth_reducer";

class LoginContainer extends React.Component {


    render() {
        return <Login setloginRegister={this.props.setloginRegister}/>
    };
}

let mapStateToProps = (state) => ({

});

export default compose(connect(mapStateToProps, {setloginRegister}))(LoginContainer);