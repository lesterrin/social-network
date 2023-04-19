import {authAPI, securityAPI} from "../api/api";
import React from "react";

const SET_AUTH_USER_DATA = 'auth/SET-AUTH-USER-DATA';
const SET_AUTH_ERROR = 'auth/SET-AUTH-ERROR';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET-CAPTCHA-URL-SUCCESS';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    authError: false,
    captchaUrl: null //если null, значит капча не требуется
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

        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.captchaUrl
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

export const setCaptchaUrl = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, captchaUrl});

//thunk creators
export const authMe = () => async (dispatch) => {
    const data = await authAPI.authMe();

    if (data.resultCode === 0) {
        const {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }

}

export const login = (email, password, isRememberMe, captcha) => async (dispatch) => {
    const data = await authAPI.login(email, password, isRememberMe, captcha)

    if (data.resultCode === 0) {
        dispatch(authMe());
    } else {
        dispatch(setAuthError());
        console.log(`Сервер отклонил попытку авторизации`);
        console.log(data);
        if (data.resultCode === 10) {
            console.log(`Слишком много неудачных попыток. Сервер запросил заполнение капчи.`);
            dispatch(getCaptchaUrl());
        }
    }
}

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(setCaptchaUrl(captchaUrl));
}

export default authReducer;
