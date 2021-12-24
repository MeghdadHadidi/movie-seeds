import MovieList from "./MovieList"
import css from './MovieWrapper.module.css'
import useMovieWrapper from "./useMovieWrapper"

const MovieWrapper = () => {
    const { isLoading, error } = useMovieWrapper()

    if(error) {
        return <div>Something happened while fetching the movies :-(</div>
    }

    if(isLoading) {
        return <div>Loading movies...</div>
    }
    
    return (
        <div className={css.movieListWrapper}>
            <MovieList />
        </div>
    )
}

export default MovieWrapper