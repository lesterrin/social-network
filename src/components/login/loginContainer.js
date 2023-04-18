import Login from "./login";
import {connect} from "react-redux";
import {
    toggleIsRememberMeActionCreator,
    changeEmailActionCreator,
    changePasswordActionCreator, changeErrorsListActionCreator, changeCaptchaActionCreator
} from "../../redux/login-reducer";
import {login} from "../../redux/auth-reducer";

const mapStateToProps = ({loginPage: {email, password, isRememberMe, errorsList, captcha}, auth: {isAuth, authError, captchaUrl}}) => {
    return {email, password, isRememberMe, errorsList, isAuth, authError, captchaUrl, captcha};
};

const mapDispatchToProps = (dispatch) => {
    return ({
        changeEmail: (login) => dispatch(changeEmailActionCreator(login)),
        changePassword: (password) => dispatch(changePasswordActionCreator(password)),
        toggleIsRememberMe: (isRememberMe) => dispatch(toggleIsRememberMeActionCreator(isRememberMe)),
        changeErrorsList: (error) => dispatch(changeErrorsListActionCreator(error)),
        changeCaptcha: (captcha) => dispatch(changeCaptchaActionCreator(captcha)),
        login: (email, password, isRememberMe, captcha) => dispatch(login(email, password, isRememberMe, captcha))
    });
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
