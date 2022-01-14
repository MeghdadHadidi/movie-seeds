import { Movie, ReducerAction, StateModel, Config, Genre, ActionTypes } from "./types"

const reducer = (state: StateModel, action: ReducerAction) => {
    switch (action.type) {
        case ActionTypes.SET_TOPRATE_MOVIES:
            state.topRatedMovies.items = action.payload as Movie[]
            state.topRatedMovies.isLoading = false
            break
        case ActionTypes.SET_TOPRATED_ERROR:
            state.topRatedMovies.items = null
            state.topRatedMovies.isLoading = false
            state.topRatedMovies.error = String(action.payload)
            break
        case ActionTypes.SET_TOPRATED_IS_LOADING:
            state.topRatedMovies.isLoading = !!action.payload
            break
        case ActionTypes.SET_SEARCH_RESULT:
            state.search.items = action.payload as Movie[]
            state.search.isLoading = false
            break
        case ActionTypes.SET_SEARCH_ERROR:
            state.search.items = null
            state.search.isLoading = false
            state.search.error = String(action.payload)
            break
        case ActionTypes.SET_SEARCH_LOADING:
            state.search.isLoading = !!action.payload
            break
        case ActionTypes.SET_POPULAR_MOVIES:
            state.popularMovies.items = action.payload as Movie[]
            state.popularMovies.isLoading = false
            break
        case ActionTypes.SET_POPULAR_ERROR:
            state.popularMovies.items = null
            state.popularMovies.isLoading = false
            state.popularMovies.error = String(action.payload)
            break
        case ActionTypes.SET_POPULAR_IS_LOADING:
            state.popularMovies.isLoading = !!action.payload
            break
        case ActionTypes.SET_UPCOMING_MOVIES:
            state.upcomingMovies.items = action.payload as Movie[]
            state.upcomingMovies.isLoading = false
            break
        case ActionTypes.SET_UPCOMING_ERROR:
            state.upcomingMovies.items = null
            state.upcomingMovies.isLoading = false
            state.upcomingMovies.error = String(action.payload)
            break
        case ActionTypes.SET_UPCOMING_IS_LOADING:
            state.upcomingMovies.isLoading = !!action.payload
            break
        case ActionTypes.SET_CONFIG_IS_LOADING:
            state.config.isLoading = !!action.payload
            break
        case ActionTypes.SET_CONFIG:
            state.config.items = action.payload as Config
            state.config.isLoading = false
            break
        case ActionTypes.SET_CONFIG_ERROR:
            state.config.items = null
            state.config.isLoading = false
            state.config.error = String(action.payload)
            break
        case ActionTypes.SET_GENRES_IS_LOADING:
            state.config.isLoading = !!action.payload
            break
        case ActionTypes.SET_GENRES:
            const items: {[key: number]: string} = {};
            (action.payload as Genre[]).forEach((item: Genre) => {
                items[item.id] = item.name
            })
            state.genres.items = items
            state.genres.isLoading = false
            break
        case ActionTypes.SET_GENRES_ERROR:
            state.genres.items = null
            state.genres.isLoading = false
            state.genres.error = String(action.payload)
            break
        case ActionTypes.TOGGLE_MOVIE_FAVORITES:
            if(state.favorites[(action.payload as Movie)?.id]){
                delete state.favorites[(action.payload as Movie)?.id]
            } else {
                state.favorites[(action.payload as Movie)?.id] = action.payload as Movie
            }
            break
        case ActionTypes.TOGGLE_MOVIE_WATCH_LIST:
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