import axios from "axios";

export const endpoints = {
    "categories": "/categories",
    "bosses": "/bosses"
}


export const api = () => axios.create({
    baseURL: 'http://localhost:8080'
})