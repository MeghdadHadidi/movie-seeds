import { useDispatch } from "../store"
import { ActionTypes, Movie } from "../store/types"

const useMovieItem = () => {
    const dispatch = useDispatch()
    
    const toggleFavorite = (movie: Movie) => {
        dispatch({
            type: ActionTypes.TOGGLE_MOVIE_FAVORITES,
            payload: movie
        })
    }

    const toggleWatchList = (movie: Movie) => {
        dispatch({
            type: ActionTypes.TOGGLE_MOVIE_WATCH_LIST,
            payload: movie
        })
    }

    return {
        toggleFavorite,
        toggleWatchList
    }
}

export default useMovieItem