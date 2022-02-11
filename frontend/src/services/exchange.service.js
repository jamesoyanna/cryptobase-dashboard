//import Axios from "axios";
import {axiosInstance} from '../config';

//const API_URL = "http://localhost:5000/exchange";

class ExchangeService {
    getCurrentPrice(coin) {
        return axiosInstance
            .get("/exchange/price/" + coin)
            .then(response => {
                localStorage.setItem("coin", JSON.stringify(response.data));

                return JSON.parse(localStorage.getItem('coin'));;
            });
    }

    getPercentChange(coin) {
        return axiosInstance
            .get("/exchange/information/" + coin)
            .then(response => {
                localStorage.setItem("percentChangeHour", JSON.stringify(response.data.percent_change_1h).replace("\"", "").replace("\"", ""));
                localStorage.setItem("percentChangeDay", JSON.stringify(response.data.percent_change_24h).replace("\"", "").replace("\"", ""));
                localStorage.setItem("percentChangeWeek", JSON.stringify(response.data.percent_change_7d).replace("\"", "").replace("\"", ""));

                return { "hour": localStorage.getItem("percentChangeHour"), "day": localStorage.getItem("percentChangeDay"), "week": localStorage.getItem("percentChangeWeek") }
            });
    }
}

export default new ExchangeService();