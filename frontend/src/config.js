import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "https://cryptobase-backend.herokuapp.com"
})