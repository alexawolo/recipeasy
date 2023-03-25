import React from 'react'

async function getRecipes(type: string) {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${type}`
    );
    const response = await res.json();
    return response;
  }

  
export default async function page({ params }: any) {
    const recipes = await getRecipes(params.type);

  return (
    <div>
        Search page

        <div>
            {recipes.meals}
        </div>
    </div>
  )
}
