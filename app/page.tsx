import Navigation from "@/components/Navigation"
import Header from "@/components/Header"
import SearchBar from "@/components/SearchBar"
import FilterSection from "@/components/FilterSection"

// const fetchRandomMeals = async () => {
//   const res = await fetch(
//       "www.themealdb.com/api/json/v1/1/random.php" 
//   );
//   const response = await res.json();
//   console.log(response)
//   return response.meals.map((a: any) => a.strMeal)
  
// }

const fetchRecipesCategory = async () => {
  const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?c=list" 
  );
  const response = await res.json();
  return response.meals.map((a: any) => a.strCategory)
  
}

const fetchRecipesArea = async () => {
  const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?a=list" 
  );
  const response = await res.json();
  return response.meals.map((a: any) => a.strArea)
  
}

const fetchRecipesIngredient = async () => {
  const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?i=list" 
  );
  const response = await res.json();
  return response.meals.map((a: any) => a.strIngredient)
  
}



export default async function Home() {
  // const allMeals = await fetchRandomMeals()
  const categories = await fetchRecipesCategory()
  const areas = await fetchRecipesArea()
  const ingredients = await fetchRecipesIngredient()

  return (
    <div>
      <div className="mx-2">
        <SearchBar />

        {/* {allMeals} */}

        {/* Categories */}
        <FilterSection title='Categories' data={categories}/>
        {/* Areas/Regions */}
        <FilterSection title='Regions' data={areas}/>
        {/* Ingredients */}
        <FilterSection title='Ingredients' data={ingredients}/>

      </div>
    </div>
  )
}
