import Login from "./login";
import {connect} from "react-redux";
import {
    toggleIsRememberMeActionCreator,
    changeEmailActionCreator,
    changePasswordActionCreator, changeErrorsListActionCreator
} from "../../redux/login-reducer";
import {login} from "../../redux/auth-reducer";

const mapStateToProps = ({loginPage}) => {
    return ({
        email: loginPage.email,
        password: loginPage.password,
        isRememberMe: loginPage.isRememberMe,
        errorsList: loginPage.errorsList
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        changeEmail: (login) => dispatch(changeEmailActionCreator(login)),
        changePassword: (password) => dispatch(changePasswordActionCreator(password)),
        toggleIsRememberMe: (isRememberMe) => dispatch(toggleIsRememberMeActionCreator(isRememberMe)),
        changeErrorsList: (error) => dispatch(changeErrorsListActionCreator(error)),
        login
    });
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;