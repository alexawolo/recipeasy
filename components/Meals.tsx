import { useEffect, useState } from "react"
import RecipeCard from "./RecipeCard"

interface Meals {
  selectedFilter: string,
  popularMeals: any[]
  meals: string[]
}

export default function Meals({ selectedFilter, popularMeals, meals }: Meals) {

  return (
    <div>
        { selectedFilter ==='Popular' ? 
          // Shows Popular list if no other filter selected
          <div>
              <p className="text-md font-semibold mb-3 text-slate-700">Popular</p>
              <div className="grid grid-cols-2 gap-3 justify-center items-center mb-4">
                { popularMeals?.map((meal: any)  => {
                    return (
                        <RecipeCard key={meal.idMeal} data={meal}/>
                        )
                })}
              </div>
          </div> :
          // Shows filtered list if filter is selected
          <div>
              <p className="text-md font-semibold mb-3 text-slate-700">{selectedFilter} Meals</p>
              <div className="grid grid-cols-2 gap-3 justify-center items-center mb-4">
                {meals?.map((meal: any)  => {
                    return (
                        <RecipeCard key={meal.idMeal} data={meal}/>
                        )
                })} 
              </div>
          </div> 
        }
    </div>
  )
}
