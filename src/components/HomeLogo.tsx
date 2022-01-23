import { ReactComponent as Logo } from '../assets/img/logo.svg'

import css from './HomeLogo.module.css'

const HomeLogo = () => {
    return (
        <div className={css.logoWrapper}>
            <Logo aria-label="logo" height={64} fill="#ffffff" />
            <h1>Movie Seeds</h1>
        </div>
    )
}

export default HomeLogo