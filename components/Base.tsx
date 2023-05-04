'use client'
import { useEffect, useState } from "react"
import Meals from "./Meals"

interface Data {
    filterData: string[],
    mealData?: any,
    onFilterChange?: any
}

export default function Base({filterData, mealData}: Data) {
    const [popularMeals] = useState(mealData)
    const [filter, setFilter] = useState('Popular')
    const [mealIds, setMealIds] = useState([] as string[])
    const [meals, setMeals] = useState([] as unknown)

    useEffect(() => {
      if (filter !== 'Popular') {
        const fetchIdData = async () => {
          try {
              const response1 = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${filter}`);
              const data1 = await response1.json();
              const meals = Object.values(data1)[0] as Array<{idMeal: string, strMeal: string, strMealThumb: string}>
              const ids = meals.map(meal => meal.idMeal)
              setMealIds(ids);      
          } catch (error) {
            console.error(error);
          }
        }

        fetchIdData();  
      }
    }, [filter]);

    useEffect(() => {
      if (filter !== 'Popular') {
        const fetchMealDataWithId = async (str: string) => {
          try {
            const getMealsById = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${str}`);
            const data = await getMealsById.json();
            return Object.values(data)[0]
          } catch (error) {
            console.error(error);
          }
        }
        
        const arrayOfPromises = mealIds.map((str) => fetchMealDataWithId(str));
  
        Promise.all(arrayOfPromises)
          .then((results) => {
            const arrayOfObjects = results.map((data: any) => (
              data[0]
            ));
            setMeals(arrayOfObjects)
          })
          .catch((error) => {
            console.error(error);
          }); 
      }
    }, [mealIds]);

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
