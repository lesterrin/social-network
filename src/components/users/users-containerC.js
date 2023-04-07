import React from "react";
import {connect} from "react-redux";
import {
    followUser, requestUsers, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, toggleSubscribingProgress,
    unfollowUser
} from "../../redux/users-reducer";
import UsersPresent from "./usersPresent";
import Loader from "../loader";
import {compose} from "redux";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {
    getCurrentPage,
    getIsFetching,
    getPageSize,
    getSubscribingInProgress,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page) => {
        this.props.requestUsers(page, this.props.pageSize);
    }

    render() {
        const usersPresentProps = {
            totalUsersCount: this.props.totalUsersCount,
            pageSize: this.props.pageSize,
            currentPage: this.props.currentPage,
            unfollow: (userId) => this.props.unfollowUser(userId),
            follow: (userId) => this.props.followUser(userId),
            users: this.props.users,
            onPageChanged: (page) => this.onPageChanged(page),
            subscribingInProgress: this.props.subscribingInProgress
        }

        return (
            this.props.isFetching ? <Loader/> : <UsersPresent {...usersPresentProps}/>
        );
    }

}

/*const mapStateToProps = (state) => {

    return ({
        users: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        subscribingInProgress: state.usersPage.subscribingInProgress
    });
}*/

const mapStateToProps = (state) => {

    return ({
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        subscribingInProgress: getSubscribingInProgress(state)
    });
}

export default compose(
    connect(mapStateToProps, {
        setUsers,
        setTotalUsersCount,
        setCurrentPage,
        toggleIsFetching,
        requestUsers,
        unfollowUser,
        followUser
    }),
    withAuthRedirect
)(UsersContainer);

