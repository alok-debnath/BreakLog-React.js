import axios from 'axios';

// const apiurl = process.env.REACT_APP_API_URL;
const apiurl = "http://localhost:8080";

export const api = axios.create({
    baseURL: apiurl,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
        Accept: "application/json",
    }
});