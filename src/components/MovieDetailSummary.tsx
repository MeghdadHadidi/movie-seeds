import { Movie } from "../store/types"
import MovieCompanies from "./MovieCompanies"
import MovieCast from "./MovieCredits"

import css from './MovieDetailSummary.module.css'
import MovieDetailVideo from "./MovieDetailVideo"
import MovieSideDetail from "./MovieSideDetail"

interface Props {
    movie: Movie,
    genres: string[]
}

const IMG_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL

const MovieDetailSummary = ({ movie, genres }: Props) => {
    if(!movie) return null;

    const productionCompanies = movie?.production_companies?.filter(company => company.logo_path)

    return (
        <div className={css.detailSummaryWrapper}>
            <div className={css.detailGallery}>
                {movie.videos ? 
                    <MovieDetailVideo videos={movie.videos.results} /> : 
                    <img src={`${IMG_BASE_URL}/w500${movie.poster_path}`} alt={movie.original_title} />
                }
            </div>
            <div className={css.detailText}>
                <div>
                    <h1>
                        {movie.title}
                        {movie.vote_average && <span className={css.averageVote}>{movie.vote_average}</span>}
                    </h1>
                    <p>{movie.overview}</p>

                    <MovieCast cast={movie.credits?.cast} />
                    <MovieCompanies companies={productionCompanies} />
                </div>
                <MovieSideDetail movie={movie} genres={genres} />
            </div>
        </div>
    )
}

export default MovieDetailSummary