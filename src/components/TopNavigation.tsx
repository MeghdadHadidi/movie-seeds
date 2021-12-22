import NavMenu from "./NavMenu"
import UserMenu from "./UserMenu"

import css from './TopNavigation.module.css'

const TopNavigation = () => {
    return (
        <div className={css.topNav}>
            <NavMenu />
            <UserMenu />
        </div>
    )
}

export default TopNavigation