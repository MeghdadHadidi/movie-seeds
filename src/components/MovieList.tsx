import { useParams } from "react-router-dom"
import { Movie } from "../store/types"

import MovieItem from "./MovieItem"

interface Props {
    movies: {
        items: Movie[] | null,
        error: string | null,
        isLoading: boolean
    }
}

const MovieList = ({ movies }: Props) => {
    const { error, isLoading, items } = movies;
    const { category } = useParams()

    if(error) {
        return <div>Something happened while fetching the movies :-(</div>
    }

    if(isLoading) {
        return <div>Loading movies...</div>
    }

    return (
        <div>
            {(category ? items : items?.slice(0, 3))?.map((movie, key) => (
                <MovieItem movie={movie} key={key} />
            ))}
        </div>
    )
}

export default MovieList