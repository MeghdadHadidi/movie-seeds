import { ReactComponent as HeartIcon } from '../assets/img/heart.svg'
import { ReactComponent as LaterIcon } from '../assets/img/later.svg'
import { useStore } from "../store"

import css from './MovieItem.module.css'
import { Movie } from "../store/types"
import useMovieItem from "./useMovieItem"

const IMG_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL

interface Props {
    movie: Movie
}

const MovieItem = ({ movie }: Props) => {
    const { favorites, watchList } = useStore()
    const { toggleFavorite, toggleWatchList } = useMovieItem()

    return (
        <div>
            <div className={css.movieItemTitle}>{movie.title}</div>
            <HeartIcon fill={favorites[movie.id] ? "red" : "#ccc"} onClick={() => toggleFavorite(movie)} width={20} height={20} />
            <LaterIcon fill={watchList[movie.id] ? "green" : "#ccc"} onClick={() => toggleWatchList(movie)} width={20} height={20} />
            {movie.poster_path && 
                <img src={`${IMG_BASE_URL}/w92/${movie.poster_path}`} alt={movie.original_title} />
            }
        </div>
    )
}

export default MovieItem