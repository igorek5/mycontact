import React from "react";
import {connect} from "react-redux";
import {
    setPageCurrent, getUsersThunkCreator,
    followThC, unfollowThC, getUsers, getPageSize, getTotalCount, getPageСurrent, getIsFetching, getFollowingInProgress
} from "../redux/users_reducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {withHoc} from "../hoc/hocTest";
import {compose} from "redux";


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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        pageСurrent: getPageСurrent(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

/*let AuthRedirectComponent = withHoc(UsersContainer);  И так и так можно */

export default compose(
    connect(mapStateToProps, {followThC, unfollowThC, setPageCurrent, getUsers: getUsersThunkCreator}),
    withHoc
    )(UsersContainer);

/*
export default withHoc(connect(mapStateToProps, {
    followThC, unfollowThC, setPageCurrent, getUsers: getUsersThunkCreator})(UsersContainer));*/
