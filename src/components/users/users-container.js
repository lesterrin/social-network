import React, {useEffect} from "react";
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

const UsersContainer = ({
                            users, follow, unfollow, setUsers, currentPage, setCurrentPage,
                            setTotalUsersCount, pageSize, totalUsersCount, isFetching, toggleIsFetching
                        }) => {

    useEffect(() => {
        toggleIsFetching(true);
        axios.get('https://social-network.samuraijs.com/api/1.0/users', {
            withCredentials: true,
            params: {
                count: pageSize,
                page: currentPage
            }
        }).then(response => {
            console.log(response);
            setUsers(response.data.items);
            setTotalUsersCount(response.data.totalCount);
            toggleIsFetching(false);
        });
    }, [currentPage]);

    const usersPresentProps = {
        totalUsersCount: totalUsersCount,
        pageSize: pageSize,
        currentPage: currentPage,
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

