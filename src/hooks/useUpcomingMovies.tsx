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
    }, [])

    useEffect(() => {
        if(upcomingResult?.results?.length) {
            dispatch({
                type: ActionTypes.SET_MOVIES,
                payload: upcomingResult?.results
            })

            dispatch({
                type: ActionTypes.SET_UPCOMING_MOVIES,
                payload: upcomingResult?.results
            })
        }
    }, [upcomingResult])

    useEffect(() => {
        if(upcomingError){
            dispatch({
                type: ActionTypes.SET_UPCOMING_ERROR,
                payload: upcomingError
            })
        }
    }, [upcomingError])
}

export default useUpcomingMovies