import React from "react";

const LoginForm = ({login,password,isRememberMe,changeLogin,changePassword,toggleIsRememberMe}) => {

    const loginElement = React.createRef();
    const passwordElement = React.createRef();
    const isRememberMeElement = React.createRef();


    const handleSubmit = (e) => {
        console.log({login,password,isRememberMe});
        e.preventDefault();
    }

    const onLoginChange = () => {
        changeLogin(loginElement.current.value)
    }

    const onPasswordChange = () => {
        changePassword(passwordElement.current.value)
    }

    const onIsRememberMeChange = () => {
        toggleIsRememberMe(isRememberMeElement.current.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input name='login' placeholder='Login' value={login} onChange={onLoginChange} ref={loginElement}/>
            </div>
            <div>
                <input name='password' placeholder='Password' value={password} onChange={onPasswordChange} ref={passwordElement}/>
            </div>
            <div>
                <input id='isRememberMe' name='isRememberMe' type='checkbox' checked={isRememberMe} onChange={onIsRememberMeChange} ref={isRememberMeElement}/>
                <label htmlFor='isRememberMe'>remember me</label>
            </div>
            <div>
                <input type="submit" value="Login" />
            </div>
        </form>
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
