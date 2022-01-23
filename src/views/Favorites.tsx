import MovieList from "../components/MovieList"
import { useStore } from "../store"

const Favorites = () => {
    const { favorites } = useStore()

    return <MovieList count={100} movies={{ items: favorites }} />
}

export default Favorites