import Profile from "./profile";
import React, {useEffect} from "react";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import withRouter from "../helpers/withRouter";

const ProfileContainer = (props) => {
    useEffect(() => {
        const uid = props.router.params.id ? props.router.params.id : 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            props.setUserProfile(response.data);
        })
    }, []);

    return (
        <Profile {...props}/>
    );
}

const mapStateToProps = ({profilePage}) => ({
    userProfile: profilePage.userProfile
})

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));


