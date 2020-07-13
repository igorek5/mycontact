import React from "react";
import {connect} from "react-redux";
import {followAC, setPageCurrentAC, setUsersAC, unfollowAC, usersTotalCountAC} from "../redux/users_reducer";
import Users from "./Users";



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        pageСurrent: state.usersPage.pageСurrent
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch( followAC(userId) );
        },
        unfollow: (userId) => {
            dispatch( unfollowAC(userId));
        },
        setUsers: (users, totalCount) => {
            dispatch( setUsersAC(users) );
        },
        setPageCurrent: (current) => {
            dispatch(setPageCurrentAC(current));
        },

        setTotalUsersCount: (totalCount) => {
            dispatch( usersTotalCountAC(totalCount) );
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;