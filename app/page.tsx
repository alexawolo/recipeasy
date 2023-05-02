import Base from "@/components/Base"

const getRegionFilters = async () => {
  const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?a=list" 
  );
  const response = await res.json();
  return response.meals.map((a: any) => a.strArea)  
}

const getMeals = async () => {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=" 
    );
    const response = await res.json();
    return response.meals.map((a: any) => a) 
}

export default async function Home() {
  const filters = await getRegionFilters()
  const meals = await getMeals()

  return (
    <div>
      <Base filterData={filters} mealData={meals}/>
    </div>
    )
  }