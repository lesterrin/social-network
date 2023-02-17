import Login from "./login";
import {connect} from "react-redux";
import {
    toggleIsRememberMeActionCreator,
    changeLoginActionCreator,
    changePasswordActionCreator, changeErrorsListActionCreator
} from "../../redux/login-reducer";

const mapStateToProps = ({loginPage}) => {
    return ({
        login: loginPage.login,
        password: loginPage.password,
        isRememberMe: loginPage.isRememberMe,
        errorsList: loginPage.errorsList
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        changeLogin: (login) => dispatch(changeLoginActionCreator(login)),
        changePassword: (password) => dispatch(changePasswordActionCreator(password)),
        toggleIsRememberMe: (isRememberMe) => dispatch(toggleIsRememberMeActionCreator(isRememberMe)),
        changeErrorsList: (error) => dispatch(changeErrorsListActionCreator(error))
    });
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;