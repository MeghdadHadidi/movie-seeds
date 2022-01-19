import { Cast } from "../store/types"

interface Props {
    cast?: Cast[]
}

const IMG_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL

const MovieCast = ({ cast }: Props) => {
    if(!cast) return null;
    
    return (
        <div>
            {cast?.slice(0, 3).map(cast => (
                <div key={cast.id}>
                    <img src={`${IMG_BASE_URL}/w92${cast.profile_path}`} alt={cast.name} />
                    <div>{cast.name}</div>
                </div>
            ))}
        </div>
    )
}

export default MovieCast