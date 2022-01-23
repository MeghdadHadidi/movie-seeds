import { render } from '@testing-library/react'
import { companies } from "../mocks/mockData"
import MovieCompanies from "./MovieCompanies"

describe('MovieCompanies', () => {
    it('renders correctly', () => {
        const { getByAltText, getByText } = render(<MovieCompanies companies={companies} />)

        expect(getByText('Companies')).toBeInTheDocument()

        companies.forEach(company => {
            expect(getByAltText(company.name)).toBeInTheDocument()
        })
    })
    
    it('renders nothing if list is empty', () => {
        const { container } = render(<MovieCompanies companies={[]} />)

        expect(container.children.length).toBeFalsy()
    })
})