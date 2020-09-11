import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../redux/profile_reducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

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
        return <Profile {...this.props} //прокидываем все пропсы
                        profile={this.props.profile}/>
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
}); //когда возвращает обьект то ставим круглые скобки

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);



/*
let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent );

export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent)*/
