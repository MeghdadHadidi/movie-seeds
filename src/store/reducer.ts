import { Movie, ReducerAction, StateModel, Config } from "./types"

const reducer = (state: StateModel, action: ReducerAction) => {
    switch (action.type) {
        case 'SET_MOVIES':
            state.movies.items = action.payload as Movie[]
            state.movies.isLoading = false
            break
        case 'SET_MOVIES_IS_LOADING':
            state.movies.isLoading = !!action.payload
            break
        case 'SET_CONFIG_IS_LOADING':
            state.config.isLoading = !!action.payload
            break
        case 'SET_CONFIG':
            state.config.items = action.payload as Config
            state.config.isLoading = false
            break
        case 'TOGGLE_MOVIE_FAVORITES':
            if(state.favorites[(action.payload as Movie)?.id]){
                delete state.favorites[(action.payload as Movie)?.id]
            } else {
                state.favorites[(action.payload as Movie)?.id] = action.payload as Movie
            }
            break
        case 'TOGGLE_MOVIE_WATCH_LIST':
            if(state.watchList[(action.payload as Movie)?.id]){
                delete state.watchList[(action.payload as Movie)?.id]
            } else {
                state.watchList[(action.payload as Movie)?.id] = action.payload as Movie
            }
            break
        default:
            break
    }

    return state;
}

export default reducer