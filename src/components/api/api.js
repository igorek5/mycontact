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
        console.warn('(Obsolete method. Please profileAPI object) Используется устаревший метод. Пожалуйста пользуйтесь profileAPI object')
        return profileAPI.getUserProfile(userId);
    }
};

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/` + userId).then(respons => {
            return respons.data;
        })
    },

    getStatus(userId) {
        return instance.get(`profile/status/` + userId).then(respons => {
            return respons.data;
        })
    },

    putStatus(status) {
        return instance.put(`profile/status`, {status: status}).then(response => {
            return response.data;
        })
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(respons => {
            return respons.data;
        })
    },
    loginRegister(email, password, rememberMe) {
        return instance.post(`auth/login`, {email: email, password: password, rememberMe: rememberMe})
            .then(respons => {
            return respons.data;
        })
    },
    logOut() {
        return instance.delete(`auth/login`).then(respons => {
            return respons.data;
        })
    }
};


