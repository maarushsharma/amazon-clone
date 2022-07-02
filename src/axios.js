import axios from "axios";

const instance = axios.create({
    baseURL: '...' //the api (coud function) URL
});

export default instance;