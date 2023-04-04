import Base from "@/components/Base"

const getRegionFilters = async () => {
  const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?a=list" 
  );
  const response = await res.json();
  return response.meals.map((a: any) => a.strArea)  
}

const getMeals = async (filter?: string) => {
  console.log('Coming from home', filter)
  if (filter) {
    console.log('inside Filter block', filter)
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${filter}`
    );
    const response = await res.json();
    return response;
  } else {
    console.log('inside else block')
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=" 
    );
    const response = await res.json();
    return response.meals.map((a: any) => a) 
  }
}

export default async function Home() {

  
  const defaultFilter = 'Popular'
  
  const filters = await getRegionFilters()
  const meals = await getMeals()
  // const filteredMeals = await getMeals()

  // const Callback = (childData: string) => {
  //   return (
  //     <div>
  //       {childData}
  //     </div>
  //   )
  // }


  // const handleFilterChange = async (value?: string) => {
  //   meals = await getMeals(value)
  // }

  return (
    <div>
      <Base filterData={filters} mealData={meals}/>
    </div>
    )
  }
  
  // {render {filters,filteredMeals}}
  // onFilterChange={(filter:string) => getMealsByFilter(filter)}