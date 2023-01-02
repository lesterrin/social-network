import Profile from "./profile";
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import withRouter from "../helpers/withRouter";
import {Navigate} from "react-router-dom";

const ProfileContainer = (props) => {

    useEffect(() => {
        const uid = props.router.params.id ? props.router.params.id : 2;
        props.getUserProfile(uid);
    }, []);

    if (!props.isAuth) return <Navigate to='/login'/>

    return (
        <Profile {...props}/>
    );
}

const mapStateToProps = ({profilePage, auth}) => ({
    userProfile: profilePage.userProfile,
    isAuth: auth.isAuth
})

export default connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer));


