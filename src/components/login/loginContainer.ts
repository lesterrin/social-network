import Login from "./login";
import {connect} from "react-redux";
import {
    toggleIsRememberMeActionCreator,
    changeEmailActionCreator,
    changePasswordActionCreator, changeErrorsListActionCreator, changeCaptchaActionCreator
} from "../../redux/login-reducer";
import {login} from "../../redux/auth-reducer";
import {MapDispatchPropsType, MapStatePropsType} from "./loginTypes";

const mapStateToProps = ({loginPage: {email, password, isRememberMe, errorsList, captcha}, auth: {isAuth, authError, captchaUrl}}):MapStatePropsType => {
    return {email, password, isRememberMe, errorsList, isAuth, authError, captchaUrl, captcha};
};

const mapDispatchToProps = (dispatch): MapDispatchPropsType => {
    return ({
        changeEmail: (login:string) => dispatch(changeEmailActionCreator(login)),
        changePassword: (password:string) => dispatch(changePasswordActionCreator(password)),
        toggleIsRememberMe: (isRememberMe:boolean) => dispatch(toggleIsRememberMeActionCreator(isRememberMe)),
        changeErrorsList: (errors:Array<string>) => dispatch(changeErrorsListActionCreator(errors)),
        changeCaptcha: (captcha:string) => dispatch(changeCaptchaActionCreator(captcha)),
        login: (email:string, password:string, isRememberMe:boolean, captcha: string) => dispatch(login(email, password, isRememberMe, captcha))
    });
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
