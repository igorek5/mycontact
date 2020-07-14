import React from "react";
import {connect} from "react-redux";
import {followAC, setPageCurrentAC, setUsersAC, unfollowAC, usersTotalCountAC} from "../redux/users_reducer";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageСurrent}&count=${this.props.pageSize}`).then(respons => {
            this.props.setUsers(respons.data.items);
            this.props.setTotalUsersCount(respons.data.totalCount);
        });
    }

    onPageChange = (pageNumber) => {
        this.props.setPageCurrent(pageNumber);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(respons => {
            this.props.setUsers(respons.data.items);
        });
    }

    render() {//метод рендер вернет на jsx

        return <Users totalCount={this.props.totalCount}
                      pageSize={this.props.pageSize}
                      onPageChange={this.onPageChange}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      pageСurrent={this.props.pageСurrent}
        />
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);