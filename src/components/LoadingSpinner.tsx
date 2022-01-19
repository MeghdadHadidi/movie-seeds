import css from './LoadingSpinner.module.css'

const LoadingSpinner = () => {
    return (
        <div className={css.spinnerWrapper}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default LoadingSpinner