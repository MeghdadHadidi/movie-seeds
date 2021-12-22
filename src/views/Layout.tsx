import { Outlet } from "react-router-dom"
import TopNavigation from "../components/TopNavigation"

import css from './Layout.module.css'

const Layout = () => {
    return (
        <div className={css.wrapper}>
            <TopNavigation />
            <Outlet />
        </div>
    )
}

export default Layout