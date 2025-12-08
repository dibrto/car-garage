import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

export default function MakeDropdown({ regField, year }){
    const { fetchData } = useFetch();
    const [makes, setMakes] = useState([]);

    useEffect(() => {        
        if (!year) {
            setMakes([]);
            return;
        }

        fetchData("carQuery", `makes?year=${year}`)
            .then(response => setMakes(response.Makes));

    }, [year, fetchData]);

    return (
         <div>
            <div className="block text-white mb-1">Make</div>
            <select                
                {...regField}
                className="w-full p-3 bg-white/10 text-white rounded-xl 
                            border border-white/10 focus:outline-none 
                            focus:ring-2 focus:ring-blue-500"
            >
                <option value="" className="text-black">---</option>
                { makes.map(make => <option key={make.make_id} value={make.make_id} className="text-black" >{make.make_display}</option>) }
            </select>
        </div>
    );
};