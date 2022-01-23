import MovieList from "../components/MovieList"
import { useStore } from "../store"

const WatchLater = () => {
    const { watchList } = useStore()

    return <MovieList count={100} movies={{ items: watchList }} />
}

export default WatchLater