import { useState } from "react";

export default function useForm(initVals){
    const [data, setData] = useState(initVals);

    const changeHandler = (e) => {
        setData(state => ({
            ...state
            , [e.target.name]: e.target.value
        }));
    };

    const regField = (field) => {
        return {
            name: field
            , onChange: changeHandler
            , value: data[field]
        }
    };

    return { data, regField }
}