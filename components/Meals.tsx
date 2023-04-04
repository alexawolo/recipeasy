import RecipeCard from "./RecipeCard"

interface Meals {
  selectedFilter: string,
  meals: any[]
}

export default function Meals({ selectedFilter, meals }: Meals) {
  return (
    <div>
        { selectedFilter ==='Popular' ? 
          // Shows Popular list if no other filter selected
          <div>
              <p className="text-md font-semibold mb-3 text-slate-700">Popular</p>
              <div className="grid grid-cols-2 gap-3 justify-center items-center">
              {meals.map((meal: any)  => {
                  return (
                      <RecipeCard key={meal.idMeal} data={meal}/>
                      )
              })}
              </div>
          </div> :
          // Shows filtered list if filter is selected
          <div>
              <p className="text-md font-semibold mb-3 text-slate-700">{selectedFilter} Meals</p>
              Filtered selection
          </div> 
        }
    </div>
  )
}
