import s from './profile.module.css';
import ProfileInfo from "./profileInfo";
import MyPostsContainer from "./myposts/mypost-container";
import React from "react";

const Profile = ({userProfile}) => {

    return (
        <div className={s.profile}>
            <ProfileInfo profile={userProfile}/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
