import React from "react";
import s from './profile_info.module.css';
import Loader from "../../loader";

const ProfileInfo = ({profile}) => {
    if(profile === null) {
        return <Loader />
    }

    return(
        <div className={s.profile_info_wrapper}>
            <div className={s.about_block}>
                <img className={s.avatar} src={profile.photos.large}/>
                <div>{profile.userId}</div>
                <div>{profile.fullName}</div>
                <div className={s.description}>
                    {profile.aboutMe}
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
