import { useParams } from "react-router-dom"
import { Movie } from "../store/types"

import MovieItem from "./MovieItem"

interface Props {
    movies: {
        items: Movie[] | null,
        error?: string | null,
        isLoading?: boolean,
    },
    count?: number
}

const MovieList = ({ movies, count }: Props) => {
    const { error, isLoading, items } = movies;
    const { category } = useParams()

    if(error) {
        return <div>Something happened while fetching the movies :-(</div>
    }

    if(isLoading) {
        return <div>Loading movies...</div>
    }

    if(!items?.length){
        return <div>No items found :-(</div>
    }

    return (
        <div>
            {(category ? items : items?.slice(0, count || 4))?.map((movie, key) => (
                <MovieItem movie={movie} key={key} />
            ))}
        </div>
    )
}

export default MovieList