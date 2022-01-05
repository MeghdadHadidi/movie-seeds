import { ReactNode } from "react"
import css from './MovieListWrapper.module.css'

interface Props {
    children: ReactNode,
    title: string
}

const MovieListWrapper = ({ children, title }: Props) => {
    return (
        <div className={css.movieListWrapper}>
            <h4>{title}</h4>
            {children}
        </div>
    )
}

export default MovieListWrapper