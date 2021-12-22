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
            name: 'favorites',
            title: 'Favorites',
            path: '/favorites'
        },
        {
            name: 'watch-later',
            title: 'Watch Later',
            path: '/watch-later'
        }
    ]

    const isActive = (path: string) => {
        return location.pathname === path
    }

    return (
        <ul className={css.navMenu}>
            {links?.map(link => (
                <li className={isActive(link.path) ? css.activeItem : ''}>
                    <Link to={link.path} title={link.title}>{link.title}</Link>
                </li>
            ))}
        </ul>
    )
}

export default NavMenu