import { Outlet } from "react-router-dom"
import TopNavigation from "../components/TopNavigation"
import { useStore } from "../store"

import css from './Layout.module.css'

const DEFAULT_SECOND_GRADIENT_COLOR = '#04619f'

const Layout = () => {
    const { averageColor } = useStore()

    const getGradientStyle = () => {
        return {
            backgroundImage: `linear-gradient(147deg, #000000 0%, ${averageColor || DEFAULT_SECOND_GRADIENT_COLOR} 75%)`
        }
    }

    return (
        <div className={css.wrapper}>
            <div className={averageColor ? `${css.backdrop} ${css.backdropActive}` : css.backdrop} style={getGradientStyle()}></div>
            <TopNavigation />
            <Outlet />
        </div>
    )
}

export default Layout