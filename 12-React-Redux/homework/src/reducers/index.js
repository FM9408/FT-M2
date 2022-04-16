import {ADD_MOVIE_FAVORITE, GET_MOVIES, REMOVE_MOVIE_FAVORITE, GET_MOVIE_DETAIL} from "../actions";
const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
};

function rooReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_MOVIE_FAVORITE:
            console.log("La accion llegó a su reducer")
            console.log(state.moviesFavourites)
            return {
                ...state,
                moviesFavourites:state.moviesFavourites.concat(action.payload)
            }
            
        case GET_MOVIES:
            return {
                ...state,
                moviesLoaded: action.payload.Search
            }
        case REMOVE_MOVIE_FAVORITE:
            console.log("La accion llegó a su reducer")
            return {
                ...state,
                moviesFavourites: state.moviesFavourites.filter((item) => item.name !== action.payload)
            }
        case GET_MOVIE_DETAIL:
            console.log("La accion llegó a su reducer")
            
            return {
                ...state,
                movieDetail: action.payload
            }
    
        default:
            return state
    }
}


export default rooReducer;