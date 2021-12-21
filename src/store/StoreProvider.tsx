import produce from 'immer'
import { StateModel, StoreProviderProps } from "./types"
import { createContext, useContext, useReducer, Dispatch } from "react"


const storeContext = createContext<StateModel>({} as StateModel)
const dispatchContext = createContext<Dispatch<any>>(() => {})

export const StoreProvider = ({ children, reducer, initialState }: StoreProviderProps) => {
    const [state, dispatch] = useReducer(produce(reducer), initialState)

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