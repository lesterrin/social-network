import s from './profileStatus.module.css';
import * as React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState ({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState ({
            editMode: false
        });
    }

    render() {
        return (
            <div>
                {this.state.editMode ?
                    <div>
                        <input autoFocus={true} onBlur={()=>this.deactivateEditMode()} value={this.props.status}/>
                        <button>Сохранить</button>
                    </div>
                    :
                    <div>
                        <span onClick={()=>this.activateEditMode()}>{this.props.status}</span>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
