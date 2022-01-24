import { useInView } from "react-intersection-observer"

interface Props {
    placeholder?: string,
    src: string,
    alt?: string
}

const LazyImage = ({ placeholder, src, alt, ...rest }: Props) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        delay: 1000,
    })

    return (
        <div ref={ref} style={{background: '#ccc', height: '100%', width: 92}}>
            {inView && <img 
                {...rest} 
                alt={alt}
                src={inView ? src : placeholder || ''} 
            />}
        </div>
    )
    
}

export default LazyImage