import { Movie } from '../store/types'
import SearchResultItem from "./SearchResultItem"

import css from './SearchResult.module.css'

interface Props {
    movies: Movie[]
}

const SearchResult = ({ movies }: Props) => {
    return (
        <div className={css.searchBoxResult}>
            <ul>
                {movies.map(movie => <SearchResultItem key={movie.id} movie={movie} />)}
            </ul>
        </div>
    )
}

export default SearchResult;