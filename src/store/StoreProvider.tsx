import produce from 'immer'
import { StateModel, StoreProviderProps } from "./types"
import { createContext, useContext, useReducer, Dispatch, useEffect } from "react"


const storeContext = createContext<StateModel>({} as StateModel)
const dispatchContext = createContext<Dispatch<any>>(() => {})

export const StoreProvider = ({ children, reducer, initialState }: StoreProviderProps) => {
    const [state, dispatch] = useReducer(produce(reducer), initialState, (initialState) => {
        const prevState = JSON.parse(localStorage.getItem('leovegas-global-state') || '{}')
        return {
            ...initialState,
            ...prevState
        }
    })

    useEffect(() => {
        localStorage.setItem('leovegas-global-state', JSON.stringify(state))
    }, [state])

    return (
        <dispatchContext.Provider value={dispatch}>
            <storeContext.Provider value={state}>
                {children}
            </storeContext.Provider>
        </dispatchContext.Provider>
    )
}

export function useStore() {
    return useContext(storeContext)
}

export function useDispatch() {
    return useContext(dispatchContext)
}