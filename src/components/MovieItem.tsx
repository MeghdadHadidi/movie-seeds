import { ReactComponent as HeartIcon } from '../assets/img/heart.svg'
import { ReactComponent as LaterIcon } from '../assets/img/later.svg'
import { useStore } from "../store"

import css from './MovieItem.module.css'
import { Movie } from "../store/types"
import useMovieItem from "../hooks/useMovieItem"
import LazyImage from "./LazyImage"

const IMG_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL

interface Props {
    movie: Movie
}

const MovieItem = ({ movie }: Props) => {
    const { favorites, watchList, genres: { items: genres } } = useStore()
    const { toggleFavorite, toggleWatchList, goToMovieDetail } = useMovieItem(movie)
    
    const isFavorited = favorites.some(fav => fav.id === movie.id)
    const isWatchListed = watchList.some(watch => watch.id === movie.id)

    return (
        <div className={css.movieItemWrapper} onClick={goToMovieDetail}>
            <div>
                <span role="button" onClick={toggleFavorite}>
                    <HeartIcon fill={isFavorited ? "red" : "#999"} width={20} height={20} />
                </span>
                <span role="button" onClick={toggleWatchList}>
                    <LaterIcon fill={isWatchListed ? "green" : "#999"} width={20} height={20} />
                </span>
                <div className={css.movieItemTitle}>
                    <h5>{movie.title}</h5>

                    <div className={css.genreLabels}>
                        {genres && movie.genre_ids?.map((genre) => (
                            <span key={genre}>{genres[genre]}</span>
                        ))}
                    </div>
                </div>
                {movie.poster_path && 
                    <LazyImage src={`${IMG_BASE_URL}/w92/${movie.poster_path}`} alt={movie.original_title} />
                }
            </div>
        </div>
    )
}

export default MovieItem