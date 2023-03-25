'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    router.push(`/search/${query}`);
  };

  return (
    <form onSubmit={handleSubmit} className="border rounded-md flex py-1 px-2 justify-between">
      <input
        type="text"
        placeholder="Search for recipes by ingredient or cuisine type"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className="w-full mr-2 p-1"
      />
      <button type="submit" className="w-fit bg-blue-100 px-4 py-2 border border-blue-100 rounded hover:bg-blue-200">Search</button>
    </form>
  );
}



