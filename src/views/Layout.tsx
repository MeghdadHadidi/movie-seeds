import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return <div>
        <ul>
            <Link to="/" title="movies">Movies</Link>
            <Link to="/favorites" title="favorites">favorites</Link>
            <Link to="/watch-later" title="watch-later">watch-later</Link>
        </ul>
        <Outlet />
    </div>
}

export default Layout