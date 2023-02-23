import {axiosService} from "./axiosService";
import {urls} from "./apiService";

const genreService = {
    getAll:()=>axiosService.get(urls.genres),
    getById:(id)=>axiosService.get(`${urls.genres}/${id}`)
}

export {
    genreService
}