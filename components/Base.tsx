'use client'
import { useEffect, useState } from "react"
import Meals from "./Meals"

interface Data {
    filterData: string[],
    mealData?: any,
    onFilterChange?: any
}

export default function Base({filterData, mealData}: Data) {
    const [popularMeals, setPopularMeals] = useState(mealData)
    const [meals, setMeals] = useState([] as unknown)
    const [filter, setFilter] = useState('Popular')

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${filter}`)
            .then((res) => res.json())
            .then((response) => {
                const res = Object.values(response)[0] as string[]
                setMeals(res) 
            }
            )
        }, [filter]
    )

  return (
      <div>
       <div className="mx-4">
          <h2 className="text-xs text-slate-500 font-medium mb-1">Delicious</h2>
          <h2 className="text-lg font-bold mb-5 text-slate-700">Meals made Recipeasy ✨</h2>
              <div>
              {/* Filters */}
              <div className="mb-5 last:mb-0">
                  <h3 className="text-md font-semibold mb-3 text-slate-700">Category</h3>
                  <div className="flex overflow-x-auto">
                    {/* Popular Filter  */}
                      <button 
                          value='Popular'
                          onClick={(e) => setFilter(e.currentTarget.value)}
                          className={`m-3 mt-0 ml-0 mb-3 flex items-center py-3 px-4 shadow-md rounded-xl w-fit font-medium hover:bg-red-400 hover:text-white min-w-max
                          ${filter === 'Popular' ? 'bg-red-500 text-white' : 'bg-white text-slate-700'}`}>
                          <p className="text-sm">Popular</p>
                      </button>


                    {/* Other filters */}
                      {filterData.map((c: string, idx: number) => {
                        return (
                            <button 
                                key={idx} 
                                value={c}
                                onClick={(e) => setFilter(e.currentTarget.value)}
                                className={` m-3 mt-0 ml-0 mb-3 flex items-center py-3 px-4 shadow-md rounded-xl w-fit font-medium hover:bg-red-400 hover:text-white min-w-max
                                ${filter === c ? 'bg-red-500 text-white' : 'bg-white text-slate-700'}`}>
                                <p className="text-sm">{ c }</p>
                            </button>
                        )
                      }
                    )} 
  
                  </div>
              </div>
  
              <Meals selectedFilter={filter} popularMeals={popularMeals} meals={meals as string[]} />
              </div>
      </div>
      </div>
    )
  } 
