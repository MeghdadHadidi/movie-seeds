import { useEffect, useMemo, useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import TopNavigation from "../components/TopNavigation"
import { useStore } from "../store"

import css from './Layout.module.css'

const DEFAULT_SECOND_GRADIENT_COLOR = '#04619f'

const Layout = () => {
    const { averageColor } = useStore()
    const { pathname } = useLocation()
    const [gradientStyle, setGradientStyle] = useState('')

    const backdropActive = pathname.includes('/movie')

    useEffect(() => {
        if(backdropActive) {
            setGradientStyle(`linear-gradient(147deg, #000000 0%, ${averageColor || DEFAULT_SECOND_GRADIENT_COLOR} 75%)`)
        }
    }, [averageColor])

    return (
        <div className={css.wrapper}>
            <div className={backdropActive ? `${css.backdrop} ${css.backdropActive}` : css.backdrop} style={{ backgroundImage: gradientStyle }}></div>
            <TopNavigation />
            <Outlet />
        </div>
    )
}

export default Layout