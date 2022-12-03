import Profile from "./profile";
import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import withRouter from "../helpers/withRouter";

class ProfileContainer extends React.Component {

    componentDidMount(){
        const uid = this.props.router.params.id ? this.props.router.params.id : 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${uid}`).then(response => {
            this.props.setUserProfile(response.data);
        });
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

export default connect(mapStateToProps,{setUserProfile})(withRouter(ProfileContainer));


