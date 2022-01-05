import { Link, useLocation } from "react-router-dom"
import css from './NavMenu.module.css'

const NavMenu = () => {
    const location = useLocation()

    const links = [
        {
            name: 'movies',
            title: 'Movies',
            path: '/'
        },
        {
            name: 'top-rated',
            title: 'Top Rated',
            path: '/top-rated'
        },
        {
            name: 'popular',
            title: 'Popular',
            path: '/popular'
        },
        {
            name: 'upcoming',
            title: 'Upcoming',
            path: '/upcoming'
        }
    ]

    const isActive = (path: string) => {
        return location.pathname === path
    }

    return (
        <ul className={css.navMenu}>
            {links?.map((link, key) => (
                <li key={key} className={isActive(link.path) ? css.activeItem : ''}>
                    <Link to={link.path} title={link.title}>{link.title}</Link>
                </li>
            ))}
        </ul>
    )
}

export default NavMenu