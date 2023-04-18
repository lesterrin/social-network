import React from "react";
import {maxLength, required} from "../utils/validators";
import s from "./login.module.css";
import {Navigate} from "react-router-dom";

const LoginForm = ({
                       email, password, isRememberMe, changeEmail, changePassword, changeCaptcha, authError,
                       changeErrorsList, toggleIsRememberMe, errorsList, login, captcha, captchaUrl
                   }) => {

    const emailElement = React.createRef();
    const passwordElement = React.createRef();
    const isRememberMeElement = React.createRef();
    const errorsWrapper = React.createRef();
    const captchaElement = React.createRef();

    const errors = errorsList.map(e => <div>{e}</div>);

    const handleSubmit = (e) => {
        console.log(required(captcha), !captchaUrl);
        if ((required(email) && required(password)) && (required(captcha) || !captchaUrl)) {
            errorsWrapper.current.classList.add(s.hidden);
            changeErrorsList([]);
            login(email, password, isRememberMe, captcha);
        } else {
            errorsWrapper.current.classList.remove(s.hidden);
            changeErrorsList(['Все поля должны быть заполнены']);
        }
        e.preventDefault();
    }

    const onEmailChange = () => {
        const email = emailElement.current.value;
        const valid = maxLength(email, 30);
        if (valid) {
            emailElement.current.classList.remove(s.error)
            changeEmail(email)
        } else emailElement.current.classList.add(s.error)
    }

    const onPasswordChange = () => {
        const pass = passwordElement.current.value;
        const valid = maxLength(pass, 30);
        if (valid) {
            passwordElement.current.classList.remove(s.error)
            changePassword(pass);
        } else passwordElement.current.classList.add(s.error)

    }

    const onIsRememberMeChange = () => {
        toggleIsRememberMe(isRememberMeElement.current.value);
    }

    const onCaptchaChange = () => {
        changeCaptcha(captchaElement.current.value);
    }

    return (
        <>
            <div className={`${s.errors} ${s.hidden}`} ref={errorsWrapper}>
                {errors}
            </div>
            {authError ? <div className={s.errors}>Email или пароль введены неверно</div> : null}
            <div><b>Тестовый логин:</b> voldemar1810@gmail.com</div>
            <div><b>Тестовый пароль:</b> TestPassword123</div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input name='email' placeholder='email' value={email} onChange={onEmailChange} ref={emailElement}/>
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
                {captchaUrl && <div><img src={captchaUrl}/><br/>
                    <input id='captchaInput' name='captcha' onChange={onCaptchaChange} ref={captchaElement}/></div>}
                <div>
                    <input type="submit" value="Login"/>
                </div>
            </form>
        </>
    )
}

const Login = (props) => {
    if (!props.isAuth) {
        return (
            <div>
                <h1>Login</h1>
                <LoginForm {...props}/>
            </div>
        )
    } else {
        return <Navigate to="/profile"/>
    }
}

export default Login;
