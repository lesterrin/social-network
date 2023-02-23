import Login from "./login";
import {connect} from "react-redux";
import {
    toggleIsRememberMeActionCreator,
    changeEmailActionCreator,
    changePasswordActionCreator, changeErrorsListActionCreator
} from "../../redux/login-reducer";
import {login} from "../../redux/auth-reducer";

const mapStateToProps = ({loginPage, auth}) => {
    return ({
        email: loginPage.email,
        password: loginPage.password,
        isRememberMe: loginPage.isRememberMe,
        errorsList: loginPage.errorsList,
        isAuth: auth.isAuth
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        changeEmail: (login) => dispatch(changeEmailActionCreator(login)),
        changePassword: (password) => dispatch(changePasswordActionCreator(password)),
        toggleIsRememberMe: (isRememberMe) => dispatch(toggleIsRememberMeActionCreator(isRememberMe)),
        changeErrorsList: (error) => dispatch(changeErrorsListActionCreator(error)),
        login: (email, password, isRememberMe) => dispatch(login(email, password, isRememberMe))
    });
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
