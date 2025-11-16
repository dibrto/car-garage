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

    fetch(url, options)
        .then(response => {
            if (!response.ok) throw response.statusText;
            
            return response.json()
        })
        .then(result => {
            console.log(result);            
            return result;
        })
        .catch(err => {
            if (err.name !== "AbortError") {
                alert(err.message);
            }
        });
}