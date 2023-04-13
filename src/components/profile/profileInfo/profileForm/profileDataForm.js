import s from "./profileDataForm.module.css";
import React, {useState} from "react";
import {Contact} from "../profileInfo";

const ProfileDataForm = ({profile, updateProfileData}) => {

    const fullNameElement = React.createRef();
    const [fullName, setFullName] = useState(profile.fullName)
    const onFullNameChange = () => {
        setFullName(fullNameElement.current.value);
    }

    const lookingForAJobElement = React.createRef();
    const [lookingForAJob, setLookingForAJob] = useState(profile.lookingForAJob)
    const onLookingForAJobChange = () => {
        setLookingForAJob(!lookingForAJob);
    }

    const lookingForAJobDescriptionElement = React.createRef();
    const [lookingForAJobDescription, setLookingForAJobDescription] = useState(profile.lookingForAJobDescription)
    const onLookingForAJobDescriptionChange = () => {
        setLookingForAJobDescription(lookingForAJobDescriptionElement.current.value);
    }

    const aboutMeElement = React.createRef();
    const [aboutMe, setAboutMe] = useState(profile.aboutMe)
    const onAboutMeChange = () => {
        setAboutMe(aboutMeElement.current.value);
    }


    const handleSubmit = (e) => {
        updateProfileData({userId: profile.userId, fullName:fullName, lookingForAJob:lookingForAJob, lookingForAJobDescription:lookingForAJobDescription, aboutMe:aboutMe});
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type='submit' value='Save'/>
            </div>
            <div>{profile.userId}</div>
            <div>Full name: <input ref={fullNameElement} value={fullName} onChange={onFullNameChange}/></div>
            <div>Looking for a job: <input ref={lookingForAJobElement} type='checkbox' defaultChecked={lookingForAJob}
                                           onChange={onLookingForAJobChange}/></div>
            {
                !profile.lookingForAJob &&
                <div>My professional skills: <textarea ref={lookingForAJobDescriptionElement}
                                                       value={lookingForAJobDescription}
                                                       onChange={onLookingForAJobDescriptionChange}/></div>
            }
            <div>About me: <textarea ref={aboutMeElement} value={aboutMe} onChange={onAboutMeChange}/></div>
            {/*<div>Contacts:</div>
            <div className={s.contacts}> {Object.keys(profile.contacts).map(key => <Contact
                key={key}
                contactTitle={key}
                contactValue={profile.contacts[key]}/>
            )}</div>*/}
        </form>
    )
}

export default ProfileDataForm;