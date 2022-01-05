import useUpcomingMovies from "../hooks/useUpcomingMovies"
import { useStore } from "../store"
import MovieList from "./MovieList"
import MovieListWrapper from "./MovieListWrapper"

const UpcomingMovies = () => {
    const { upcomingMovies } = useStore()
    useUpcomingMovies()

    return (
        <MovieListWrapper title="Upcoming">
            <MovieList movies={upcomingMovies} />
        </MovieListWrapper>
    )
}

export default UpcomingMovies