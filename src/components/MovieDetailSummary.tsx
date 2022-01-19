import { Movie } from "../store/types"
import MovieCompanies from "./MovieCompanies"
import MovieCast from "./MovieCredits"

import css from './MovieDetailSummary.module.css'
import MovieDetailVideo from "./MovieDetailVideo"

interface Props {
    movie: Movie,
    genres: string[]
}

const IMG_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL

const MovieDetailSummary = ({ movie, genres }: Props) => {
    const revenue = new Intl.NumberFormat(movie.production_countries?.[0]?.iso_3166_1, { style: 'currency', currency: 'USD', maximumSignificantDigits: 3 }).format(Number(movie.revenue || 0))

    const productionCompanies = movie?.production_companies?.filter(company => company.logo_path)

    return (
        <div className={css.detailSummaryWrapper}>
            <div>
                <div className={css.detailGallery}>
                    {movie.videos ? 
                        <MovieDetailVideo videos={movie.videos.results} /> : 
                        <img src={`${IMG_BASE_URL}/w500${movie.poster_path}`} alt={movie.original_title} />
                    }
                </div>

                <h1>
                    {movie.title}
                    {movie.vote_average && <span className={css.averageVote}>{movie.vote_average}</span>}
                </h1>
                <p>{movie.overview}</p>

                <MovieCast cast={movie.credits?.cast} />
                <MovieCompanies companies={productionCompanies} />
            </div>
            <div className={css.sideDetails}>
                <div className={css.spokenLanguages}>
                    <strong>Spoken languages</strong>
                    {movie.spoken_languages.map(lang => (
                        <span key={lang.english_name} title={lang.name}>{lang.english_name}</span>
                    ))}
                </div>

                <div>
                    <strong>Released</strong>
                    {movie.release_date}
                </div>

                {genres && 
                    <div>
                        <strong>Genres</strong> 
                        {genres.map(genre => (
                            <span key={genre}>{genre}</span>
                        ))}
                    </div>
                }

                <div>
                    <strong>Revenue</strong>
                    {revenue}
                </div>

                <div>
                    <strong>Countries</strong>
                    {movie.production_countries.map(country => (
                        <span>{country.name}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieDetailSummary