import Header from "./header";
import React from "react";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";

const mapStateToProps = ({auth: {userId, email, login, isAuth}}) => ({userId, email, login, isAuth});
export default connect(mapStateToProps, {logout})(Header);
