import axios from "axios";
import {createBrowserHistory} from "history";

import {baseURL} from "./apiService";

const history = createBrowserHistory();

const axiosService = axios.create({baseURL});

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjQyYzVjNzcxZWRmNzkyMWIwZjA5YTVmYmFlMzE1MiIsInN1YiI6IjYzZWZlMmI1Y2FhY2EyMDBhMTlhNjY1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dqXETjxJrIpYwgd2EZz7qQuugekY5zQB2nu8spf3WRo'


axiosService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`
    return config
});



export {
    axiosService,
    history
}