import React from "react";
import s from './profileInfo.module.css';
import Loader from "../../loader";
import ProfileStatus from './profileStatus';
import Profile from "../profile";

const ProfileInfo = ({profile,profileStatus, updateProfileStatus}) => {

    if (profile === null) {
        return <Loader/>
    }

    return (
        <div className={s.profile_info_wrapper}>
            <div className={s.about_block}>
                <img className={s.avatar} src={profile.photos.large}/>
                <div>{profile.userId}</div>
                <div>{profile.fullName}</div>
                <div className={s.description}>
                    {profile.aboutMe}
                </div>
            </div>
            <ProfileStatus status={profileStatus} updateProfileStatus={updateProfileStatus}/>
        </div>
    );
}

export default ProfileInfo;
