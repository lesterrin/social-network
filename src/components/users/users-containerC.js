import React from "react";
import {connect} from "react-redux";
import {
    followUser, getUsers, setCurrentPage, toggleSubscribingProgress,
    unfollowUser
} from "../../redux/users-reducer";
import UsersPresent from "./usersPresent";
import Loader from "../loader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page) => {
        this.props.getUsers(page, this.props.pageSize);
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

const mapStateToProps = (state) => {

    return ({
        users: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        subscribingInProgress: state.usersPage.subscribingInProgress
    });
}

export default connect(mapStateToProps, {
    setCurrentPage,
    toggleSubscribingProgress,
    getUsers,
    followUser,
    unfollowUser
})(UsersContainer);

