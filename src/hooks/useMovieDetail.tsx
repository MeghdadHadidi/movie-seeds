import { useEffect, useMemo } from "react"
import { average } from 'color.js'
import { useDispatch, useStore } from "../store"
import { ActionTypes } from "../store/types"
import useAxios from "./useAxios"

const IMG_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL

const useMovieDetail = (movieId: string) => {
    const { movies } = useStore()
    const dispatch = useDispatch()
    const [fetchMovieDetail, movieDetailResponse, movieDetailError, movieDetailIsLoading] = useAxios(`/movie/${movieId}`)

    const movie = useMemo(() => movies[movieId], [movieId, movies])
    const genres = movie?.genres?.map(genre => genre.name)

    useEffect(() => {
        const sourcePath = movie?.backdrop_path || movie?.poster_path
        if(sourcePath) {
            const backDrop = `${IMG_BASE_URL}/w500${sourcePath}`
            average(backDrop, { format: 'hex' }).then((colors: any) => {
                dispatch({
                    type: ActionTypes.SET_AVERAGE_COLOR,
                    payload: colors
                })
            })
        }

        return () => {
            dispatch({
                type: ActionTypes.SET_AVERAGE_COLOR,
                payload: ''
            })
        }
    }, [movie])

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