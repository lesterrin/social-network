import React, {useEffect} from "react";
import {connect} from "react-redux";
import {
    followActionCreator, setCurrentPageActionCreator,
    setTotalUsersCountActionCreator,
    setUsersActionCreator, toggleIsFetchingActionCreator,
    unfollowActionCreator
} from "../../redux/users-reducer";
import axios from "axios";
import UsersPresent from "./usersPresent";
import Loader from "../loader";

const UsersContainer = ({users, follow, unfollow, setUsers, currentPage, setCurrentPage,
                            setTotalUsers, pageSize, totalUsersCount, isFetching, toggleIsFetching}) => {

    useEffect(() => {
        toggleIsFetching(true);
        axios.get('https://social-network.samuraijs.com/api/1.0/users', {
            params: {
                count: pageSize,
                page: currentPage
            }
        }).then(response => {
            setUsers(response.data.items);
            setTotalUsers(response.data.totalCount);
            toggleIsFetching(false);
        });
    }, [currentPage]);

    const usersPresentProps = {
        totalUsersCount: totalUsersCount,
        pageSize: pageSize,
        currentPage: currentPage,
        unfollow: (id) => unfollow(id),
        follow: (id) => follow(id),
        users: users,
        onPageChanged: (page) => setCurrentPage(page)
    }

    return (
        isFetching ? <Loader /> : <UsersPresent {...usersPresentProps}/>
    );
}

const mapStateToProps = (state) => {

    return ({
        users: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        unfollow: (userId) => dispatch(unfollowActionCreator(userId)),
        follow: (userId) => dispatch(followActionCreator(userId)),
        setUsers: (users) => dispatch(setUsersActionCreator(users)),
        setTotalUsers: (dig) => dispatch(setTotalUsersCountActionCreator(dig)),
        setCurrentPage: (pageNumber) => dispatch(setCurrentPageActionCreator(pageNumber)),
        toggleIsFetching: (bool)=>dispatch(toggleIsFetchingActionCreator(bool))
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

