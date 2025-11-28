import { useEffect, useState } from "react";

const apis = {
    auth: import.meta.env.VITE_API_AUTH_URL
    , data: import.meta.env.VITE_API_DATA_URL
};

export default function useFetch(api, endPoint, initialState){
    const [data, setData] = useState(initialState);

    // TODO: add abort controller
    // comp mount exec
    useEffect(() => {
        if (!api || !endPoint) return;

        fetchData(api, endPoint)
            .then(result =>setData(result))
    }, [api, endPoint]);

    // calls fetch
    const fetchData = async (api, endPoint, method, body) => {
        const fetchUrl = apis[api] + endPoint;

        let options = {};

        if (method) {
            options.method = method;
        }

        if (body) {
            options.headers = {
                "Content-Type": "application/json",
            };

            options.body = JSON.stringify(body);
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
    };

    return { data, fetchData };
}