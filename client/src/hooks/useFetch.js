import { useCallback, useEffect, useRef, useState } from "react";
import useUser from "./useUser";
import { toast } from "react-toastify";

const apis = {
    auth: import.meta.env.VITE_API_AUTH_URL
    , data: import.meta.env.VITE_API_DATA_URL
    , carQuery: import.meta.env.VITE_API_CAR_QUERY_URL
};

export default function useFetch(api, endPoint, initialState){
    const [data, setData] = useState(initialState);
    const { isAuthenticated, user } = useUser();
    const initialStateRef = useRef(initialState);
    const abortControllerRef = useRef(null);

    // calls fetch
    const fetchData = useCallback(async (api, endPoint, method, body) => {
        const fetchUrl = apis[api] + endPoint;

        let options = { headers: {} };

        if (abortControllerRef.current){
            options.signal = abortControllerRef.current.signal;
        }

        if (method) {
            options.method = method;
        }

        if (body) {
            // body appended token for auth requests
            if (body.accessToken){
                options.headers["X-Authorization"] = body.accessToken;
                delete body.accessToken;
            }

            if (Object.keys(body).length !== 0){
                options.headers["Content-Type"] = "application/json";
                options.body = JSON.stringify(body);
            }
        }

        if (isAuthenticated){
            options.headers["X-Authorization"] = user.accessToken;
            options.headers["X-Admin"] = true;
        }

        try {
            const response = await fetch(fetchUrl, options);

            if (!response.ok){
                throw await response.json();
            }

            return response.json();
        }
        catch(err) {
            if (err.name === 'AbortError') {
                return initialStateRef.current;
            }

            toast.error(err.message || "There was an error");
            return initialStateRef.current;
        }
    }, [isAuthenticated, user]);

    // comp mount exec
    useEffect(() => {
        if (!api || !endPoint) return;

        const abortController = new AbortController();
        abortControllerRef.current = abortController;

        fetchData(api, endPoint)
            .then(result =>setData(result));

        return () => abortController.abort();
    }, [api, endPoint, fetchData]);

    return { data, setData, fetchData };
}