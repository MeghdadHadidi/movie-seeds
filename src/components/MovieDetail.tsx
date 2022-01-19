import useMovieDetail from "../hooks/useMovieDetail"
import MovieCast from "./MovieCredits"

import css from './MovieDetail.module.css'
import MovieDetailVideo from "./MovieDetailVideo"

interface Props {
    movieId: string;
}

const MovieDetail = ({ movieId }: Props) => {
    const { movie, genres } = useMovieDetail(movieId)

    if(!movieId || !movie) return null;
    
    return (
        <div className={css.detailWrapper}>
            <div className={css.detailGallery}>
                {movie.videos ? 
                    <MovieDetailVideo videos={movie.videos.results} /> : 
                    <img src={movie.poster_path || ''} alt={movie.original_title} />
                }
            </div>
            <div className={css.detailGalleryOverlay}>
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>

                <span title={movie.original_title}>{movie.original_language}</span>

                <div>Released: {movie.release_date}</div>
                {genres && <div>Genres: {genres.map(genre => (
                    <span key={genre}>{genre}</span>
                ))}</div>}

                <MovieCast cast={movie.credits?.cast} />
            </div>
        </div>
    )
}

export default MovieDetail