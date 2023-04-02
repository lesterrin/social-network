import s from './profileStatus.module.css';
import {useState} from "react";
import * as React from "react";

const ProfileStatus = ({status, updateProfileStatus}) => {

    //Есть баг. Значение статуса, почему-то, не всегда подгружается в input
    const [editMode, setEditMode] = useState(false);
    const [localStatus, setLocalStatus] = useState(status);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        updateProfileStatus(localStatus);
    }

    const onStatusChange = (e) => {
        setLocalStatus(e.currentTarget.value);
    }

    return (
        <div>
            <div>
                {editMode ?
                    <div>
                        <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                               value={localStatus}/>
                    </div>
                    :
                    <div>
                        <span onClick={activateEditMode}>{status || '--no status--'}</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default ProfileStatus;
