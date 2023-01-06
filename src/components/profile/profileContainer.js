import Profile from "./profile";
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getProfileStatus, getUserProfile, updateProfileStatus} from "../../redux/profile-reducer";
import withRouter from "../helpers/withRouter";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {compose} from "redux";

const ProfileContainer = ({getUserProfile,getProfileStatus,userProfile,profileStatus,updateProfileStatus,router}) => {

    useEffect(() => {
        const uid = router.params.id ? router.params.id : 26966;
        getUserProfile(uid);
        getProfileStatus(uid);
    }, [profileStatus]);

    return (
        <Profile profile={userProfile} profileStatus={profileStatus} updateProfileStatus={updateProfileStatus}/>
    );
}

const mapStateToProps = ({profilePage}) => ({
    userProfile: profilePage.userProfile,
    profileStatus: profilePage.profileStatus
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getProfileStatus, updateProfileStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);


