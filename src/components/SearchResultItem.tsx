import { useNavigate } from "react-router-dom"
import { Movie } from "../store/types"

import css from './SearchResultItem.module.css'

interface Props {
    movie: Movie
}

const IMG_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL

const SearchResultItem = ({ movie }: Props) => {
    const navigate = useNavigate()

    const goToMovie = () => {
        navigate(`/movie/${movie.id}`)
    }

    return (
        <li className={css.searchResultItem} onClick={goToMovie}>
            <span className={css.searchItemImg}>
                {movie.poster_path && 
                    <img src={`${IMG_BASE_URL}/w92/${movie.poster_path}`} alt={movie.original_title} />
                }
            </span>
            <span>{movie.title}</span>
        </li>
    )
}

export default SearchResultItem