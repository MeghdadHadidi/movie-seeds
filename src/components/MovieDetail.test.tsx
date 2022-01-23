import { render } from '@testing-library/react'
import { movieDetail } from "../mocks/mockData"
import MovieDetail from "./MovieDetail"

describe('MovieDetail', () => {
    it('renders correctly', () => {
        const { getByText } = render(<MovieDetail movieId="123123" />)
        expect(getByText(movieDetail.original_title)).toBeInTheDocument()
    })

    
})