import React, {useState} from "react";
import s from './profileInfo.module.css';
import Loader from "../../loader";
import ProfileStatus from './profileStatus';
import userImg from '../../../assets/images/user_image.png';
import ProfileDataForm from "./profileForm/profileDataForm";

const ProfileInfo = ({isOwner, profile, profileStatus, updateProfileStatus, savePhoto, updateProfileData}) => {

    const [editMode, setEditMode] = useState(false);

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
                {editMode ?
                    <ProfileDataForm profile={profile} updateProfileData={updateProfileData}/> :
                    <ProfileData goToEditMode={() => setEditMode(true)} profile={profile} isOwner={isOwner}/>
                }
            </div>
            <ProfileStatus isOwner={isOwner} status={profileStatus} updateProfileStatus={updateProfileStatus}/>
        </div>
    );
}

const ProfileData = ({profile, isOwner, goToEditMode}) => (
    <>
        {isOwner && <div>
            <button onClick={goToEditMode}>Edit</button>
        </div>}
        <div>{profile.userId}</div>
        <div>Full name: {profile.fullName}</div>
        <div>Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}</div>
        {
            !profile.lookingForAJob && <div>My professional skills: {profile.lookingForAJobDescription}</div>
        }
        <div>About me: {profile.aboutMe}</div>
        <div>Contacts:</div>
        <div className={s.contacts}> {Object.keys(profile.contacts).map(key => <Contact
            key={key}
            contactTitle={key}
            contactValue={profile.contacts[key]}/>
        )}</div>
    </>
)

export const Contact = ({contactTitle, contactValue}) => {
    return <div>{contactTitle}: {contactValue}</div>
}

export default ProfileInfo;
