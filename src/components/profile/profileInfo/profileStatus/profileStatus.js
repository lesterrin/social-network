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

    if (!isOwner) statusBlock = <div><span>{status || '--no status--'}</span></div>
    else if (editMode) {
        statusBlock = <div><input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                                  value={localStatus}/></div>
    } else {
        statusBlock = <div><span onClick={activateEditMode}>{status || '--no status--'}</span></div>
    }

    return (
        <div>
            <div>
                {statusBlock}
                {/*{editMode ?
                    <div>
                        <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                               value={localStatus}/>
                    </div>
                    :
                    <div>
                        <span onClick={activateEditMode}>{status || '--no status--'}</span>
                    </div>
                }*/}
            </div>
        </div>
    )
}

export default ProfileStatus;
