import React, {FC, useEffect} from "react";
import {connect} from "react-redux";
import {
    followUser, requestUsers, setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollowUser
} from "../../redux/users-reducer";
import UsersPresent from "./usersPresent";
import Loader from "../loader";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getUsers,
    getPageSize,
    getTotalUsersCount,
    getCurrentPage, getIsFetching, getSubscribingInProgress
} from "../../redux/users-selectors";
import {UserDataType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    users: Array<UserDataType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    subscribingInProgress: Array<number>,
}

type MapDispatchPropsType = {
    setUsers: () => void,
    setTotalUsersCount: () => void,
    setCurrentPage: (page: number) => void,
    toggleIsFetching: () => void,
    requestUsers: (currentPage: number, pageSize: number) => void,
    unfollowUser: (userId: number) => void,
    followUser: (userId: number) => void
}

type OwnPropsType = {
    //some props
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const UsersContainer: FC<PropsType> = ({
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
        unfollow: (userId: number) => unfollowUser(userId),
        follow: (userId: number) => followUser(userId),
        users: users,
        onPageChanged: (page: number) => setCurrentPage(page),
        subscribingInProgress: subscribingInProgress
    }

    return (
        isFetching ? <Loader/> : <UsersPresent {...usersPresentProps}/>
    );
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {

    return ({
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        subscribingInProgress: getSubscribingInProgress(state)
    });
}

export default compose<any>(
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

