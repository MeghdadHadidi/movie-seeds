import { Movie, ReducerAction, StateModel } from "./types"

export default function(state: StateModel, action: ReducerAction) {
    switch (action.type) {
        case 'SET_MOVIES':
            state.movies = action.payload as Movie[]
            break;
        default:
            return state
    }
}