import { ReactComponent as HeartIcon } from '../assets/img/heart.svg'
import { ReactComponent as LaterIcon } from '../assets/img/later.svg'
import { useStore } from "../store"

import css from './MovieItem.module.css'
import { Movie } from "../store/types"
import useMovieItem from "../hooks/useMovieItem"
import LazyImage from "./LazyImage"
import { useNavigate } from "react-router-dom"

const IMG_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL

interface Props {
    movie: Movie
}

const MovieItem = ({ movie }: Props) => {
    const { favorites, watchList, genres: { items: genres } } = useStore()
    const { toggleFavorite, toggleWatchList } = useMovieItem()

    const navigate = useNavigate()

    const goToMovieDetail = () => {
        navigate(`/movie/${movie.id}`)
    }
    
    return (
        <div className={css.movieItemWrapper} onClick={goToMovieDetail}>
            <div>
                <div className={css.movieItemTitle}>
                    <h5>{movie.title}</h5>

                    <div className={css.genreLabels}>
                        {genres && movie.genre_ids?.map((genre) => (
                            <span key={genre}>{genres[genre]}</span>
                        ))}
                    </div>
                </div>
                <HeartIcon fill={favorites[movie.id] ? "red" : "#999"} onClick={() => toggleFavorite(movie)} width={20} height={20} />
                <LaterIcon fill={watchList[movie.id] ? "green" : "#999"} onClick={() => toggleWatchList(movie)} width={20} height={20} />
                {movie.poster_path && 
                    <LazyImage src={`${IMG_BASE_URL}/w92/${movie.poster_path}`} alt={movie.original_title} />
                }
            </div>
        </div>
    )
}

export default MovieItem