import FilterSection from "@/components/FilterSection"
import RecipeCard from "@/components/RecipeCard"

const fetchAllMeals = async () => {
  const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=" 
  );
  const response = await res.json();
  return response.meals.map((a: any) => a)
  
}

const fetchRecipesArea = async () => {
  const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?a=list" 
  );
  const response = await res.json();
  return response.meals.map((a: any) => a.strArea)
  
}

// TODO: add filter logic

// const getRecipesOnFilterChange = async (type: string) => {
//   const res = await fetch(
//     `https://www.themealdb.com/api/json/v1/1/filter.php?a=${type}`
//   );
//   const response = await res.json();
//   return response;
// }

export default async function Home() {
  const areas = await fetchRecipesArea()
  const all = await fetchAllMeals()

  const selectedFilters = [
    'Popular',
    // 'American', 
    // 'Chinese'
  ]

  return (
    <div className="mx-4">
      <h2 className="text-xs text-slate-500 font-medium mb-1">Delicious</h2>
      <h2 className="text-lg font-bold mb-5 text-slate-700">Meals made Recipeasy ✨</h2>
      <div>
        {/* Category Filters */}
        <FilterSection title='Category' data={areas} filters={selectedFilters}/>

        {/* Popular Meals */}
        { selectedFilters.includes('Popular') ? 
        // Shows Popular list if popular filter is selected
        <div>
          <p className="text-md font-semibold mb-3 text-slate-700">Popular</p>
          <div className="grid grid-cols-2 gap-3 justify-center items-center">
            {all.map((meal: any)  => {
              return (
                    <RecipeCard key={meal.idMeal} data={meal}/>
                  )
            })}
          </div>
        </div> :
        // Shows filtered list if filter is selected
        <div>
          <p className="text-md font-semibold mb-3 text-slate-700">{selectedFilters.join(', ')} Meals</p>
          Filtered selection
        </div> 
        }
      </div>
    </div>
  )
}
