import axios from "axios";

const accessToken = window.localStorage.getItem("access_token").access
console.log(accessToken);

export const API = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
})

