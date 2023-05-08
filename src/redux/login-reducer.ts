const CHANGE_EMAIL = 'login/CHANGE-EMAIL';
const CHANGE_PASSWORD = 'login/CHANGE-PASSWORD';
const TOGGLE_IS_REMEMBER_ME = 'login/TOGGLE-IS-REMEMBER-ME';
const CHANGE_ERRORS_LIST = 'login/CHANGE-ERRORS-LIST';
const CHANGE_CAPTCHA = 'login/CHANGE-CAPTCHA';

const initialState = {
    email: '' as string,
    password: '' as string,
    isRememberMe: true,
    errorsList: [] as Array<string>,
    captcha: null as null | string
}

type InitialStateType = typeof initialState;

const loginReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case CHANGE_EMAIL:
            return {
                ...state,
                email: action.email
            }

        case CHANGE_PASSWORD:
            return {
                ...state,
                password: action.password
            }

        case TOGGLE_IS_REMEMBER_ME:
            return {
                ...state,
                isRememberMe: !state.isRememberMe
            }

        case CHANGE_ERRORS_LIST:
            return {
                ...state,
                errorsList: action.errors
            }

        case CHANGE_CAPTCHA:
            return {
                ...state,
                captcha: action.captcha
            }

        default:
            return state;
    }
}

type ChangeEmailActionType = {type: typeof CHANGE_EMAIL, email: string};
type ChangePasswordActionType = {type: typeof CHANGE_PASSWORD, password: string};
type ToggleIsRememberMeActionType = {type: typeof TOGGLE_IS_REMEMBER_ME, isRememberMe: boolean};
type ChangeErrorsListActionType = {type: typeof CHANGE_ERRORS_LIST, errors: Array<string>};
type ChangeCaptchaActionType = {type: typeof CHANGE_CAPTCHA, captcha: string};

export const changeEmailActionCreator = (email: string): ChangeEmailActionType => ({type: CHANGE_EMAIL, email});
export const changePasswordActionCreator = (password: string): ChangePasswordActionType => ({type: CHANGE_PASSWORD, password});
export const toggleIsRememberMeActionCreator = (isRememberMe: boolean): ToggleIsRememberMeActionType => ({type: TOGGLE_IS_REMEMBER_ME, isRememberMe});
export const changeErrorsListActionCreator = (errors: Array<string>): ChangeErrorsListActionType => ({type: CHANGE_ERRORS_LIST, errors});
export const changeCaptchaActionCreator = (captcha: string): ChangeCaptchaActionType => ({type: CHANGE_CAPTCHA, captcha});


export default loginReducer;