import { getAllByText, render, RenderResult, waitFor } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"

import MovieLists from './MovieLists'
import { createInitialState, reducer, StoreProvider } from "../store"

const renderWrapper = () => {
    const initialState = createInitialState()

    return render(
        <BrowserRouter>
            <StoreProvider reducer={reducer} initialState={initialState}>
                <MovieLists />
            </StoreProvider>
        </BrowserRouter>
    )
}

describe('MovieLists', () => {

    it('renders all section correctly', async () => {
        const { getByText, findByText } = renderWrapper()
        const callToActionText = getByText('Pick from our choice or find your one')
        expect(callToActionText).toBeInTheDocument()

        const fallbackComponent = getAllByText(callToActionText.parentElement?.parentElement as HTMLElement, 'Loading...')
        expect(fallbackComponent).toHaveLength(3)
        
        
        await waitFor(() => {
            const h4El = findByText('Upcoming')
            expect(h4El).toBeInTheDocument()
        })
    })
})