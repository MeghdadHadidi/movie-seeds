import useMovieDetail from "../hooks/useMovieDetail"

import css from './MovieDetail.module.css'
import MovieDetailSummary from "./MovieDetailSummary"

interface Props {
    movieId: string;
}

const MovieDetail = ({ movieId }: Props) => {
    const { movie, genres } = useMovieDetail(movieId)

    if(!movieId || !movie) return null;
    
    return (
        <div className={css.detailWrapper}>
            <MovieDetailSummary movie={movie} genres={genres} />
        </div>
    )
}

export default MovieDetail