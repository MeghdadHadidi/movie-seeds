import { Movie } from "../store/types"

import css from './MovieSideDetail.module.css'

interface Props {
    movie: Movie,
    genres: string[]
}

const MovieSideDetail = ({ movie, genres }: Props) => {
    const revenue = new Intl.NumberFormat(movie.production_countries?.[0]?.iso_3166_1, { style: 'currency', currency: 'USD', maximumSignificantDigits: 3 }).format(Number(movie.revenue || 0))

    return (
        <div className={css.sideDetails}>
            {movie.spoken_languages && <div>
                <strong>Spoken languages</strong>
                {movie.spoken_languages.map(lang => (
                    <span key={lang.english_name} title={lang.name}>{lang.english_name}</span>
                ))}
            </div>}

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

            {movie.production_countries && <div>
                <strong>Countries</strong>
                {movie.production_countries.map(country => (
                    <span key={country.iso_3166_1}>{country.name}</span>
                ))}
            </div>}
        </div>
    )
}

export default MovieSideDetail