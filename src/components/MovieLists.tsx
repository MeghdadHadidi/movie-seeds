import { lazy, Suspense } from "react"
import { useParams } from "react-router-dom"
import CallToAction from "./CallToAction"
import FallbackLoading from "./FallbackLoading"

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
            <CallToAction />
            {movieLists.map(({ component: ListComponent }, key) => {
                return (
                    <Suspense key={key} fallback={<FallbackLoading />}>
                        <ListComponent />
                    </Suspense>
                )
            })}
        </div>
    )
}

export default MovieLists