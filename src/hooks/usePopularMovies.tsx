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
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if(popularResult?.results) {
            dispatch({
                type: ActionTypes.SET_MOVIES,
                payload: popularResult?.results
            })

            dispatch({
                type: ActionTypes.SET_POPULAR_MOVIES,
                payload: popularResult?.results
            })
        }
    }, [popularResult]) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if(popularError){
            dispatch({
                type: ActionTypes.SET_POPULAR_ERROR,
                payload: popularError
            })
        }
    }, [popularError]) // eslint-disable-line react-hooks/exhaustive-deps
}

export default usePopularMovies