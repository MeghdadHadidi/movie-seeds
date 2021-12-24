import { useDispatch } from "../store"
import { Movie } from "../store/types"

const useMovieItem = () => {
    const dispatch = useDispatch()
    
    const toggleFavorite = (movie: Movie) => {
        dispatch({
            type: 'TOGGLE_MOVIE_FAVORITES',
            payload: movie
        })
    }

    const toggleWatchList = (movie: Movie) => {
        dispatch({
            type: 'TOGGLE_MOVIE_WATCH_LIST',
            payload: movie
        })
    }

    return {
        toggleFavorite,
        toggleWatchList
    }
}

export default useMovieItem