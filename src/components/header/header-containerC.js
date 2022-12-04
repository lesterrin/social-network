import Header from "./header";
import React, {useEffect} from "react";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                const {id, email, login} = response.data.data;
                this.props.setAuthUserData(id, email, login);
            }
        })
    }

    render() {
        return <Header {...this.props}/>
    }

}

const mapStateToProps = ({auth}) => ({
    userId: auth.userId,
    email: auth.email,
    login: auth.login,
    isAuth: auth.isAuth
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
