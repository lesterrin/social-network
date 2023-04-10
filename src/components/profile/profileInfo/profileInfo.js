import React from "react";
import s from './profileInfo.module.css';
import Loader from "../../loader";
import ProfileStatus from './profileStatus';
import userImg from '../../../assets/images/user_image.png';

const ProfileInfo = ({profile,profileStatus, updateProfileStatus}) => {

    if (profile === null) {
        return <Loader/>
    }

    const imgSrc = profile.photos.large ? profile.photos.large : userImg;

    return (
        <div className={s.profile_info_wrapper}>
            <div className={s.about_block}>
                <img className={s.avatar} src={imgSrc}/>
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
