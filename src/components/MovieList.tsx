import { useStore } from "../store"
import useMovieList from "./useMovieList"

import { ReactComponent as HeartIcon } from '../assets/img/heart.svg'
import { ReactComponent as LaterIcon } from '../assets/img/later.svg'

import css from './MovieList.module.css'

const IMG_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL

const MovieList = () => {
    const { movies, favorites, watchList } = useStore()
    const { isLoading, error, toggleFavorite, toggleWatchList } = useMovieList()

    if(error) {
        return <div>Something happened while fetching the movies :-(</div>
    }

    if(isLoading) {
        return <div>Loading movies...</div>
    }
    
    return (
        <div className={css.movieListWrapper}>
            {movies?.items?.map((movie, key) => (
                <div key={key}>
                    <div className={css.movieItemTitle}>{movie.title}</div>
                    <HeartIcon fill={favorites[movie.id] ? "red" : "#ccc"} onClick={() => toggleFavorite(movie)} width={20} height={20} />
                    <LaterIcon fill={watchList[movie.id] ? "green" : "#ccc"} onClick={() => toggleWatchList(movie)} width={20} height={20} />
                    {movie.poster_path && 
                        <img src={`${IMG_BASE_URL}/w92/${movie.poster_path}`} alt={movie.original_title} />
                    }
                </div>
            ))}
        </div>
    )
}

export default MovieList