import {urls} from "./apiService";
import {axiosService} from "./axiosService";

const movieService = {
    getAll:(page=1)=>axiosService.get(urls.movies.movies, {params:{page}}),
    getById:(id)=>axiosService.get(urls.movies.byId(id))
}

export {
    movieService
}