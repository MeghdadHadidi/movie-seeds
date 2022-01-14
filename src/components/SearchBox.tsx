import { useState } from "react"
import useSearchBox from "../hooks/useSearchBox"

import css from './SearchBox.module.css'

const IMG_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL

const SearchBox = () => {
    const [keyword, setKeyword] = useState('')
    const { searchByKeyword, searchResult, searchIsLoading, resetResult, cancelSearch } = useSearchBox(keyword)

    const handleKeyup = () => {
        if(keyword.length < 3) {
            resetResult()
            cancelSearch()
            return;
        };
        searchByKeyword()
    }

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
            </div>

            <div className={css.searchBoxResult}>
                {!searchIsLoading && (
                    <ul>
                        {searchResult.map(movie => (
                            <li key={movie.id}>
                                <span className={css.searchItemImg}>
                                    {movie.poster_path && 
                                        <img src={`${IMG_BASE_URL}/w92/${movie.poster_path}`} alt={movie.original_title} />
                                    }
                                </span>
                                <span>{movie.title}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default SearchBox