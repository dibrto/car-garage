import { createContext, useCallback, useState } from "react";

const LoaderContext = createContext({
    isLoading: false
    , startLoading() {}
    , stopLoading() {}
});

export const LoaderProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    const startLoading = useCallback(() => {
        setIsLoading(true);
    }, []);

    const stopLoading = useCallback(() => {
        setIsLoading(false);
    }, [])    

    return (
        <LoaderContext.Provider value={{ isLoading, startLoading, stopLoading }}>
            {children}
        </LoaderContext.Provider>
    );
}

export default LoaderContext;
