import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'a59d67e4-9629-42fd-87e6-37502a261641'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const userAPI = {
    getUsers(pageСurrent = 1, pageSize = 10) {
        return instance.get(`users?page=${pageСurrent}&count=${pageSize}`).then(response => {
            return response.data;
        });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`, {}).then(response => {
            return response.data;
        })
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => {
            return response.data;
        });
    },
    getUserProfile(userId) {
        return instance.get(`profile/` + userId).then(respons => {
            return respons.data;
        })
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(respons => {
            return respons.data;
        })
    }
}


