import { ReactChild } from 'react'

export interface Video {
    id: string,
    iso_639_1: string,
    iso_3166_1: string,
    key: string,
    name: string,
    official: true
    published_at: string,
    site: string,
    size: number,
    type: string,
}

export interface Cast {
    adult: boolean,
    cast_id: number,
    character: string,
    credit_id: string,
    gender: number,
    id: number,
    known_for_department: string,
    name: string,
    order: number,
    original_name: string,
    popularity: number,
    profile_path: string,
}

export interface Company {
    id: number,
    logo_path?: string,
    name: string,
    origin_country: ""
}

export interface Country {
    iso_3166_1: string,
    name: string
}

export interface Language {
    english_name: string,
    iso_639_1: string,
    name: string
}
export interface Movie {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection?: string,
    budget: number,
    genres: Genre[],
    genre_ids?: string[],
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: Company[],
    production_countries: Country[],
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: Language[],
    status: string,
    tagline: string,
    title: string,
    video: boolean
    vote_average: number,
    vote_count: number,
    videos?: {
        results: Video[]
    },
    credits?: {
        cast?: Cast[],
        crew?: {}
    }
}

export interface Genre {
    id: number,
    name: string
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
    favorites: Movie[],
    watchList: Movie[],
    movies: {
        [key: string]: Movie
    },
    search: {
        items: Movie[] | null,
        error: string | null,
        isLoading: boolean
    },
    topRatedMovies: {
        items: Movie[] | null,
        error: string | null,
        isLoading: boolean
    },
    popularMovies: {
        items: Movie[] | null,
        error: string | null,
        isLoading: boolean
    },
    upcomingMovies: {
        items: Movie[] | null,
        error: string | null,
        isLoading: boolean
    },
    config: {
        items: Config | null,
        error: string | null,
        isLoading: boolean
    },
    genres: {
        items: {
            [key: string]: string
        } | null,
        error: string | null,
        isLoading: boolean
    },
    averageColor?: string
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

export const ActionTypes = {
    SET_SEARCH_RESULT: 'SET_SEARCH_RESULT',
    SET_SEARCH_LOADING: 'SET_SEARCH_LOADING',
    SET_SEARCH_ERROR: 'SET_SEARCH_ERROR',
    SET_TOPRATE_MOVIES: 'SET_TOPRATE_MOVIES',
    SET_TOPRATED_IS_LOADING: 'SET_TOPRATED_IS_LOADING',
    SET_TOPRATED_ERROR: 'SET_TOPRATED_ERROR',
    SET_POPULAR_MOVIES: 'SET_POPULAR_MOVIES',
    SET_POPULAR_IS_LOADING: 'SET_POPULAR_IS_LOADING',
    SET_POPULAR_ERROR: 'SET_POPULAR_ERROR',
    SET_UPCOMING_MOVIES: 'SET_UPCOMING_MOVIES',
    SET_UPCOMING_IS_LOADING: 'SET_UPCOMING_IS_LOADING',
    SET_UPCOMING_ERROR: 'SET_UPCOMING_ERROR',
    SET_CONFIG_IS_LOADING: 'SET_CONFIG_IS_LOADING',
    SET_CONFIG_ERROR: 'SET_CONFIG_ERROR',
    SET_CONFIG: 'SET_CONFIG',
    SET_GENRES_IS_LOADING: 'SET_GENRES_IS_LOADING',
    SET_GENRES_ERROR: 'SET_GENRES_ERROR',
    SET_GENRES: 'SET_GENRES',
    TOGGLE_MOVIE_FAVORITES: 'TOGGLE_MOVIE_FAVORITES',
    TOGGLE_MOVIE_WATCH_LIST: 'TOGGLE_MOVIE_WATCH_LIST',
    SET_MOVIES: 'SET_MOVIES',
    SET_AVERAGE_COLOR: 'SET_AVERAGE_COLOR'
}