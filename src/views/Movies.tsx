import Container from "../components/Container"
import SearchBox from "../components/SearchBox"
import MovieLists from "../components/MovieLists"

const Movies = () => {
    return (
        <Container>
            <SearchBox />
            <MovieLists />
        </Container>
    )
}

export default Movies