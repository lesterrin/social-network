import React from "react";
import FindUsers from "./find-users";
import {connect} from "react-redux";
import UserItem from "./user-item";

const mapStateToProps = (state) =>{

    const users = state.findUsersPage.usersData.map(({id, name, location, avatar}) => {
        return <UserItem id={id} name={name} location={location} avatar={avatar}/>
    });

    return ({
        users: users
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({});
}

const FindUsersContainer = connect(mapStateToProps,mapDispatchToProps)(FindUsers);

export default FindUsersContainer;
