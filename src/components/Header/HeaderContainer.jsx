import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {setAuthUserDataThC} from "../redux/auth_reducer";

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.setAuthUserDataThC()
        /*userAPI.auth().then(data => {
            if (data.resultCode === 0) {
                let {email, id, login} = data.data; //деструктуризируем
                this.props.setAuthUserData(email, id, login);
            }
        });*/

    }

    render() {
        return <Header {...this.props} isAuth={this.props.isAuth} userId={this.props.userId}/>
    }

}
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    userLogin: state.auth.login,
    userId: state.auth.userId
}); //когда возвращает обьект то ставим круглые скобки

export default connect(mapStateToProps, {setAuthUserDataThC})(HeaderContainer);