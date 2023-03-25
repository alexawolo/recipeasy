import RecipeCard from "@/components/RecipeCard";

async function getRecipes(type: string) {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${type}`
    );
    const response = await res.json();
    return response;
  }

export default async function page({ params }: any) {
    const recipes = await getRecipes(params.searchTerm);
  return (
    <div>
        Search term page

        <div>
            {recipes.meals.map((meal: {strMeal: string, strMealThumb: string, idMeal: number}) =>
                <RecipeCard title={meal.strMeal} image={meal.strMealThumb}/>
            )}
        </div> 
    </div>
  )
}
