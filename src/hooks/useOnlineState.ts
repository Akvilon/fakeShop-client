import {useEffect, useRef, useState} from "react";

function usePrevious<T>(value: T): T | undefined {
    const ref = useRef<T>();
    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
}

export const useOnlineState = () => {
    const [online, setOnline] = useState<boolean>(window.navigator.onLine)
    const [isShow, setIsShow] = useState<boolean>(false)
    const previousStatus = usePrevious(window.navigator.onLine)

    useEffect(() => {
        const handleOnline = () => {
            setOnline(true)
            if(online !== previousStatus) {
                setIsShow(true)
            }
        }
        const  handleOffline = () => {
            setOnline(false)
            setIsShow(true)
        }
        window.addEventListener("online", handleOnline)
        window.addEventListener("offline", handleOffline)

        return () => {
            window.removeEventListener("online", handleOnline)
            window.removeEventListener("offline", handleOffline)
        }
    }, [window.navigator.onLine])

    return {online, isShow}
}