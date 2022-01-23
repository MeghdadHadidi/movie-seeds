import { rest } from 'msw'

export const upcomingSuccessHandler = rest.get('/movie/upcoming', (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json({
            items: []
        })
    )
})