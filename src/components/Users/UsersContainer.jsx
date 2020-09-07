import React from "react";
import {connect} from "react-redux";
import {
    setPageCurrent, getUsersThunkCreator,
    followThC, unfollowThC
} from "../redux/users_reducer";
import Users from "./Users";
import Preloader from "../common/Preloader";


class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.pageСurrent, this.props.pageSize);
    }

    onPageChange = (pageNumber) => {
        this.props.setPageCurrent(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {//метод рендер вернет jsx
        return <>

            {this.props.isFetching === true ? <Preloader/> : null} {/*лоадер*/}

            <Users totalCount={this.props.totalCount}
                   pageSize={this.props.pageSize}
                   onPageChange={this.onPageChange}
                   users={this.props.users}
                   followThC={this.props.followThC}
                   unfollowThC={this.props.unfollowThC}
                   pageСurrent={this.props.pageСurrent}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        pageСurrent: state.usersPage.pageСurrent,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

/*let mapDispatchToProps = (dispatch) => {
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
        },
        toggleIsFetching: (isFetching) => {
            dispatch( toggleIsFetchingAC(isFetching) );
        }
    }
}*/

export default connect(mapStateToProps, {
    followThC, unfollowThC, setPageCurrent, getUsers: getUsersThunkCreator})(UsersContainer);