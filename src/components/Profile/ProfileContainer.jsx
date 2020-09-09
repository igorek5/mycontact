import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../redux/profile_reducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 10920
        }
        this.props.getUserProfile(userId);
    }

    render() {
        if(!this.props.auth) return <Redirect to='/login'/>

        return <Profile {...this.props} //прокидываем все пропсы
                        profile={this.props.profile}/>
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    auth: state.auth.isAuth
}); //когда возвращает обьект то ставим круглые скобки

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent)