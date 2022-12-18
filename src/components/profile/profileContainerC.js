import Profile from "./profile";
import React from "react";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import withRouter from "../helpers/withRouter";

class ProfileContainer extends React.Component {

    componentDidMount(){
        const uid = this.props.router.params.id ? this.props.router.params.id : 2;
        this.props.getUserProfile(uid);
    }

    render(){
        return (
            <Profile {...this.props}/>
        );
    }
}

const mapStateToProps = ({profilePage}) => ({
        userProfile: profilePage.userProfile
})

export default connect(mapStateToProps,{getUserProfile})(withRouter(ProfileContainer));


