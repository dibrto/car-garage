import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

export default function TrimDropdown({ regField, year, make, model }){
    const { fetchData } = useFetch();
    const [trims, setTrims] = useState([]);

    useEffect(() => {
        if (!year || !make || !model) {
            setTrims([]);
            return;
        }

        fetchData("carQuery", `trims?year=${year}&make=${make}&model=${model}`)
            .then(response => setTrims(response.Trims));

    }, [year, make, model, fetchData]);

    return (
         <div>
            <div className="block text-white mb-1">Trim</div>
            <select
                {...regField}
                className="w-full p-3 bg-white/10 text-white rounded-xl 
                            border border-white/10 focus:outline-none 
                            focus:ring-2 focus:ring-blue-500">
                <option value="" className="text-black">---</option>
                { trims.map(trim => <option key={trim.model_id} value={trim.model_id} className="text-black" >{trim.model_trim}</option>) }
            </select>
        </div>
    );
};