import { useStore } from "../store"

import MovieItem from "./MovieItem"

const MovieList = () => {
    const { movies } = useStore()
    
    return (
        <>
            {movies?.items?.map((movie, key) => (
                <MovieItem movie={movie} key={key} />
            ))}
        </>
    )
}

export default MovieList