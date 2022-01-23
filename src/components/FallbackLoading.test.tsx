import { render } from '@testing-library/react'
import FallbackLoading from "./FallbackLoading"

describe('FallbackLoading', () => {
    it('renders correctly', () => {
        const { getByText } = render(<FallbackLoading />)
        expect(getByText('Loading...')).toBeInTheDocument()
    })
})