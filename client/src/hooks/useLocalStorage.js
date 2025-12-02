import { useState } from "react";

export default function useLocalStorage(initVals, key){
    const [state, setState] = useState(() => {
        const storageData = localStorage.getItem(key);

        if (!storageData){
            return initVals;
        }
        
        return JSON.parse(storageData);
    });

    const setPersistedState = (value) => {        
        setState(value);

        if (!value){
            localStorage.removeItem(key);
            return;
        }
        
        localStorage.setItem(key, JSON.stringify(value));
    };

    return [state, setPersistedState];
}