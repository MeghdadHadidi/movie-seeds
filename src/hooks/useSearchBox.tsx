import { useCallback, useEffect, useState } from "react"
import { useDispatch } from "../store"
import { ActionTypes, Movie } from "../store/types"
import useAxios from "./useAxios"
import useDebounce from "./useDebounce"

const useSearchBox = (keyword: string) => {
    const dispatch = useDispatch()
    const [searchResult, setSearchResult] = useState<Array<Movie>>([])

    const [search, searchResponse, searchError, searchIsLoading] = useAxios(`/search/movie?query=${keyword}`)

    useEffect(() => {
        if(searchError){
            dispatch({
                type: ActionTypes.SET_SEARCH_ERROR,
                payload: searchError
            })
        } else if(searchResponse){
            dispatch({
                type: ActionTypes.SET_MOVIES,
                payload: searchResponse?.results?.items
            })
            setSearchResult(searchResponse?.results)
        }
    }, [searchResponse, searchError])
    
    const [debouncedSearch, cancelSearch] = useDebounce(search, 500)

    const resetResult = useCallback(() => {
        setSearchResult([])
    }, [searchResult])

    return {
        searchByKeyword: debouncedSearch,
        searchResult,
        searchIsLoading,
        resetResult,
        cancelSearch
    }
}

export default useSearchBox