import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

export default function MakeDropdown({ regField, setData, year }){
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

    const onMakeChange = (e) => {
        setData(prev => ({
            ...prev,
            make: e.target.value,
            model: "",
            model_id: ""
        }));
    };

    return (
         <div>
            <div className="block text-white mb-1">Make <span className="text-red-500">*</span></div>
            <select                
                {...regField}
                onChange={onMakeChange}
                className="w-full p-3 bg-white/10 text-white rounded-xl 
                            border border-white/10 focus:outline-none 
                            focus:ring-2 focus:ring-blue-500"
            >
                <option value="" className="text-black">---</option>
                { makes.map(make => <option key={make.make || make.make_id} value={make.make} className="text-black" >{make.make_display}</option>) }
            </select>
        </div>
    );
};