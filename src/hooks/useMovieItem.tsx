import { MouseEvent } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "../store"
import { ActionTypes, Movie } from "../store/types"

const useMovieItem = (movie: Movie) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const goToMovieDetail = (event: MouseEvent) => {
        if(!['span', 'svg'].includes((event.target as HTMLElement).tagName)) {
            navigate(`/movie/${movie.id}`)
        }
    }
    
    const toggleFavorite = () => {
        dispatch({
            type: ActionTypes.TOGGLE_MOVIE_FAVORITES,
            payload: movie
        })
    }

    const toggleWatchList = () => {
        dispatch({
            type: ActionTypes.TOGGLE_MOVIE_WATCH_LIST,
            payload: movie
        })
    }

    return {
        toggleFavorite,
        toggleWatchList,
        goToMovieDetail
    }
}

export default useMovieItem