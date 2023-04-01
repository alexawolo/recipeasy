import React from 'react'
import Filter from './Filter'

interface FilterSection {
    title: string,
    data: string[]
    filters: string[]
}

// const handleLangChange = async () => {
//   let filter = this.dropdown.value;
//   this.props.onSelectLanguage(lang);            
// }

export default function FilterSection({title, data, filters}: FilterSection) {
  return (
    <div className="mb-5 last:mb-0">
        <h3 className="text-md font-semibold mb-3 text-slate-700">{title}</h3>
        <div className="flex overflow-x-auto">
          <button className={`m-3 mt-0 ml-0 mb-3 flex items-center py-3 px-4 shadow-md rounded-xl w-fit bg-white text-slate-700 font-medium hover:bg-red-400 hover:text-white active:bg-red-500 active:text-white min-w-max ${filters.includes('Popular') ? 'bg-red-500 text-slate-50' : ''}`}>
            <p className="text-sm">Popular</p>
          </button>
            {data.map((c: string, idx: number) => 
              <Filter key={idx} filterTerm={c} filters={filters}/>
            )}
        </div>
    </div>
  )
}
