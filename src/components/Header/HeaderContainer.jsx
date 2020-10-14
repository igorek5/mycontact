import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {getAuthUserData, logOut} from "../redux/auth_reducer";
import {compose} from "redux";

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props} isAuth={this.props.isAuth} userId={this.props.userId} logOut={this.props.logOut}/>
    }

}
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    userLogin: state.auth.login,
    userId: state.auth.userId
}); //когда возвращает обьект то ставим круглые скобки

export default compose(
    connect(mapStateToProps, {getAuthUserData, logOut})
)(HeaderContainer);

/*
export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);*/
