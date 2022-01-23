import { rest } from 'msw'
import { movieList } from "./mockData"

export const upcomingSuccessHandler = rest.get(/\/movie\/upcoming/, (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json({
            page: 1,
            results: movieList
        })
    )
})

export const popularSuccessHandler = rest.get(/\/movie\/popular/, (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json({
            page: 1,
            results: movieList
        })
    )
})

export const topRatedSuccessHandler = rest.get(/\/movie\/top_rated/, (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json({
            page: 1,
            results: movieList
        })
    )
})