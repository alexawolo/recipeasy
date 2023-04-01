'use client'
import Link from 'next/link';
import { RiFileList3Line, RiArrowLeftSLine } from "react-icons/ri";
import {usePathname} from 'next/navigation';

export default function Header() {
  const router = usePathname()

  return (
    <div className="sticky top-0">
        <div className="flex items-center justify-between p-4 px-3">
            { router !== '/' ? 
            <Link href="/" className="flex text-xs items-center hover:text-red-400">
              <RiArrowLeftSLine className="text-2xl hover:text-red-400"/>
            </Link> :
            <div></div>
            }

            <Link href="/list" className="flex items-center justify-center p-2 rounded-xl bg-red-400 hover:bg-red-500 text-white">
                <RiFileList3Line />
            </Link>
        </div>
    </div>
  )
}
