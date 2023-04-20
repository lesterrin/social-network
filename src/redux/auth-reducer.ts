import {authAPI, securityAPI} from "../api/api";
import React from "react";

const SET_AUTH_USER_DATA = 'auth/SET-AUTH-USER-DATA';
const SET_AUTH_ERROR = 'auth/SET-AUTH-ERROR';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET-CAPTCHA-URL-SUCCESS';

/*export type InitialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    authError: boolean,
    captchaUrl: string | null
}*/

const initialState =  {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    authError: false,
    captchaUrl: null as string | null //если null, значит капча не требуется
}

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload,
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
                captchaUrl: action.payload.captchaUrl
            }

        default:
            return state;
    }
}

type SetAuthUserDataActionPayloadType = {
    userId: number | null, email: string | null, login: string | null, isAuth: boolean
}

type SetAuthUserDataActionType = {
    type: typeof SET_AUTH_USER_DATA,
    payload: SetAuthUserDataActionPayloadType
};

//action creators
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
    type: SET_AUTH_USER_DATA,
    payload: {userId, email, login, isAuth}
});

export const setAuthError = () => ({
    type: SET_AUTH_ERROR
});

type GetCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl: string }
}

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
});

//thunk creators
export const authMe = () => async (dispatch: any) => {
    const data = await authAPI.authMe();

    if (data.resultCode === 0) {
        const {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }

}

export const login = (email: string, password: string, isRememberMe: boolean, captcha: string) => async (dispatch: any) => {
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

export const logout = () => async (dispatch: any) => {
    const response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export default authReducer;
