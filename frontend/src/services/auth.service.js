//import axios from "axios";
import {axiosInstance} from '../config';
//const API_URL = "http://localhost:5000/auth/";

class AuthService {
    login(username, password) {
        return axiosInstance
            .post("/auth/login", {
                username,
                password,
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, email, password) {
        return axiosInstance.post("/auth/register", {
            username,
            email,
            password
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();