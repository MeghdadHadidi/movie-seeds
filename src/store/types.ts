import { ReactChild } from 'react'

export interface Movie {
    poster_path: string | null,
    adult: boolean,
    overview: string,
    release_date: string,
    genre_ids: number[],
    id: number,
    original_title: string,
    original_language: string,
    title: string,
    backdrop_path: string | null,
    popularity: number,
    vote_count: number,
    video: boolean,
    vote_average: number,
}

export type Reducer = (
    state: StateModel, 
    action: ReducerAction
) => StateModel

export interface Config {
    images: {
        base_url: string,
        secure_base_url: string,
        backdrop_sizes: string[],
        logo_sizes: string[],
        poster_sizes: string[],
        profile_sizes: string[],
        still_sizes: string[]
    },
    change_keys: string[]
}

export interface StateModel {
    favorites: {
        [key: string]: Movie
    },
    watchList: {
        [key: string]: Movie
    },
    movies: {
        items: Movie[] | null,
        isLoading: boolean
    },
    config: {
        items: Config | null,
        isLoading: boolean
    }
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

export interface AddToFavoriteRequest {
    media_type: string,
    media_id: string,
    favorite: boolean
}