import { Link, useLocation } from "react-router-dom"
import css from './NavMenu.module.css'

type LinkItem = {
    name: string,
    title: string,
    path: string,
    showOnMobile?: boolean
}

const NavMenu = () => {
    const location = useLocation()

    const links: LinkItem[] = [
        {
            name: 'home',
            title: 'Home',
            path: '/',
            showOnMobile: true
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

    const getItemClassName = (link: LinkItem) => {
        let className = isActive(link.path) ? css.activeItem : ''
        if(link.showOnMobile) {
            className += ` ${css.showOnMobile}`
        }
        return className
    }

    return (
        <>
            <ul className={css.navMenu}>
                {links?.map((link, key) => (
                    <li key={key} className={getItemClassName(link)}>
                        <Link to={link.path} title={link.title}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default NavMenu