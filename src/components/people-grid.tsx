'use client'

import { people } from '@/utils/constans'
import Image from 'next/image'
import React, { useState } from 'react'
import FilterGroup from './filter-group'
import Link from 'next/link'

import {FiArrowRight} from 'react-icons/fi'

const PeopleGrid = () => {
    const [category, setCategory] = useState('all')

    const handleTagClick = (tag: string) => {
        setCategory(tag)
    }

    const filteredPeople = category === 'all'
    ? people 
    : people.filter((person) => person.areasOfExpertise.includes(category))
  return (
    <>
    <div className="w-full px-6 items-center justify-center flex mx-auto md:max-w-5xl ">
      <FilterGroup category={category} handleTagClick={handleTagClick}/>
    </div>
    <div className="mx-auto md:max-w-5xl w-full ">
        <div className="min-h-screen px-8">
          <div className="pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            {filteredPeople.map((item, idx) => (
             <div key={idx} className='flex flex-col items-center border p-4 rounded-xl shadow-lg'>
                <div className="h-48 w-48 rounded-full">
                <Image
                    src={item.image}
                    alt={item.name}
                    width={200}
                    height={200}
                    className="h-full w-full object-cover rounded-full border"
                  />
                </div>

                <span className="font-medium mt-2 text-xl">{item.name}</span>
                <span className="text-gray-600 mt-2 items-left line-clamp-2">
                  {item.bio}
                </span>

                <Link
                  href={`/person/${item._id}`}
                  className="flex flex-row items-center group space-x-1 justify-end mt-2 w-full"
                >
                  <span className="font-medium py-2 text-sky-600 group-hover:text-sky-300">
                    Learn More
                  </span>
                  <FiArrowRight
                    size={18}
                    className="group-hover:text-gray-600"
                  />
                </Link>
             </div>
            ))}
          </div>
        </div>
    </div>
    </>
  )
}

export default PeopleGrid