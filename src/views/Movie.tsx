import { useParams, Navigate } from "react-router-dom"
import MovieDetail from "../components/MovieDetail"

type Params = {
    id: string
}

const Movie = () => {
    const { id } = useParams<Params>()
    
    if(!id) return <Navigate to={'/404'} />

    return <MovieDetail movieId={id} />
}

export default Movie