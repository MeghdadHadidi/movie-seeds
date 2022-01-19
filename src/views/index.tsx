import { Routes, Route } from "react-router-dom"

// Views
import Layout from "./Layout"
import Movies from "./Movies"
import Favorites from "./Favorites"
import WatchLater from "./WatchLater"
import Movie from "./Movie"

const Views = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Movies />} />
                <Route path="/:category" element={<Movies />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/watch-later" element={<WatchLater />} />
                <Route path="/movie/:id" element={<Movie />} />
                <Route path="*" element={<div>
                    <h1>🤪</h1>
                    <p>Nothing found here</p>
                </div>} />
            </Route>
        </Routes>
    )
}

export default Views