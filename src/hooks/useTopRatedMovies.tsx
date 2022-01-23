import { useEffect } from "react"
import { useDispatch, useStore } from "../store"
import { ActionTypes } from "../store/types"
import useAxios from "./useAxios"

const useTopRatedMovies = () => {
    const state = useStore()
    const dispatch = useDispatch()

    const [fetchTopRated, topRatedResult, topRatedError ] = useAxios('/movie/top_rated')

    useEffect(() => {
        if(!state.topRatedMovies?.items){
            dispatch({
                type: ActionTypes.SET_TOPRATED_IS_LOADING,
                payload: true
            })

            fetchTopRated()
        }
    }, [])

    useEffect(() => {
        if(topRatedResult?.results) {
            dispatch({
                type: ActionTypes.SET_MOVIES,
                payload: topRatedResult?.results
            })

            dispatch({
                type: ActionTypes.SET_TOPRATE_MOVIES,
                payload: topRatedResult?.results
            })
        }
    }, [topRatedResult])

    useEffect(() => {
        if(topRatedError){
            dispatch({
                type: ActionTypes.SET_TOPRATED_ERROR,
                payload: topRatedError
            })
        }
    }, [topRatedError])
}

export default useTopRatedMovies