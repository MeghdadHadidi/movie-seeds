import { render } from '@testing-library/react'
import { cast } from "../mocks/mockData"
import MovieCredits from "./MovieCredits"

describe('MovieCredits', () => {
    it('renders correctly', () => {
        const { getByText } = render(<MovieCredits cast={cast} />)
        expect(getByText('Cast')).toBeInTheDocument()
    })

    it('renders all items if no count passed', () => {
        const { getAllByRole } = render(<MovieCredits cast={cast} />)

        expect(getAllByRole('gridcell')).toHaveLength(cast.length)
    })

    it('filters items based on value of the count prop', () => {
        const { getByAltText, getByText } = render(<MovieCredits cast={cast} />)

        cast.forEach(person => {
            expect(getByAltText(person.name)).toBeInTheDocument()
            expect(getByText(person.name)).toBeInTheDocument()
        })
    })
    
    it('renders nothing if list is empty', () => {
        const { container } = render(<MovieCredits />)
        expect(container.children.length).toBeFalsy()
    })
})