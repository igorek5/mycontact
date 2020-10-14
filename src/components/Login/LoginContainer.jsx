import React from "react";
import Login from "./Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {setlogin} from "../redux/auth_reducer";

class LoginContainer extends React.Component {


    render() {
        return <Login setlogin={this.props.setlogin}/>
    };
}

let mapStateToProps = (state) => ({

});

export default compose(connect(mapStateToProps, {setlogin}))(LoginContainer);