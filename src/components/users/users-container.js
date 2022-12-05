import React, {useEffect} from "react";
import {connect} from "react-redux";
import {
    follow, setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import UsersPresent from "./usersPresent";
import Loader from "../loader";
import {usersAPI} from "../../api/api";

const UsersContainer = ({users, follow, unfollow, setUsers, currentPage, setCurrentPage,
                            setTotalUsersCount, pageSize, totalUsersCount, isFetching, toggleIsFetching
                        }) => {

    useEffect(() => {
        toggleIsFetching(true);
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            setUsers(data.items);
            setTotalUsersCount(data.totalCount);
            toggleIsFetching(false);
        });
    }, [currentPage]);

    const usersPresentProps = {
        totalUsersCount: totalUsersCount,
        pageSize: pageSize,
        currentPage: currentPage,
        unfollow: (id) => {
            usersAPI.unfollowUser(id).then(response => {
                    if (response.data.resultCode === 0) {
                        unfollow(id)
                    }
                });
        },
        follow: (id) => {
            usersAPI.followUser(id).then(response => {
                    if (response.data.resultCode === 0) {
                        follow(id)
                    }
                });
        },
        users: users,
        onPageChanged: (page) => setCurrentPage(page)
    }

    return (
        isFetching ? <Loader/> : <UsersPresent {...usersPresentProps}/>
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

export default connect(mapStateToProps, {
    unfollow,
    follow,
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    toggleIsFetching
})(UsersContainer);

