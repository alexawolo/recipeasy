interface FilterProps {
    key: number
    filterTerm: string,
    filters: string[]
}

export default function Filter({ key, filterTerm, filters }: FilterProps) {
  return (
      <button key={key} className={`
        m-3 mt-0 ml-0 mb-3 flex items-center py-3 px-4 shadow-md rounded-xl w-fit bg-white text-slate-700 font-medium hover:bg-red-400 hover:text-white active:bg-red-500 active:text-white min-w-max 
        ${filters.includes(filterTerm) ? 'bg-red-500 text-slate-50' : ''}
        `}>
          <p className="text-sm">{ filterTerm }</p>
      </button>
  )
}
