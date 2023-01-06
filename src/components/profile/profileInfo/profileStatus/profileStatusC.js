import s from './profileStatus.module.css';
import * as React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps,prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
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

        this.props.updateProfileStatus(this.state.status);
    }

    onStatusChange = (e) =>{
        this.setState({
            status: e.currentTarget.value
        });
    }

    render() {
        return (
            <div>
                {this.state.editMode ?
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={()=>this.deactivateEditMode()} value={this.props.status}/>
                    </div>
                    :
                    <div>
                        <span onClick={()=>this.activateEditMode()}>{this.props.status || '--no status--'}</span>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
