const CHANGE_LOGIN = 'CHANGE-LOGIN';
const CHANGE_PASSWORD = 'CHANGE-PASSWORD';
const TOGGLE_IS_REMEMBER_ME = 'TOGGLE-IS-REMEMBER-ME';
const CHANGE_ERRORS_LIST = 'CHANGE-ERRORS-LIST';

const initialState = {
    login: '',
    password: '',
    isRememberMe: true,
    errorsList: []
}

const loginReducer = (state = initialState, action) => {
    switch (action.type){
        case CHANGE_LOGIN:
            return {
                ...state,
                login: action.login
            }

        case CHANGE_PASSWORD:
            return {
                ...state,
                password: action.password}

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

        default:
            return state;
    }
}

export const changeLoginActionCreator = (login) => ({type: CHANGE_LOGIN,login: login});
export const changePasswordActionCreator = (password) => ({type: CHANGE_PASSWORD,password: password});
export const toggleIsRememberMeActionCreator = (isRememberMe) => ({type: TOGGLE_IS_REMEMBER_ME,isRememberMe: isRememberMe});
export const changeErrorsListActionCreator = (errors) => ({type: CHANGE_ERRORS_LIST,errors: errors});


export default loginReducer;