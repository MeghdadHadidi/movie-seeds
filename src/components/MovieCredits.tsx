import { Cast } from "../store/types"

import css from './MovieCredit.module.css'

import manAvatar from '../assets/img/man-avatar.jpg'
import womanAvatar from '../assets/img/woman-avatar.jpg'
import unisexAvatar from '../assets/img/unisex-avatar.jpg'

interface Props {
    cast?: Cast[],
    count?: number
}

const IMG_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL

const MovieCast = ({ cast, count }: Props) => {
    if(!cast) return null;

    const getAvatar = (cast: Cast) => {
        if(cast.profile_path) return `${IMG_BASE_URL}/w92${cast.profile_path}`;

        switch (cast.gender) {
            case 1:
                return womanAvatar
            case 2:
                return manAvatar
            default:
                return unisexAvatar
        }
    }
    
    return (
        <div className={css.castWrapper}>
            <h3>Cast</h3>
            <ul role="grid">
                {cast?.slice(0, count || Number.MAX_SAFE_INTEGER).map(cast => (
                    <li key={cast.id} role="gridcell">
                        <picture>
                            <img src={getAvatar(cast)} alt={cast.name} />
                        </picture>
                        <span>{cast.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MovieCast