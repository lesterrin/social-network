import {authAPI} from "../api/api";

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
export const setAuthUserData = (userId,email,login) => ({type: SET_AUTH_USER_DATA, data:{userId,email,login}});

//thunk creators
export const authMe = () => {
    return (dispatch) => {
        authAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        })
    }
}

export default authReducer;
