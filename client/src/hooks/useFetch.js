import { useCallback, useEffect, useState } from "react";
import useUser from "./useUser";

const apis = {
    auth: import.meta.env.VITE_API_AUTH_URL
    , data: import.meta.env.VITE_API_DATA_URL
};

export default function useFetch(api, endPoint, initialState){
    const [data, setData] = useState(initialState);
    const { isAuthenticated, user } = useUser();

    // calls fetch
    const fetchData = useCallback(async (api, endPoint, method, body) => {
        const fetchUrl = apis[api] + endPoint;

        let options = { headers: {} };

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
        }

        try {
            const response = await fetch(fetchUrl, options);

            if (!response.ok){
                throw await response.json();
            }

            return response.json();
        }
        catch(err) {
            alert(err.message);
            return null;
        }
    }, [isAuthenticated, user]);

    // TODO: add abort controller
    // comp mount exec
    useEffect(() => {
        if (!api || !endPoint) return;

        fetchData(api, endPoint)
            .then(result =>setData(result))
    }, [api, endPoint, fetchData]);

    return { data, setData, fetchData };
}