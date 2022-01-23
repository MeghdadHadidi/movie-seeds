import useMovieDetail from "../hooks/useMovieDetail"
import Container from "./Container"

import MovieDetailSummary from "./MovieDetailSummary"

interface Props {
    movieId: string;
}

const MovieDetail = ({ movieId }: Props) => {
    const { movie, genres } = useMovieDetail(movieId)

    if(!movieId || !movie) return null;
    
    return (
        <Container>
            <MovieDetailSummary movie={movie} genres={genres} />
        </Container>
    )
}

export default MovieDetail