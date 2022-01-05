import { lazy, Suspense } from "react"
import { useParams } from "react-router-dom"

const MovieLists = () => {
    const { category } = useParams()

    const movieLists = [
        {
            name: 'top-rated',
            component: lazy(() => import('./TopRatedMovies'))
        },
        {
            name: 'popular',
            component: lazy(() => import('./PopularMovies'))
        },
        {
            name: 'upcoming',
            component: lazy(() => import('./UpcomingMovies'))
        }
    ].filter(({ name }) => !category || name === category)

    return (
        <div>
            {movieLists.map(({ component: ListComponent }, key) => {
                return (
                    <Suspense key={key} fallback={<div>Loading...</div>}>
                        <ListComponent />
                    </Suspense>
                )
            })}
        </div>
    )
}

export default MovieLists