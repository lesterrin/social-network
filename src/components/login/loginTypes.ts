export type MapStatePropsType = {
    email: string,
    password: string,
    isRememberMe: boolean,
    errorsList: Array<string>,
    captcha: string | null,
    isAuth: boolean,
    authError: string,
    captchaUrl: string | null
}

export type MapDispatchPropsType = {
    login: (email:string, password:string, isRememberMe:boolean, captcha: string|null) => void,
    changeEmail: (login: string) => void,
    changePassword: (password: string) => void,
    changeCaptcha: (captcha: string) => void,
    changeErrorsList: (errors: Array<string>) => void,
    toggleIsRememberMe: (isRememberMe: boolean) => void
}