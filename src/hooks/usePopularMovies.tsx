import { useEffect } from "react"
import { useDispatch, useStore } from "../store"
import { ActionTypes } from "../store/types"
import useAxios from "./useAxios"

const usePopularMovies = () => {
    const state = useStore()
    const dispatch = useDispatch()

    const [fetchPopular, popularResult, popularError ] = useAxios('/movie/popular')

    useEffect(() => {
        if(!state.popularMovies?.items){
            dispatch({
                type: ActionTypes.SET_POPULAR_IS_LOADING,
                payload: true
            })

            fetchPopular()
        }
    }, [])

    useEffect(() => {
        if(popularResult?.results?.length) {
            dispatch({
                type: ActionTypes.SET_POPULAR_MOVIES,
                payload: popularResult?.results
            })
        }
    }, [popularResult])

    useEffect(() => {
        if(popularError){
            dispatch({
                type: ActionTypes.SET_POPULAR_ERROR,
                payload: popularError
            })
        }
    }, [popularError])
}

export default usePopularMovies