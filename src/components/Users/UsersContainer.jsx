import React from "react";
import {connect} from "react-redux";
import {
    getUsersThunkCreator,
    followThC,
    unfollowThC,
    getPageSize,
    getTotalCount,
    getIsFetching,
    getFollowingInProgress,
    getUsersSelector, getPageCurrent
} from "../redux/users_reducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {withHoc} from "../hoc/hocTest";
import {compose} from "redux";


class UsersContainer extends React.Component {

    componentDidMount() {
        const {pageCurrent, pageSize} = this.props;  // лучше сделать деструктуризацию
        this.props.getUsers(pageCurrent, pageSize);
    }

    onPageChange = (pageNumber) => {
        const {pageSize} = this.props;  // лучше сделать деструктуризацию
        this.props.getUsers(pageNumber, pageSize);
    };


    render() {//метод рендер вернет jsx
        return <>

            {this.props.isFetching === true ? <Preloader/> : null}

            <Users totalCount={this.props.totalCount}
                   pageSize={this.props.pageSize}
                   onPageChange={this.onPageChange}
                   users={this.props.users}
                   followThC={this.props.followThC}
                   unfollowThC={this.props.unfollowThC}
                   pageCurrent={this.props.pageCurrent}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        pageCurrent: getPageCurrent(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

/*let AuthRedirectComponent = withHoc(UsersContainer);  И так и так можно */

export default compose(
    connect(mapStateToProps, {followThC, unfollowThC, getPageCurrent, getUsers: getUsersThunkCreator}),
    withHoc
    )(UsersContainer);

/*
export default withHoc(connect(mapStateToProps, {
    followThC, unfollowThC, setPageCurrent, getUsers: getUsersThunkCreator})(UsersContainer));*/
