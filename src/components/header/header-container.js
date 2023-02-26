import Header from "./header";
import React from "react";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";

const mapStateToProps = ({auth}) => ({
    userId: auth.userId,
    email: auth.email,
    login: auth.login,
    isAuth: auth.isAuth
});

export default connect(mapStateToProps, {logout})(Header);
