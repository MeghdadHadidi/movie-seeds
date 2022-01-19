import { Cast } from "../store/types"

import css from './MovieCredit.module.css'

interface Props {
    cast?: Cast[]
}

const IMG_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL

const MovieCast = ({ cast }: Props) => {
    if(!cast) return null;
    
    return (
        <div className={css.castWrapper}>
            <h3>Cast</h3>
            <ul>
                {cast?.slice(0, 10).map(cast => (
                    <li key={cast.id}>
                        <div>
                            <img src={`${IMG_BASE_URL}/w92${cast.profile_path}`} alt={cast.name} />
                        </div>
                        <span>{cast.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MovieCast