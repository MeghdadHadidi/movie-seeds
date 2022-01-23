import { ReactNode } from "react"
import { Link, useLocation } from "react-router-dom"
import css from './MovieListWrapper.module.css'

interface Props {
    children: ReactNode,
    title: string,
    path?: string
}

const MovieListWrapper = ({ children, title, path }: Props) => {
    const { pathname } = useLocation()
    
    const showSeeAll = path && pathname !== path

    return (
        <div className={css.movieListWrapper}>
            <header>
                <h4>{title}</h4>
                {showSeeAll && <Link to={path}>See all</Link>}
            </header>
            {children}
        </div>
    )
}

export default MovieListWrapper