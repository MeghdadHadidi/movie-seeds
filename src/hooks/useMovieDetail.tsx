import { useEffect, useMemo } from "react"
import { useDispatch, useStore } from "../store"
import { ActionTypes } from "../store/types"
import useAxios from "./useAxios"

const useMovieDetail = (movieId: string) => {
    const { movies } = useStore()
    const dispatch = useDispatch()
    const [fetchMovieDetail, movieDetailResponse, movieDetailError, movieDetailIsLoading] = useAxios(`/movie/${movieId}`)

    const movie = useMemo(() => movies[movieId], [movieId])
    const genres = movie.genres?.map(genre => genre.name)

    useEffect(() => {
        if((!movie?.videos || !movie?.credits) && !movieDetailIsLoading && !movieDetailResponse){
            fetchMovieDetail({
                append_to_response: 'credits,videos'
            })
        }
        else if(movieDetailResponse){
            dispatch({
                type: ActionTypes.SET_MOVIES,
                payload: [movieDetailResponse]
            })
        }
    }, [movie, movieDetailResponse, movieDetailIsLoading])

    return {
        fetchMovieDetail,
        movieDetailIsLoading,
        movieDetailError,
        movie,
        genres
    }
}

export default useMovieDetail