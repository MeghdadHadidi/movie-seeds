import { ReactComponent as LaterIcon } from '../assets/img/later.svg'
import { ReactComponent as HeartIcon } from '../assets/img/heart.svg'

import css from './UserMenu.module.css'
import { useStore } from "../store"

const UserMenu = () => {
    const { favorites, watchList } = useStore()

    const favoriteItemsLength = Object.keys(favorites).length
    const watchListItemsLength = Object.keys(watchList).length

    return (
        <div className={css.userMenuWrapper}>
            <span>
                <HeartIcon fill="white" width={28} height={28} />
                {favoriteItemsLength > 0 && <span>{favoriteItemsLength}</span>}
            </span>
            <span>
                <LaterIcon fill="white" width={28} height={28} />
                {watchListItemsLength > 0 && <span>{watchListItemsLength}</span>}
            </span>
        </div>
    )
}

export default UserMenu