const CHANGE_EMAIL = 'login/CHANGE-EMAIL';
const CHANGE_PASSWORD = 'login/CHANGE-PASSWORD';
const TOGGLE_IS_REMEMBER_ME = 'login/TOGGLE-IS-REMEMBER-ME';
const CHANGE_ERRORS_LIST = 'login/CHANGE-ERRORS-LIST';
const CHANGE_CAPTCHA = 'login/CHANGE-CAPTCHA';

const initialState = {
    email: '',
    password: '',
    isRememberMe: true,
    errorsList: [],
    captcha: null
}

const loginReducer = (state = initialState, action) => {
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

export const changeEmailActionCreator = (email) => ({type: CHANGE_EMAIL, email});
export const changePasswordActionCreator = (password) => ({type: CHANGE_PASSWORD, password});
export const toggleIsRememberMeActionCreator = (isRememberMe) => ({type: TOGGLE_IS_REMEMBER_ME, isRememberMe});
export const changeErrorsListActionCreator = (errors) => ({type: CHANGE_ERRORS_LIST, errors});
export const changeCaptchaActionCreator = (captcha) => ({type: CHANGE_CAPTCHA, captcha});


export default loginReducer;