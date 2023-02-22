import {authAPI} from "../api/api";
import {setProfileStatus} from "./profile-reducer";

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';

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
                isAuth: true
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
            if (data.resultCode === 0) {
                dispatch(authMe());
            } else {
                console.log(`что-то пошло не так. login auth-reducer`);
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            } else {
                console.log(`что-то пошло не так. logout auth-reducer`);
            }
        })
    }
}

export default authReducer;
