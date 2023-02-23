import Header from "./header";
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {authMe,logout} from "../../redux/auth-reducer";

const HeaderContainer = (props) => { //перенести проверку авторизации из хедера
    useEffect(() => {
       props.authMe();
    }, []);


    return <Header {...props}/>
}

const mapStateToProps = ({auth}) => ({
    userId: auth.userId,
    email: auth.email,
    login: auth.login,
    isAuth: auth.isAuth
});

export default connect(mapStateToProps, {authMe,logout})(HeaderContainer);
