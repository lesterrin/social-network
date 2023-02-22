import s from './profileStatus.module.css';
import {useEffect, useState} from "react";
import * as React from "react";

const ProfileStatus = ({status, updateProfileStatus}) => {

    //Есть баг. Значение статуса, почему-то, не всегда подгружается в input
    const [state, setState] = useState({editMode: false, status: status});

    const activateEditMode = () => {
        setState({
            ...state,
            editMode: true
        });
    }

    const deactivateEditMode = () => {
        setState({
            ...state,
            editMode: false
        });
        console.log(updateProfileStatus);
        updateProfileStatus(state.status);
    }

    const onStatusChange = (e) => {
        setState({
            ...state,
            status: e.currentTarget.value
        });
    }

    return (
        <div>
            <div>
                {state.editMode ?
                    <div>
                        <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                               value={state.status}/>
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
