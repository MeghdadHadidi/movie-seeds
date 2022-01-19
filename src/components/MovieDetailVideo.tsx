import { Video } from "../store/types"

import css from './MovieDetailVideo.module.css'

interface Props {
    videos?: Video[]
}

const MovieDetailVideo = ({ videos }: Props) => {
    const video = videos?.find(video => video.site === 'YouTube')

    if(!video) return null;

    return (
        <div className={css.videoWrapper}>
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${video?.key}?autoplay=1&controls=0&loop=1`}
                frameBorder="0"
                allow="autoplay; encrypted-media; gyroscope"
                allowFullScreen
                title={video.name}
            />
        </div>
    )
}

export default MovieDetailVideo