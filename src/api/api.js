import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "bf8b5e36-ac4e-4945-b6af-e6bc5e0fb73f"
    }
})

export const profileAPI = {
    getProfile: (uid) => instance.get(`profile/${uid}`),
    getProfileStatus: (uid) => instance.get(`profile/status/${uid}`),
    updateProfileStatus: (status) => instance.put(`profile/status`, {status}),
    savePhoto: (photoFile) => {
        const formData = new FormData();
        formData.append('image', photoFile);

        return instance.put(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    updateProfileData: (profile) => {
        return instance.put(`/profile`, profile);
    }
}

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get(`users`, {
            params: {
                count: pageSize,
                page: currentPage
            }
        }).then(response => response.data);
    },
    followUser: (id) => instance.post(`follow/${id}`),
    unfollowUser: (id) => instance.delete(`follow/${id}`)
}

export const authAPI = {
    authMe: () => instance.get(`auth/me`).then(response => response.data),
    login: (email, password, rememberMe = false, captcha = null) => instance.post(`auth/login`, {
        email,
        password,
        rememberMe,
        captcha
    }).then(response => {
        return response.data
    }),
    logout: () => instance.delete(`auth/login`)
}

export const securityAPI = {
    getCaptchaUrl: () => instance.get('security/get-captcha-url')
}