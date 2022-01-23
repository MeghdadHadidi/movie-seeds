import Container from "../components/Container"
import SearchBox from "../components/SearchBox"
import MovieLists from "../components/MovieLists"
import HomeLogo from "../components/HomeLogo"

const Movies = () => {
    return (
        <Container>
            <HomeLogo />
            <SearchBox />
            <MovieLists />
        </Container>
    )
}

export default Movies