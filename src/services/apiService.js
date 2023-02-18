const baseURL = 'https://api.themoviedb.org/3/discover'
const movies = '/movie'

const urls = {
    movies:{
        movies,
        byId:(id)=>`${movies}/${id}`
    }

}


export {
    baseURL,
    urls
}