import { PropsWithChildren } from "react"
import css from './Container.module.css'

const Container = ({ children }: PropsWithChildren<any>) => {
    return (
        <div className={css.container}>
            {children}
        </div>
    )
}

export default Container