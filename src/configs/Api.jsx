import axios from "axios";

export const endpoints = {
    "categories": "/categories",
    "bosses": "/bosses"
}


export const api = () => axios.create({
    baseURL: 'http://localhost:8080/api'
    // baseURL: 'https://pla-is-me.com/api'
})