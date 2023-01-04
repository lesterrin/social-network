import React from "react";
import s from './profileInfo.module.css';
import Loader from "../../loader";
import ProfileStatus from './profileStatus';

const ProfileInfo = ({profile}) => {
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
            <ProfileStatus status={'Hello world'}/>
        </div>
    );
}

export default ProfileInfo;
