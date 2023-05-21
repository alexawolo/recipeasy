'use client'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { RiShoppingBasket2Line, RiShoppingCart2Line } from "react-icons/ri";

export default function page({ params }: any) {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState([] as any)
  const [ingredients, setIngredients] = useState([] as any)
  const [list, setList] = useState([] as any)
  const [addToListClicked, setAddToListClicked] = useState(false)

  useEffect(() => {
    const getRecipeDetails = async () => {
      const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
      );
      const data = await res.json();
      const meals = Object.values(data)[0] as any
      setData(meals[0])
      setIngredients(Object.keys(meals[0])
        .filter((key) => key.indexOf("Ingredient") > 0)
        .map((ingKey: any ) => meals[0][ingKey])
        .filter(Boolean))
      return meals[0];
    }

    getRecipeDetails()
  }, []);

  const addToList = (d: {strMeal: string}, i: string[]) => {
    const meal = {name: d.strMeal, ingredients: i}
    setList(meal)
    setAddToListClicked(true)
  }

  useEffect(() => {
    if(addToListClicked) {
      console.log('JSON.stringify(list)', JSON.stringify(list))
      router.push({
        pathname: '/list',
        query: { values: JSON.stringify(list) }
      });
    }
  }, [addToListClicked] )

  return (
    <div className="p-3 pb-0">
      <div>
          <Image 
              src={data.strMealThumb || 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png'} 
              width={100} 
              height={100} 
              alt='Recipe Image' 
              className="w-full"
          />
      </div>

      <div className="flex items-center justify-between">
        <h2 className="mt-2 mb-5 text-xl font-semibold text-slate-800">{data.strMeal}</h2>
        <div className="flex items-center justify-center text-xs text-slate-500">
          <RiShoppingBasket2Line className="text-red-400 mr-1"/>
          <p className="sm:mr-0 md:mr-1">{ingredients.length}</p>
          <p className="hidden md:flex">ingredients</p>
        </div>
      </div>


      <h3 className="text-sm font-medium mb-2 text-slate-800">Ingredients</h3>
      
      <div className="flex overflow-x-auto">
        {ingredients.map((ing: string, idx: number) => (
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
            {data.strInstructions}
          </p>

          {/* Resources */}
          {/* <Link href={data.strYoutube as string}>Youtube tutorial</Link>
          <Link href={data.strSource as string}>Recipe resource</Link> */}
        </div>
      </div>

      {/* Popup Modal */}
      {showModal && (ingredients.length > 0) ? (
        <div className="z-0 w-full h-[90%] top-[0] fixed">
          <div className="relative top-[25%] m-[0 auto] bg-white shadow-xl rounded p-6 flex flex-col">
            <p className="mr-3 ml-3 mb-3 font-medium text-lg">Shopping List Preview</p>
            <ul className="flex flex-col justify-center mb-4">
            {ingredients.map((ing: string, idx: number) => (
              <div key={idx} className="flex">
                <p className="mr-1">{idx + 1}.</p>
                <li 
                    className=""
                    key={idx}>{ing}
                </li>
              </div>
            ))}
            </ul>
            <div className="flex justify-between items-center">
              <button onClick={() => addToList(data, ingredients)} className="mr-2 rounded p-1 bg-red-400 hover:bg-red-500 text-white">Add</button>
              <button onClick={() => setShowModal(false)} className="rounded p-1 bg-red-400 hover:bg-red-500 text-white">Close</button>
            </div>
          </div>
        </div>
      ): null}

      <button onClick={() => setShowModal(true)} className="sticky bottom-0 w-full flex items-center justify-center p-3 rounded-t-xl bg-red-400 text-white">
        <p>Add to shopping list</p>
      </button>

    </div>
  )
}
