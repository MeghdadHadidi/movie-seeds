import { useEffect } from "react"
import useAxios from "../hooks/useAxios"
import { useDispatch, useStore } from "../store"

const useMovieWrapper = () => {
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

    return {
        isLoading: isLoadingMovies,
        error: movieError
    }
}

export default useMovieWrapper