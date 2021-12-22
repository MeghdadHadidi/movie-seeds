import { ReactComponent as LaterIcon } from '../assets/img/later.svg'
import { ReactComponent as HeartIcon } from '../assets/img/heart.svg'

import css from './UserMenu.module.css'

const UserMenu = () => {
    return (
        <div className={css.userMenuWrapper}>
            <span>
                <HeartIcon width={28} height={28} />
            </span>
            <span>
                <LaterIcon width={28} height={28} />
            </span>
        </div>
    )
}

export default UserMenu