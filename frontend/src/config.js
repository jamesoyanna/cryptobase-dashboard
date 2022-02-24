import axios from 'axios';
//  baseURL: "https://cryptobase-backend.herokuapp.com"

export const axiosInstance = axios.create({
    baseURL: "https://crypto-base-backend-app.herokuapp.com"
})

// https://crypto-base-backend-app.herokuapp.com/