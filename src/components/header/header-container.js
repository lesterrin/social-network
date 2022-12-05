import Header from "./header";
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {usersAPI} from "../../api/api";

const HeaderContainer = (props) => { //перенести проверку авторизации из хедера
    useEffect(() => {
        usersAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data;
                props.setAuthUserData(id, email, login);
            }
        })
    }, []);


    return <Header {...props}/>
}

const mapStateToProps = ({auth}) => ({
    userId: auth.userId,
    email: auth.email,
    login: auth.login,
    isAuth: auth.isAuth
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
