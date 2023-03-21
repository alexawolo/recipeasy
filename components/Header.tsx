import { TbChefHat } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import Link from 'next/link';

export default function Header() {
  return (
    <div>
        <div className="flex items-center justify-between p-4">
            <Link href="/" className="flex items-center hover:text-yellow-500">
                <h1 className="m-1 hidden lg:flex">Recipeasy</h1>
                <TbChefHat/>
            </Link>
            {/* Personalize with logged in user's name */}
            <p className="text-sm">Welcome back, User!</p>
            <Link href="/profile" className="hover:text-yellow-500">
                <CgProfile />
            </Link>
        </div>
    </div>
  )
}
