import { useEffect } from "react"
import { useDispatch, useStore } from "../store"
import { ActionTypes } from "../store/types"
import useAxios from "./useAxios"

const useUpcomingMovies = () => {
    const state = useStore()
    const dispatch = useDispatch()

    const [fetchUpcoming, upcomingResult, upcomingError ] = useAxios('/movie/upcoming')

    useEffect(() => {
        if(!state.upcomingMovies?.items){
            dispatch({
                type: ActionTypes.SET_UPCOMING_IS_LOADING,
                payload: true
            })

            fetchUpcoming()
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if(upcomingResult?.results) {
            dispatch({
                type: ActionTypes.SET_MOVIES,
                payload: upcomingResult?.results
            })

            dispatch({
                type: ActionTypes.SET_UPCOMING_MOVIES,
                payload: upcomingResult?.results
            })
        }
    }, [upcomingResult]) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if(upcomingError){
            dispatch({
                type: ActionTypes.SET_UPCOMING_ERROR,
                payload: upcomingError
            })
        }
    }, [upcomingError]) // eslint-disable-line react-hooks/exhaustive-deps
}

export default useUpcomingMovies