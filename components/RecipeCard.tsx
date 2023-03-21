import { AiFillStar } from "react-icons/ai";

interface RecipeCard {
    image: string,
    title: string,
    prepTime: string,
    rating: number
}

export default function RecipeCard({ image, title, prepTime, rating}: RecipeCard) {
  return (
    <button className="rounded">
        <div className="bg-gray-100 w-[250px] h-[150px] rounded-t">
            {/* Image */}
        </div>
        <div className="p-2 border rounded-b">
            <p className="mb-2">{title}</p>
            <div className="flex flex-col text-right">
                <p className="text-xs">{prepTime}</p>
                <div className="flex items-align justify-end">
                    <AiFillStar />
                    <p className="text-xs">{rating}</p>
                </div>
            </div>
        </div>
    </button>
  )
}
