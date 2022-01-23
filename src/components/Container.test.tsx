import { render } from '@testing-library/react'
import Container from "./Container"

describe('Container', () => {
    it('renders children correctly', () => {
        const MockChildComponent = () => {
            return <div>Mock child</div>
        }
        const { getByText } = render(
            <Container>
                <MockChildComponent />
            </Container>
        )
        expect(getByText('Mock child')).toBeInTheDocument()
    })
})