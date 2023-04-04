import { useState } from "react";

interface FilterProps {
    // onChange: any,
    key: number
    filterTerm: string,
    filter: string
    onClick?: any
}

export default function Filter({ key, filterTerm, filter, onClick }: FilterProps) {
    // const [value, setValue] = useState('Popular');
    // console.log(value)

    // const getMealsByFilter = async (value: string) => {
    //     if (filter !== 'Popular') {
    //         const res = await fetch(
    //           `https://www.themealdb.com/api/json/v1/1/filter.php?a=${value}`
    //         );
    //         const response = await res.json();
    //         return response;
    //     }
    // }
    
    // const handleClick = (value: string) => {
    //     setValue(value)
    //     onClick(value)
    //     // if (value) {
    //     //   onChange(value);
    //     // }
    // }

  return (
      <button 
        key={key} 
        onClick={() => onClick(filterTerm)}
        className={`m-3 mt-0 ml-0 mb-3 flex items-center py-3 px-4 shadow-md rounded-xl w-fit bg-white text-slate-700 font-medium hover:bg-red-400 hover:text-white active:bg-red-500 active:text-white min-w-max 
            ${filter === filterTerm ? 'bg-red-500 text-slate-50' : ''}
        `}
        >
          <p className="text-sm">{ filterTerm }</p>
      </button>
  )
}
