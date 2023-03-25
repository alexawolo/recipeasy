import React from 'react'
import Filter from './Filter'

interface FilterSection {
    title: string,
    data: string[]
}

export default function FilterSection({title, data}: FilterSection) {
  return (
    <div className="mb-5 last:mb-0">
        <h2 className="text-lg">{title}</h2>
        <div className="flex overflow-x-auto">
            {data.map((c: string, idx: number) => 
            <Filter key={idx} filterTerm={c} />
            )}
        </div>
    </div>
  )
}
