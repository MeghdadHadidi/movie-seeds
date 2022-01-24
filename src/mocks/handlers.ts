import { movieDetailSuccessHandler, popularSuccessHandler, topRatedSuccessHandler, upcomingSuccessHandler } from "./movies"

export const handlers = [
    upcomingSuccessHandler,
    popularSuccessHandler,
    topRatedSuccessHandler,
    movieDetailSuccessHandler
]