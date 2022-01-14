import { useCallback, useRef } from "react"

interface DebounceTimer {
    current?: ReturnType<typeof setTimeout>
}

const useDebounce = (callback: (...args: any) => any, delay: number) => {
    const timeout: DebounceTimer = useRef();

    const reset = () => {
        if(timeout.current){
            clearTimeout(timeout.current)
        }
    }
  
    const debounced = useCallback(
      (...args) => {
        const later = () => {
            if(timeout.current){
                clearTimeout(timeout.current);
            }
            callback(...args);
        };
  
        if(timeout.current){
            clearTimeout(timeout.current);
        }
        timeout.current = setTimeout(later, delay);
      },
      [callback, delay]
    );

    return [
        debounced,
        reset
    ]
};

export default useDebounce