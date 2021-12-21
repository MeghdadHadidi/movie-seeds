import { ReactChild } from 'react'

export interface Movie {

}

export type Reducer = (
    state: StateModel, 
    action: ReducerAction
) => StateModel

export interface StateModel {
    movies: Movie[]
}

export interface ReducerAction {
    type: string;
    payload: unknown;
}

export interface StoreProviderProps {
    children: ReactChild;
    reducer: Reducer;
    initialState: StateModel
}
