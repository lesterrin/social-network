import Profile from "./profile";
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import withRouter from "../helpers/withRouter";

const ProfileContainer = (props) => {
    useEffect(() => {
        const uid = props.router.params.id ? props.router.params.id : 2;
        props.getUserProfile(uid);
    }, []);

    return (
        <Profile {...props}/>
    );
}

const mapStateToProps = ({profilePage}) => ({
    userProfile: profilePage.userProfile
})

export default connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer));


