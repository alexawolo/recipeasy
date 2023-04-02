import Image from 'next/image'
import { RiShoppingBasket2Line, RiShoppingCart2Line } from "react-icons/ri";

const getRecipeDetails = async (id: number) => {
  const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  return res.json();
}

export default async function page({ params }: any) {
  const recipe = await getRecipeDetails(params.id)
  const details = recipe.meals[0]
  const ingredients = Object.keys(details)
    .filter((key) => key.indexOf("Ingredient") > 0)
    .map((ingKey) => details[ingKey])
    .filter(Boolean) // removes falsy values from an array

  // const measurements = Object.keys(details)
  // .filter((key) => key.indexOf("Measure") > 0)
  // .map((ingKey) => details[ingKey])
  // .filter(Boolean) // removes falsy values from an array

  return (
    <div className="p-3 pb-0">
      <div>
          <Image 
              src={details.strMealThumb} 
              width={100} 
              height={100} 
              alt='Recipe Image' 
              className="w-full"
          />
      </div>

      <div className="flex items-center justify-between">
        <h2 className="mt-2 mb-5 text-xl font-semibold text-slate-800">{details.strMeal}</h2>
        <div className="flex items-center justify-center text-xs text-slate-500">
          <RiShoppingBasket2Line className="text-red-400 mr-1"/>
          <p className="sm:mr-0 md:mr-1">{ingredients.length}</p>
          <p className="hidden md:flex">ingredients</p>
        </div>
      </div>


      <h3 className="text-sm font-medium mb-2 text-slate-800">Ingredients</h3>
      
      <div className="flex overflow-x-auto">
        {ingredients.map((ing, idx) => (
          <span 
              className="bg-red-100 text-slate-800 py-1 px-2 rounded mr-2 mb-3 text-xs min-w-fit"
              key={idx}>{ing}
          </span>
        ))}
      </div>


      <div className="mt-2 mb-5">
        <div className="flex">
          <button className="text-sm font-medium mb-2 text-slate-800">Directions</button>
          {/* <button className="mr-2">Resources</button> */}
        </div>
        <div>
          {/* Recipe */}
          <p className="text-xs">
            {details.strInstructions}
          </p>

          {/* Resources */}
          {/* {details.strYoutube}
          {details.strSource} */}
        </div>
      </div>

      <button className="sticky bottom-0 w-full flex items-center justify-center p-3 rounded-t-xl bg-red-400 text-white">
        <p>Add to shopping list</p>
      </button>

    </div>
  )
}
