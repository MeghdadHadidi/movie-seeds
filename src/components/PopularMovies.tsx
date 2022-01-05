import usePopularMovies from "../hooks/usePopularMovies"
import { useStore } from "../store"
import MovieList from "./MovieList"
import MovieListWrapper from "./MovieListWrapper"

const PopularMovies = () => {
    const { popularMovies } = useStore()
    usePopularMovies()

    return (
        <MovieListWrapper title="Popular">
            <MovieList movies={popularMovies} />
        </MovieListWrapper>
    )
}

export default PopularMovies