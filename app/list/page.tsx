'use client'
import { useRouter } from 'next/router';
import React, { useState } from 'react'

export default function page() {
  console.log('in list page')
  // const [shoppingList, setShoppingList] = useState([])

  const router = useRouter();
  const { values } = router.query;

  console.log('values', router.query.values)

  // Parse the JSON string back into an array
  const parsedValues = values ? JSON.parse(values as string) : [];

  console.log(parsedValues); // Access the array of values

  return (
    <div>
      List Page
      {parsedValues}
    </div>
  )
}
