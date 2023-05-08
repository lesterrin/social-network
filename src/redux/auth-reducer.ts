import {authAPI, securityAPI} from "../api/api";
import React from "react";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const SET_AUTH_USER_DATA = 'auth/SET-AUTH-USER-DATA';
const SET_AUTH_ERROR = 'auth/SET-AUTH-ERROR';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET-CAPTCHA-URL-SUCCESS';

const initialState =  {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    authError: false,
    captchaUrl: null as string | null //если null, значит капча не требуется
}

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

    // @ts-ignore проверить
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                // @ts-ignore проверить
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
                // @ts-ignore проверить
                captchaUrl: action.payload.captchaUrl
            }

        default:
            return state;
    }
}

type SetAuthUserDataActionPayloadType = { userId: number | null, email: string | null, login: string | null, isAuth: boolean }
type SetAuthUserDataActionType = { type: typeof SET_AUTH_USER_DATA, payload: SetAuthUserDataActionPayloadType };
type SetAuthErrorActionType = { type: typeof SET_AUTH_ERROR};
type GetCaptchaUrlSuccessActionType = {type: typeof GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl: string } }

type ActionsTypes = SetAuthUserDataActionPayloadType |
    SetAuthUserDataActionType |
    SetAuthErrorActionType |
    GetCaptchaUrlSuccessActionType;

//action creators
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
    type: SET_AUTH_USER_DATA,
    payload: {userId, email, login, isAuth}
});

export const setAuthError = (): SetAuthErrorActionType => ({
    type: SET_AUTH_ERROR
});

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
});

//thunk creators
// @ts-ignore проверить
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const authMe = (): ThunkType => async (dispatch) => {
    const data = await authAPI.authMe();

    if (data.resultCode === 0) {
        const {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }

}

export const login = (email: string, password: string, isRememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
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

export const logout = (): ThunkType => async (dispatch) => {
    const response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export default authReducer;
