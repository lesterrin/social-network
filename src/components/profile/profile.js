import s from './profile.module.css';
import ProfileInfo from "./profileInfo";
import MyPostsContainer from "./myposts/mypost-container";
import React from "react";

const Profile = React.memo((props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo {...props}/>
            <MyPostsContainer />
        </div>
    );
});

export default Profile;
