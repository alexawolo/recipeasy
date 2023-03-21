import { SlClose } from "react-icons/sl";

interface FilterProps {
    searchTerm: string
}

export default function Filter({ searchTerm }: FilterProps) {
  return (
    <div>
        <div className="flex items-center p-2 bg-gray-100 border rounded border-gray-500 w-fit">
            {/* Add action to remove from search */}
            <SlClose className="mr-1"/>
            <p className="text-xs">{ searchTerm }</p>
        </div>
    </div>
  )
}
