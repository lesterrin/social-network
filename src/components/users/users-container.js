import React from "react";
import Users from "./users";
import {connect} from "react-redux";
import UserItem from "./user-item";
import {
    followActionCreator, setCurrentPageActionCreator,
    setTotalUsersCountActionCreator,
    setUsersActionCreator,
    unfollowActionCreator
} from "../../redux/users-reducer";

const mapStateToProps = (state) =>{

    /*const users = state.findUsersPage.usersData.map(({id, followed, name, location, avatar}) => {
        return <UserItem id={id} followed={followed} name={name} location={location} avatar={avatar}/>
    });

    return ({
        users: users
    });*/

    return ({
        users: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        unfollow: (userId) => dispatch(unfollowActionCreator(userId)),
        follow: (userId) => dispatch(followActionCreator(userId)),
        setUsers: (users) => dispatch(setUsersActionCreator(users)),
        setTotalUsers: (dig) => dispatch(setTotalUsersCountActionCreator(dig)),
        setCurrentPage: (pageNumber) => dispatch(setCurrentPageActionCreator(pageNumber))
    });
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);

