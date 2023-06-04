import axios from "axios";
import {ProfileType, UserDataType} from "../types/types";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "bf8b5e36-ac4e-4945-b6af-e6bc5e0fb73f"
    }
})

type AnyDataResponseType = {
    data: {},
    resultCode: ResultCodesEnum,
    message: Array<string>
}

export const profileAPI = {
    getProfile: (uid: number) => instance.get<ProfileType>(`profile/${uid}`),
    getProfileStatus: (uid: number) => instance.get<any>(`profile/status/${uid}`),
    updateProfileStatus: (status: string) => instance.put<AnyDataResponseType>(`profile/status`, {status}),
    savePhoto: (photoFile: any) => {
        const formData = new FormData();
        formData.append('image', photoFile);

        return instance.put<any>(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    updateProfileData: (profile: ProfileType) => {
        return instance.put<AnyDataResponseType>(`/profile`, profile);
    }
}

type GetUsersType = {
    items: Array<UserDataType>
}

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get<GetUsersType>(`users`, {
            params: {
                count: pageSize,
                page: currentPage
            }
        }).then(response => response.data);
    },
    followUser: (id: number) => instance.post<AnyDataResponseType>(`follow/${id}`),
    unfollowUser: (id: number) => instance.delete<AnyDataResponseType>(`follow/${id}`)
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}

type MeResponseType = {
    data: {id: number, email: string, login: string},
    resultCode: ResultCodesEnum,
    message: Array<string>
}

type LoginResponseType = {
    data: {userId: number},
    resultCode: ResultCodesEnum,
    message: Array<string>
}

export const authAPI = {
    authMe: () => instance.get<MeResponseType>(`auth/me`).then(response => response.data),
    login: (email: string, password: string, rememberMe = false, captcha: string | null = null) => instance.post<LoginResponseType>(`auth/login`, {
        email,
        password,
        rememberMe,
        captcha
    }).then(response => {
        return response.data
    }),
    logout: () => instance.delete<AnyDataResponseType>(`auth/login`)
}

type GetCaptchaUrlType = {
    url: string
}

export const securityAPI = {
    getCaptchaUrl: () => instance.get<GetCaptchaUrlType>('security/get-captcha-url')
}