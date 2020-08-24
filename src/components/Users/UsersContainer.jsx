import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setPageCurrent,
    setUsers,
    toggleIsFetching,
    unfollow,
    usersTotalCount
} from "../redux/users_reducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {userAPI} from "../api/api";


class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.toggleIsFetching(true);
        userAPI.getUsers(this.props.pageСurrent, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.usersTotalCount(data.totalCount);
        });
    }

    onPageChange = (pageNumber) => {
        this.props.setPageCurrent(pageNumber);
        this.props.toggleIsFetching(true);

        userAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
            this.props.setUsers(data.items);
            this.props.toggleIsFetching(false);
        });
    }

    render() {//метод рендер вернет на jsx
        return <>

        {this.props.isFetching === true ? <Preloader /> : null} {/*лоадер*/}

        <Users totalCount={this.props.totalCount}
                      pageSize={this.props.pageSize}
                      onPageChange={this.onPageChange}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      pageСurrent={this.props.pageСurrent}
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
        isFetching: state.usersPage.isFetching
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

export default connect(mapStateToProps, {follow, unfollow, setUsers, setPageCurrent, usersTotalCount, toggleIsFetching})(UsersContainer);