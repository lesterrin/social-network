import React from "react";
import s from './profileInfo.module.css';
import Loader from "../../loader";
import ProfileStatus from './profileStatus';
import userImg from '../../../assets/images/user_image.png';

const ProfileInfo = ({isOwner, profile, profileStatus, updateProfileStatus, savePhoto}) => {

    if (profile === null) {
        return <Loader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div className={s.profile_info_wrapper}>
            <div className={s.about_block}>
                <img className={s.avatar} src={profile.photos.large || userImg}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <div>{profile.userId}</div>
                <div>{profile.fullName}</div>
                <div className={s.description}>
                    {profile.aboutMe}
                </div>
            </div>
            <ProfileStatus isOwner={isOwner} status={profileStatus} updateProfileStatus={updateProfileStatus}/>
        </div>
    );
}

export default ProfileInfo;
