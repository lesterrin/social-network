import React from "react";
import s from './profile_info.module.css';
import Loader from "../../loader";

const ProfileInfo = ({profile}) => {
    if(profile != {}) {
        return <Loader />
    }

    return(
        <React.Fragment>
            <div className={s.profile_image}>
                <img src="http://u.livelib.ru/reader/Mariashka_true/o/vro4mzw2/o-o.jpeg" />
            </div>
            <div className={s.description_block}>
                <img src={profile.photos.large}/>
                {profile.aboutMe}
            </div>
        </React.Fragment>
    );
}

export default ProfileInfo;
