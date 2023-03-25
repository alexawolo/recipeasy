import Link from 'next/link';

interface FilterProps {
    key: number
    filterTerm: string
}

export default function Filter({ key, filterTerm }: FilterProps) {
  return (
      <Link href={`/search/${filterTerm}`} key={key} className="mt-1 mr-2 mb-4 last:mr-0 flex items-center p-3 shadow-md rounded-xl w-fit hover:bg-orange-500 hover:text-white active:bg-orange-500 active:text-white min-w-max">
          <p className="text-md">{ filterTerm }</p>
      </Link>
  )
}
