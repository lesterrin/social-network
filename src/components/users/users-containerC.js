import React from "react";
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

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
            this.props.toggleIsFetching(false);
        });
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
            this.props.toggleIsFetching(false);
        });
    }

    render() {
        const usersPresentProps = {
            totalUsersCount: this.props.totalUsersCount,
            pageSize: this.props.pageSize,
            currentPage: this.props.currentPage,
            unfollow: (id) =>{
                usersAPI.unfollowUser(id).then(response => {
                        if(response.data.resultCode===0){
                            unfollow(id)
                        }
                    });
            },
            follow: (id) => {
                usersAPI.followUser(id).then(response => {
                        if(response.data.resultCode===0){
                            follow(id)
                        }
                    });
            },
            users: this.props.users,
            onPageChanged: (page) => this.onPageChanged(page)
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

