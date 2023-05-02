import { RiShoppingBasket2Line } from "react-icons/ri";
import Link from 'next/link'

interface RecipeCard {
    data: any
}

export default function RecipeCard({ data }: RecipeCard) {

    const ingredients = Object.keys(data)
    .filter((key) => key.indexOf("Ingredient") > 0)
    .map((ingKey) => data[ingKey])
    .filter(Boolean) // removes falsy values from an array

  return (
    <Link href={`/recipe/${data.idMeal}`} className="flex flex-col rounded shadow-md rounded-xl bg-white min-h-full">
        <div className="w-full h-auto flex">
            <img src={data.strMealThumb} alt={data.strMeal} width="auto" height="auto" className="flex object-contain rounded-t"/>
        </div>
        <div className="flex p-5 rounded-b h-[auto] min-h-auto">
            <div className="flex flex-col w-full items-center justify-center">
                <p className="text-sm font-semibold text-slate-700 text-center">{data.strMeal}</p>
                <div className="flex items-center justify-center text-xs text-slate-500">
                    <RiShoppingBasket2Line className="text-red-400 mr-1"/>
                    <p className="sm:mr-0 md:mr-1">{ingredients.length}</p>
                    <p className="hidden md:flex">ingredients</p>
                </div>
            </div>
        </div>
    </Link>
  )
}
