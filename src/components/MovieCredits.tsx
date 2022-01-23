import { Cast } from "../store/types"

import css from './MovieCredit.module.css'

import manAvatar from '../assets/img/man-avatar.jpg'
import womanAvatar from '../assets/img/woman-avatar.jpg'
import unisexAvatar from '../assets/img/unisex-avatar.jpg'

interface Props {
    cast?: Cast[]
}

const IMG_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL

const MovieCast = ({ cast }: Props) => {
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
            <ul>
                {cast?.slice(0, 10).map(cast => (
                    <li key={cast.id}>
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