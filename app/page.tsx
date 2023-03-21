import Navigation from "@/components/Navigation"
import Header from "@/components/Header"
import Filter from '@/components/Filter'
import RecipeCard from "@/components/RecipeCard"

export default function Home() {
  return (
    <div>
      <Header />
      <Filter searchTerm="Example"/>
      <RecipeCard image="" title="Example Title" prepTime="15 minutes" rating={4.5}/>
      <Navigation />
    </div>
  )
}
