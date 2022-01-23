import { render } from '@testing-library/react'
import CallToAction from "./CallToAction"

describe('CallToAction', () => {
    it('renders correctly', () => {
        const { getByText } = render(<CallToAction />)
        expect(getByText('Pick from our choice or find your one')).toBeInTheDocument()
    })
})