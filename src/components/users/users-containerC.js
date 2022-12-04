import React from "react";
import {connect} from "react-redux";
import {
    follow, setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import axios from "axios";
import UsersPresent from "./usersPresent";
import Loader from "../loader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get('https://social-network.samuraijs.com/api/1.0/users', {
            withCredentials: true,
            params: {
                count: this.props.pageSize,
                page: this.props.currentPage
            }
        }).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
            this.props.toggleIsFetching(false);
        });
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);
        axios.get('https://social-network.samuraijs.com/api/1.0/users', {
            withCredentials: true,
            params: {
                count: this.props.pageSize,
                page: page
            }
        }).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
            this.props.toggleIsFetching(false);
        });
    }

    render() {
        const usersPresentProps = {
            totalUsersCount: this.props.totalUsersCount,
            pageSize: this.props.pageSize,
            currentPage: this.props.currentPage,
            unfollow: (id) =>{
                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,{
                    withCredentials:true,
                    headers:{
                        "API-KEY": "bf8b5e36-ac4e-4945-b6af-e6bc5e0fb73f"
                    }
                })
                    .then(response => {
                        console.log(response);
                        if(response.data.resultCode===0){
                            unfollow(id)
                        }
                    });


            },
            follow: (id) => {
                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,{},{
                    withCredentials:true,
                    headers:{
                        "API-KEY": "bf8b5e36-ac4e-4945-b6af-e6bc5e0fb73f"
                    }
                })
                    .then(response => {
                        console.log(response);
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

