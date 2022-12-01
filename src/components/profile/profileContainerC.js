import Profile from "./profile";
import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render(){
        return (
            <Profile {...this.props}/>
        );
    }
}

const mapStateToProps = ({profilePage}) => ({
        userProfile: profilePage.userProfile
})

export default connect(mapStateToProps,{setUserProfile})(ProfileContainer);


