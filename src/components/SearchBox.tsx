import { KeyboardEvent, useEffect, useState } from "react"
import useSearchBox from "../hooks/useSearchBox"
import LoadingSpinner from "./LoadingSpinner"
import SearchResult from "./SearchResult"

import css from './SearchBox.module.css'

const SearchBox = () => {
    const [keyword, setKeyword] = useState('')
    const { searchByKeyword, searchResult, searchIsLoading, resetResult, cancelSearch } = useSearchBox(keyword)

    const resetSearch = () => {
        cancelSearch()
        resetResult()
        setKeyword('')
    }

    const handleKeyup = (event: KeyboardEvent<HTMLInputElement>): void => {
        if(event.key === 'Escape') {
            resetSearch()
            return;
        }
    }

    useEffect(() => {
        if(keyword.length < 3) {
            cancelSearch()
            resetResult()
            return;
        };
        searchByKeyword()
    }, [keyword]) // eslint-disable-line react-hooks/exhaustive-deps

    const searchInputClass = searchIsLoading ? css.searchInputLoading : css.searchInput

    return (
        <div className={css.searchBoxWrapper}>
            <div className={searchInputClass}>
                <input
                    type="text" 
                    placeholder="Search by movie or cast" 
                    value={keyword} 
                    onKeyUp={handleKeyup} 
                    onChange={(event) => setKeyword(event.target.value)} 
                />

                {keyword && <span className={css.clearIcon} onClick={resetSearch}>✖</span>}
                {searchIsLoading && <span className={css.spinner}><LoadingSpinner /></span>}
            </div>

            {!searchIsLoading && <SearchResult movies={searchResult} />}
        </div>
    )
}

export default SearchBox