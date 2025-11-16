export default function FetchData(endPoint, signal,  body, method = "GET"){
    const url = `http://localhost:3030/data/${endPoint}`;
    let options = {
        signal: signal
    };

    if (method) {
        options.method = method;
    }

    if (body) {
        options.headers = {
            "content-type": "application/json",
        };

        options.body = JSON.stringify(body);
    }
    
    return fetch(url, options)
        .then(response => {
            if (!response.ok) throw response.statusText;
                        
            return response.json();
        })
        .catch(err => {
            if (err.name !== "AbortError") {
                alert(err.message);
            }
        })
    ;
}