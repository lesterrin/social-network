import React from "react";
import {connect} from "react-redux";
import {
    followActionCreator, setCurrentPageActionCreator,
    setTotalUsersCountActionCreator,
    setUsersActionCreator,
    unfollowActionCreator
} from "../../redux/users-reducer";
import axios from "axios";
import UsersPresent from "./usersPresent";

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users', {
            params: {
                count: this.props.pageSize,
                page: this.props.currentPage
            }
        }).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsers(response.data.totalCount);
        });
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        axios.get('https://social-network.samuraijs.com/api/1.0/users', {
            params: {
                count: this.props.pageSize,
                page: page
            }
        }).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsers(response.data.totalCount);
        });
    }

    render() {
        const usersPresentProps = {
            totalUsersCount: this.props.totalUsersCount,
            pageSize: this.props.pageSize,
            currentPage: this.props.currentPage,
            unfollow: (id) => this.props.unfollow(id),
            follow: (id) => this.props.follow(id),
            users: this.props.users,
            onPageChanged: (page) => this.onPageChanged(page)
        }

        return (
            <UsersPresent {...usersPresentProps}/>
        );
    }

}

const mapStateToProps = (state) => {

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

