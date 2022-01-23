import { ReactComponent as LaterIcon } from '../assets/img/later.svg'
import { ReactComponent as HeartIcon } from '../assets/img/heart.svg'

import css from './UserMenu.module.css'
import { useStore } from "../store"
import { useNavigate } from "react-router-dom"

const UserMenu = () => {
    const { favorites, watchList } = useStore()
    const navigate = useNavigate()

    const goToFavorites = () => {
        navigate('/favorites')
    }

    const goToWatchlist = () => {
        navigate('/watch-later')
    }

    return (
        <div className={css.userMenuWrapper}>
            <span role="link" onClick={goToFavorites}>
                <HeartIcon fill="white" width={28} height={28} />
                {favorites.length > 0 && <span>{favorites.length}</span>}
            </span>
            <span role="link" onClick={goToWatchlist}>
                <LaterIcon fill="white" width={28} height={28} />
                {watchList.length > 0 && <span>{watchList.length}</span>}
            </span>
        </div>
    )
}

export default UserMenu