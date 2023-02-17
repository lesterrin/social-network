import React from "react";
import {maxLength, required} from "../common/validators";
import s from "./login.module.css";

const LoginForm = ({login, password, isRememberMe, changeLogin, changePassword, changeErrorsList, toggleIsRememberMe, errorsList}) => {

    const loginElement = React.createRef();
    const passwordElement = React.createRef();
    const isRememberMeElement = React.createRef();
    const errorsWrapper = React.createRef();

    const errors = errorsList.map(e=><div>{e}</div>);

    const handleSubmit = (e) => {
        if (required(login) && required(password)) {
            errorsWrapper.current.classList.add(s.hidden);
            changeErrorsList([]);
            console.log('авторизован');
        } else {
            errorsWrapper.current.classList.remove(s.hidden);
            changeErrorsList(['Все поля должны быть заполнены']);
        }
        e.preventDefault();
    }

    const onLoginChange = () => {
        const login = loginElement.current.value;
        const valid = maxLength(login, 16);
        if (valid) {
            loginElement.current.classList.remove(s.error)
            changeLogin(login)
        } else loginElement.current.classList.add(s.error)
    }

    const onPasswordChange = () => {
        const pass = passwordElement.current.value;
        const valid = maxLength(pass, 16);
        if (valid) {
            passwordElement.current.classList.remove(s.error)
            changePassword(pass);
        } else passwordElement.current.classList.add(s.error)

    }

    const onIsRememberMeChange = () => {
        toggleIsRememberMe(isRememberMeElement.current.value);
    }

    return (
        <>
            <div className={`${s.errors} ${s.hidden}`} ref={errorsWrapper}>
                {errors}
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input name='login' placeholder='Login' value={login} onChange={onLoginChange} ref={loginElement}/>
                </div>
                <div>
                    <input name='password' placeholder='Password' type='password' value={password}
                           onChange={onPasswordChange} ref={passwordElement}/>
                </div>
                <div>
                    <input id='isRememberMe' name='isRememberMe' type='checkbox' checked={isRememberMe}
                           onChange={onIsRememberMeChange} ref={isRememberMeElement}/>
                    <label htmlFor='isRememberMe'>remember me</label>
                </div>
                <div>
                    <input type="submit" value="Login"/>
                </div>
            </form>
        </>
    )
}

const Login = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm {...props}/>
        </div>
    )
}

export default Login;
