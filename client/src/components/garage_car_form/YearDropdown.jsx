import useFetch from "../../hooks/useFetch";

export default function YearDropdown({ regField, setData }){    
    const { data: years } = useFetch("carQuery", "years", { Years: {} });

    let yearsOptions = [];
    const minYear = Number(years.Years.min_year);
    const maxYear = Number(years.Years.max_year);
    for (let i = maxYear; i >= minYear; i--) {
        yearsOptions.push(i);
    }

    const onYearChange = (e) => {
        setData(prev => ({
            ...prev,
            year: e.target.value,
            make: "",
            model: "",
            model_id: ""
        }));
    };

    return (
        <div>
            <div className="block text-white mb-1">Year <span className="text-red-500">*</span></div>
            <select
                className="w-full p-3 bg-white/10 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                {...regField}
                onChange={onYearChange}
            >
                <option className="text-black" value="">---</option>
                { yearsOptions.map(year => <option key={year} value={year} className="text-black" >{year}</option>) }
            </select> 
        </div>
    );
};