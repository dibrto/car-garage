const BASE_URL = "http://localhost:3030/";

export default function useFetch(){
    const fetchData = async  (endPoint, method, body) => {
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
            const response = await fetch(BASE_URL + endPoint, options);

            if (!response.ok){
                throw await response.json();
            }

            return response.json();
        }
        catch(err) {            
            alert(err.message);
        }
    };

    return { fetchData };
}