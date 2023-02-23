import Profile from "./profile";
import React from "react";
import {connect} from "react-redux";
import {getProfileStatus, getUserProfile} from "../../redux/profile-reducer";
import withRouter from "../helpers/withRouter";
import {compose} from "redux";
import withAuthRedirect from "../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        const uid = this.props.router.params.id ? this.props.router.params.id : 2;
        this.props.getUserProfile(uid);
        this.props.getProfileStatus(uid);
    }

    render() {
        return (
            <Profile profile={this.props.userProfile} profileStatus={this.props.profileStatus}/>
        );
    }
}

const mapStateToProps = ({profilePage}) => ({
    userProfile: profilePage.userProfile,
    profileStatus: profilePage.profileStatus
})

export default compose(
    connect(mapStateToProps, {getUserProfile,getProfileStatus}),
    withAuthRedirect
)(ProfileContainer);


