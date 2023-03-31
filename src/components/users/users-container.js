import React, {useEffect} from "react";
import {connect} from "react-redux";
import {
    followUser, requestUsers, setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollowUser
} from "../../redux/users-reducer";
import UsersPresent from "./usersPresent";
import Loader from "../common/loader";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getUsers,
    getPageSize,
    getTotalUsersCount,
    getCurrentPage, getIsFetching, getSubscribingInProgress
} from "../../redux/users-selectors";

const UsersContainer = ({
                            users, followUser, unfollowUser, currentPage, setCurrentPage,
                            pageSize, totalUsersCount, isFetching, subscribingInProgress, requestUsers
                        }) => {

    useEffect(() => {
        requestUsers(currentPage, pageSize);
    }, [currentPage]);

    const usersPresentProps = {
        totalUsersCount: totalUsersCount,
        pageSize: pageSize,
        currentPage: currentPage,
        unfollow: (userId) => unfollowUser(userId),
        follow: (userId) => followUser(userId),
        users: users,
        onPageChanged: (page) => setCurrentPage(page),
        subscribingInProgress: subscribingInProgress
    }

    return (
        isFetching ? <Loader/> : <UsersPresent {...usersPresentProps}/>
    );
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

