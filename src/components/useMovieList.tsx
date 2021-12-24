import { useEffect } from "react"
import useAxios from "../hooks/useAxios"
import { useDispatch, useStore } from "../store"
import { Movie } from "../store/types"

const useMovieList = () => {
    const store = useStore()
    const dispatch = useDispatch()

    const [ fetchMovies, movieList, movieError, isLoadingMovies ] = useAxios('/discover/movie')

    useEffect(() => {
        if(!store.movies?.items) {
            fetchMovies()
        }
    }, [])

    useEffect(() => {
        if(!store.movies?.items?.length && movieList?.results?.length){
            dispatch({
                type: 'SET_MOVIES',
                payload: movieList?.results
            })
        }
    }, [movieList])

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
        isLoading: isLoadingMovies,
        error: movieError,
        toggleFavorite,
        toggleWatchList
    }
}

export default useMovieList