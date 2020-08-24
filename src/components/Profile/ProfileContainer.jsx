import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../redux/profile_reducer";
import * as axios from "axios";
import {withRouter} from "react-router-dom";
import {userAPI} from "../api/api";

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
};

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 10920
        }
        userAPI.getUserProfile(userId).then(data => {

            this.props.setUserProfile(data);

        });

    }

    render() {
        return <Profile {...this.props} //прокидываем все пропсы
                        profile={this.props.profile}/>
    }

}

let mapStateToProps = (state) => ({
        profile: state.profilePage.profile
}); //когда возвращает обьект то ставим круглые скобки

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent)