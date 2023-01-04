import s from './profileStatus.module.css';
import {useState} from "react";
import * as React from "react";

const ProfileStatus = ({status}) => {

    const activateEditMode = () => {
        setState({
            editMode: true
        });
    }

    const deactivateEditMode = () => {
        setState({
            editMode: false
        });
    }

    const [state, setState] = useState({editMode: false})

    return (
        <div>
            <div>
                {state.editMode ?
                    <div>
                        <input autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                        <button>Сохранить</button>
                    </div>
                    :
                    <div>
                        <span onClick={activateEditMode}>{status}</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default ProfileStatus;
