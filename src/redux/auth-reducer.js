import {authAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';
const SET_AUTH_ERROR = 'SET-AUTH-ERROR';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
                authError: false
            }

        case SET_AUTH_ERROR:
            return {
                ...state,
                authError: true
            }

        default:
            return state;
    }
}

//action creators
export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    data: {userId, email, login, isAuth}
});

export const setAuthError = () => ({
    type: SET_AUTH_ERROR
});

//thunk creators
export const authMe = () => {
    return (dispatch) => {
        authAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
    }
}

export const login = (email, password, isRememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, isRememberMe).then(data => {
            console.log(data);
            if (data.resultCode === 0) {
                dispatch(authMe());
            } else {
                dispatch(setAuthError());
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            } else {
                console.log(`Сервер отклонил попытку авторизации`);
                if (response.data.resultCode === 10) {
                    console.log(`Слишком много неудачных попыток. Сервер запросил заполнение капчи. На данный момент капча не реализована`);
                }
            }
        })
    }
}

export default authReducer;
