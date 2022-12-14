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
    updateProfileStatus: (status) => instance.put(`profile/status`,{status})
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
    authMe: () => instance.get(`auth/me`).then(response => response.data)
}
