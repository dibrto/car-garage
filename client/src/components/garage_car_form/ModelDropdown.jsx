import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

export default function ModelDropdown({ regField, setData, year, make }) {
    const { fetchData } = useFetch();
    const [models, setModels] = useState([]);

    useEffect(() => {
        if (!year || !make) {
            setModels([]);
            return;
        }

        fetchData("carQuery", `models?year=${year}&make=${make}`)
            .then(response => setModels(response.Models));

    }, [year, make, fetchData]);
    
    
    const onModelChange = (e) => {
        setData(prev => ({
            ...prev,
            model: e.target.value,
            model_id: ""
        }));
    };

    return (
        <div>
            <div className="block text-white mb-1">Model <span className="text-red-500">*</span></div>
            <select
                {...regField}
                onChange={onModelChange}
                className="w-full p-3 bg-white/10 text-white rounded-xl 
                            border border-white/10 focus:outline-none 
                            focus:ring-2 focus:ring-blue-500">
                <option value="" className="text-black">---</option>
                { models.map(model => <option key={model.model_name} value={model.model_name} className="text-black" >{model.model_name}</option>) }
            </select>
        </div>
    );
};