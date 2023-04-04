'use client'
import { useState } from "react"
import Filter from "./Filter"
import Meals from "./Meals"
import RecipeCard from "./RecipeCard"
import getMealsByFilter from '../app/page'

interface Data {
    filterData: string[],
    mealData: any,
    onFilterChange?: any
}

export default function Base({filterData, mealData, onFilterChange}: Data) {
    const [meals, setMeals] = useState(mealData)
    const [filter, setFilter] = useState('Popular')


    const handleBtnClick = (value: any) => {
        console.log(value.currentTarget.value)
        setFilter(value.currentTarget.value)
        onFilterChange(value.currentTarget.value)
    }
    
    // onFilterChange(filter)

    console.log('filter:', filter)

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
                      <button 
                          value='Popular'
                          onClick={(e) => handleBtnClick(e)}
                          className={`m-3 mt-0 ml-0 mb-3 flex items-center py-3 px-4 shadow-md rounded-xl w-fit bg-white text-slate-700 font-medium hover:bg-red-400 hover:text-white active:bg-red-500 active:text-white min-w-max ${filter === 'Popular' ? 'bg-red-500 text-slate-50' : ''}`}>
                          <p className="text-sm">Popular</p>
                      </button>
                      {filterData.map((c: string, idx: number) => {
                      return (
                          <button 
                              key={idx} 
                              value={c}
                              onClick={(e) => handleBtnClick(e)}
                              className={`m-3 mt-0 ml-0 mb-3 flex items-center py-3 px-4 shadow-md rounded-xl w-fit bg-white text-slate-700 font-medium hover:bg-red-400 hover:text-white active:bg-red-500 active:text-white min-w-max 
                                  ${filter === c ? 'bg-red-500 text-slate-50' : ''}
                              `}
                              >
                              <p className="text-sm">{ c }</p>
                          </button>
                          // <Filter key={idx} filterTerm={c} filter={filter} onClick={handleBtnClick(c)}/>
                      )
                      }
                      )} 
  
                  </div>
              </div>
  
              {/* Reloading Content based on filters above, but by default show Popular meals */}
              <Meals selectedFilter={filter} meals={meals} />
              </div>
      </div>
      </div>
    )
  } 
