import Login from "./login";
import {connect} from "react-redux";
import {
    toggleIsRememberMeActionCreator,
    changeLoginActionCreator,
    changePasswordActionCreator
} from "../../redux/login-reducer";

const mapStateToProps = ({loginPage}) => {
    return ({
        login: loginPage.login,
        password: loginPage.password,
        isRememberMe: loginPage.isRememberMe
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        changeLogin: (login) => dispatch(changeLoginActionCreator(login)),
        changePassword: (password) => dispatch(changePasswordActionCreator(password)),
        toggleIsRememberMe: (isRememberMe) => dispatch(toggleIsRememberMeActionCreator(isRememberMe))
    });
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;