import { BsSearch, BsCardChecklist, BsBookmarkHeart } from "react-icons/bs";
import Link from 'next/link';

export default function Navigation() {
  return (
    <div>
        <div className="flex justify-around p-1 border border-black rounded-t fixed bottom-0 w-full">
            <ul>
                {/* Home page with list of recipes and search bar */}
                <Link href="/" className="flex items-center m-2">
                    <BsSearch className="m-1 hover:text-yellow-500 active:text-yellow-500"/>
                    <p className="hidden lg:flex">Recipes</p>
                </Link>
            </ul>
            <ul>
                {/* List of all grocery lists created and saved */}
                <Link href="/lists" className="flex items-center m-2">
                    <BsCardChecklist className="m-1 hover:text-yellow-500 active:text-yellow-500"/>
                    <p className="hidden lg:flex">Lists</p>
                </Link>
            </ul>
            <ul>
                {/* All saved recipes, lists */}
                <Link href="/favourites" className="flex items-center m-2">
                    <BsBookmarkHeart className="m-1 hover:text-yellow-500 active:text-yellow-500"/>
                    <p className="hidden lg:flex">Saved</p>
                </Link> 
            </ul>
        </div>
    </div>
  )
}
