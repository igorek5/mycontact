import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";

class FriendsContainer extends React.Component {

    render() {
        return <Friends friends={this.props.friends}/>
    }
}

let mapStateToProps = (state) => ({
    friends: state.navbarPage.friends
});

export default connect (mapStateToProps)(FriendsContainer);