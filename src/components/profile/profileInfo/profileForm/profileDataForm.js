import s from "./profileDataForm.module.css";
import React, {useState} from "react";
import {Contact} from "../profileInfo";

const ProfileDataForm = ({profile, updateProfileData, exitEditMode}) => {

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

    const [errors, setErrors] = useState(null)


    const handleSubmit = (e) => {
        e.preventDefault();
        updateProfileData({
            userId: profile.userId,
            fullName: fullName,
            lookingForAJob: lookingForAJob,
            lookingForAJobDescription: lookingForAJobDescription,
            aboutMe: aboutMe
        }).then(() => exitEditMode())
            .catch((e) => setErrors(e));
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type='submit' value='Save'/>
                <input type='button' value='Discard' onClick={exitEditMode}/>
            </div>
            {errors && <div className={s.errors}>Errors: {errors}</div>}
            <div>{profile.userId}</div>
            <div>Full name: <input ref={fullNameElement} value={fullName} onChange={onFullNameChange}/></div>
            <div>Looking for a job: <input ref={lookingForAJobElement} type='checkbox' defaultChecked={lookingForAJob}
                                           onChange={onLookingForAJobChange}/></div>
            {
                profile.lookingForAJob &&
                <div>My professional skills: <textarea ref={lookingForAJobDescriptionElement}
                                                       value={lookingForAJobDescription}
                                                       onChange={onLookingForAJobDescriptionChange}/></div>
            }
            <div>About me: <textarea ref={aboutMeElement} value={aboutMe} onChange={onAboutMeChange}/></div>
            {/*Когда-нибудь это нужно доделать*/}
            {/*<div>Contacts:</div>
            <div className={s.contacts}> {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={s.contacts}>
                        <b>{key}:</b>
                        <input value={profile[key]}/>
                    </div>
                }
            )}</div>*/}
        </form>
    )
}

export default ProfileDataForm;
