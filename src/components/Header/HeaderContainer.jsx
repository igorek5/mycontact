import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../redux/profile_reducer";
import * as axios from "axios";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let userId = this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(respons => {

            this.props.setUserProfile(respons.data);

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

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);