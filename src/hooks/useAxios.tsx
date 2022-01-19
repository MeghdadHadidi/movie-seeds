import axios, { Axios } from "axios"
import { useCallback, useReducer } from "react"

const BASE_URL = process.env.REACT_APP_BASE_URL
const API_KEY = process.env.REACT_APP_API_KEY

const axiosClient: Axios = axios.create({
    baseURL: BASE_URL
})

axiosClient.interceptors.request.use((config) => {
    config.params = {
        ...config.params,
        api_key: API_KEY
    }
    return config
})

interface ActionType {
    type: string,
    data?: any,
    error?: unknown
}

interface StateType {
    isLoading: boolean,
    data?: any,
    error?: unknown
}

const useAxios = (url: string, method: string = 'GET') => {
    const [state, dispatch] = useReducer(reducer, {
        isLoading: false,
        data: null,
        error: null
    })

    function reducer(prevState: StateType, action: ActionType): StateType {
        switch (action.type) {
            case 'SET_LOADING':
                return {
                    ...prevState,
                    isLoading: true
                }
            case 'SET_ERROR':
                return {
                    ...prevState,
                    isLoading: false,
                    error: action.error
                }
            case 'SET_DATA':
                return {
                    ...prevState,
                    isLoading: false,
                    data: action.data
                }
            default:
                return prevState
        }
    }

    const fetch = useCallback(async (body?: unknown) => {
        dispatch({
            type: 'SET_LOADING'
        })
        try {
            let result;
            if(method === 'POST') {
                result = await axiosClient.post(url, body)
            } else {
                result = await axiosClient.get(url, {
                    params: body
                })
            }
            
            if(result?.data){                
                dispatch({
                    type: 'SET_DATA',
                    data: result.data
                })
            } else {
                throw new Error('Problem in fetching data')
            }
        } catch(error) {
            dispatch({
                type: 'SET_ERROR',
                error
            })
        }
    }, [url, dispatch, method])

    return [
        fetch,
        state.data,
        state.error,
        state.isLoading
    ]
}

export default useAxios