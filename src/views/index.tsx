import { Routes, Route } from "react-router-dom"

// Views
import Home from "./Home"
import Movies from "./Movies"
import Favorites from "./Favorites"
import WatchLater from "./WatchLater"

const Views = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route path="/" element={<Movies />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/watch-later" element={<WatchLater />} />
                <Route path="*" element={<div>
                    <h1>🤪</h1>
                    <p>Nothing found here</p>
                </div>} />
            </Route>
        </Routes>
    )
}

export default Views