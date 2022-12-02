import Profile from "./profile";
import React, {useEffect} from "react";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";

const ProfileContainer = (props) => {
    useEffect(() => {
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

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);


