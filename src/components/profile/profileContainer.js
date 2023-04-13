import Profile from "./profile";
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {
    getProfileStatus,
    getUserProfile,
    savePhoto,
    updateProfileData,
    updateProfileStatus
} from "../../redux/profile-reducer";
import withRouter from "../helpers/withRouter";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {compose} from "redux";

const ProfileContainer = React.memo(({
                                         getUserProfile, getProfileStatus, userProfile,
                                         profileStatus, updateProfileStatus, router, userId, savePhoto, updateProfileData
                                     }) => {
    useEffect(() => {
        const uid = router.params.id ? router.params.id : userId;
        getUserProfile(uid);
        getProfileStatus(uid);
    }, [router.params.id]);

    return (
        <Profile isOwner={!router.params.id}
                 profile={userProfile}
                 profileStatus={profileStatus}
                 updateProfileStatus={updateProfileStatus}
                 savePhoto={savePhoto}
                 updateProfileData={updateProfileData}/>
    );
});

const mapStateToProps = ({profilePage: {userProfile, profileStatus}, auth: {userId}}) => ({
    userProfile,
    profileStatus,
    userId
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getProfileStatus, updateProfileStatus, savePhoto, updateProfileData}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);


