import Buscador from "../components/Buscador/Buscador"

export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
export const GET_MOVIES = "GET_MOVIE";
export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE";


export function addMovieFavorite(payload){
    console.log("Se invocó addMovieFavorite")
    console.log(payload)
    return {
        type: ADD_MOVIE_FAVORITE,
        payload: payload
    }
}

export let getMovies = ((titulo) =>
    function(dispatch) {
        fetch("https://www.omdbapi.com/?apikey=ffabff9b&s=" + titulo)
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: GET_MOVIES,
                payload: json
            });
        });
    })


export function removeMoviFavorite(payload) {
    console.log("se invocó removeMovieFavorite")
    return {
        type: REMOVE_MOVIE_FAVORITE,
        payload: payload.name
    }
}

export let getMovieDetail = ((id) => 
        
        function(dispatch) {
            console.log('se llamó a getMovieDetails')
            
            fetch("https://www.omdbapi.com/?apikey=ffabff9b&i=" + id)
            .then(response => response.json())
            .then(json => {
                console.log(json)
            dispatch({
                type: GET_MOVIE_DETAIL,
                payload: json
            });
        });
        })