import { StateModel } from "./types"

export default function createInitialState(): StateModel {
    return {
        favorites: {},
        watchList: {},
        movies: {
            items: null,
            error: null,
            isLoading: false
        },
        topRatedMovies: {
            items: null,
            error: null,
            isLoading: false
        },
        popularMovies: {
            items: null,
            error: null,
            isLoading: false
        },
        upcomingMovies: {
            items: null,
            error: null,
            isLoading: false
        },
        config: {
            items: null,
            error: null,
            isLoading: false
        },
        genres: {
            items: null,
            error: null,
            isLoading: false
        }
    }
}