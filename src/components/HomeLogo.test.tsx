import { render } from '@testing-library/react'
import HomeLogo from "./HomeLogo"

describe('HomeLogo', () => {
    it('renders correctly', () => {
        const { getByText, getByLabelText } = render(<HomeLogo />)

        expect(getByText('Movie Seeds')).toBeInTheDocument()
        expect(getByLabelText('logo')).toBeInTheDocument()
    })
})