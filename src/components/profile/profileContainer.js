import Profile from "./profile";
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getProfileStatus, getUserProfile, updateProfileStatus} from "../../redux/profile-reducer";
import withRouter from "../helpers/withRouter";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {useNavigate} from 'react-router-dom';
import {compose} from "redux";

const ProfileContainer = ({getUserProfile, getProfileStatus, userProfile, profileStatus, updateProfileStatus, router, userId}) => {

    let navigate = useNavigate(); // Переписать. Navigate из withRouter почему-то не редиректит

    useEffect(() => {
        const uid = router.params.id ? router.params.id : userId;
        if (!uid) {
            navigate('/login');
        } else {
            getUserProfile(uid);
            getProfileStatus(uid);
        }
    }, [profileStatus]);

    return (
        <Profile profile={userProfile} profileStatus={profileStatus} updateProfileStatus={updateProfileStatus}/>
    );
}

const mapStateToProps = ({profilePage, auth}) => ({
    userProfile: profilePage.userProfile,
    profileStatus: profilePage.profileStatus,
    userId: auth.userId
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getProfileStatus, updateProfileStatus}),
    withRouter
)(ProfileContainer);


