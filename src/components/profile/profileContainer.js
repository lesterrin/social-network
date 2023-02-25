import Profile from "./profile";
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getProfileStatus, getUserProfile, updateProfileStatus} from "../../redux/profile-reducer";
import withRouter from "../helpers/withRouter";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {compose} from "redux";

const ProfileContainer = ({getUserProfile,getProfileStatus,userProfile,profileStatus,updateProfileStatus,router,userId}) => {

    useEffect(() => {
        const uid = router.params.id ? router.params.id : userId;
        getUserProfile(uid);
        getProfileStatus(uid);
    }, [profileStatus]);

    return (
        <Profile profile={userProfile} profileStatus={profileStatus} updateProfileStatus={updateProfileStatus}/>
    );
}

const mapStateToProps = ({profilePage,auth}) => ({
    userProfile: profilePage.userProfile,
    profileStatus: profilePage.profileStatus,
    userId: auth.userId
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getProfileStatus, updateProfileStatus}),
    withRouter
)(ProfileContainer);


