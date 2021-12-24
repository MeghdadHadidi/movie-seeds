import { StateModel } from "./types"

export default function createInitialState(): StateModel {
    return {
        favorites: {},
        watchList: {},
        movies: {
            items: null,
            isLoading: false
        },
        config: {
            items: null,
            isLoading: false
        }
    }
}