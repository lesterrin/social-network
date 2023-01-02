import s from './profile.module.css';
import ProfileInfo from "./profile_info";
import MyPostsContainer from "./myposts/mypost-container";
import {Navigate} from "react-router-dom";
import React from "react";

const Profile = ({userProfile, isAuth}) => {

    return (
        <div className={s.profile}>
            <ProfileInfo profile={userProfile}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;
