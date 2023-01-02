import Profile from "./profile";
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import withRouter from "../helpers/withRouter";
import withAuthRedirect from "../hoc/withAuthRedirect";

const ProfileContainer = (props) => {

    useEffect(() => {
        const uid = props.router.params.id ? props.router.params.id : 26966;
        props.getUserProfile(uid);
    }, []);

    return (
        <Profile {...props}/>
    );
}

const AuthRedirectComponent = withAuthRedirect(withRouter(ProfileContainer));

const mapStateToProps = ({profilePage}) => ({
    userProfile: profilePage.userProfile
})

export default connect(mapStateToProps, {getUserProfile})(AuthRedirectComponent);


