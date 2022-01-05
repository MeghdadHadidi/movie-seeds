import useTopRatedMovies from "../hooks/useTopRatedMovies"
import { useStore } from "../store"
import MovieList from "./MovieList"
import MovieListWrapper from "./MovieListWrapper"

const TopRatedMovies = () => {
    const { topRatedMovies } = useStore()
    useTopRatedMovies()

    return (
        <MovieListWrapper title="Top Rated">
            <MovieList movies={topRatedMovies} />
        </MovieListWrapper>
    )
}

export default TopRatedMovies