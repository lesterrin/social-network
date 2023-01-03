import Profile from "./profile";
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import withRouter from "../helpers/withRouter";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {compose} from "redux";

const ProfileContainer = (props) => {

    useEffect(() => {
        const uid = props.router.params.id ? props.router.params.id : 26966;
        props.getUserProfile(uid);
    }, []);

    return (
        <Profile {...props}/>
    );
}

const mapStateToProps = ({profilePage}) => ({
    userProfile: profilePage.userProfile
})

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);


