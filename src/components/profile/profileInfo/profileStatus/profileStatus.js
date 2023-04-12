import s from './profileStatus.module.css';
import {useEffect, useState} from "react";
import * as React from "react";

const ProfileStatus = ({isOwner, status, updateProfileStatus}) => {

    const [editMode, setEditMode] = useState(false);
    const [localStatus, setLocalStatus] = useState(status);

    useEffect(() => {
        setLocalStatus(status);
    }, [status])

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

    let statusBlock;

    if (!isOwner) statusBlock = <span>{status || '--no status--'}</span>
    else if (editMode) {
        statusBlock = <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                             value={localStatus}/>
    } else {
        statusBlock = <span onClick={activateEditMode}>{status || '--no status--'}</span>
    }

    return (
        <div>
            Status: {statusBlock}
        </div>
    )
}

export default ProfileStatus;
