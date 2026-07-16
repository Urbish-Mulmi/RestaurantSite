import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { FaArrowRight } from "react-icons/fa"
import { useNavigate } from 'react-router'
import { getFoods } from '../../api/food.service'

const categories = ["Buff", "Chicken", "Veg"]
const VISIBLE_COUNT = 3
const ROTATE_INTERVAL = 3000 // 3 seconds — well under 10s

const OurRecipes = () => {
  const navigate = useNavigate()
  const [startIndex, setStartIndex] = useState(0)

  const { data, isPending, isError } = useQuery({
    queryKey: ["foods"],
    queryFn: getFoods,
  })

  const foods = data?.foods || []

  // Auto-rotate through items
  useEffect(() => {
    if (foods.length <= VISIBLE_COUNT) return // nothing to rotate if 3 or fewer items

    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % foods.length)
    }, ROTATE_INTERVAL)

    return () => clearInterval(interval)
  }, [foods.length])

  // Build the 3 items to show, wrapping around to the start of the array
  const visibleFoods = Array.from({ length: Math.min(VISIBLE_COUNT, foods.length) }, (_, i) =>
    foods[(startIndex + i) % foods.length]
  )

  return (
    <div>
      <div className='flex flex-col gap-[48px] items-center py-[64px] px-[156px]'>
        <div className='flex flex-col items-center gap-[16px]'>
          <h3 className='text-[39px] font-bold'>
            Our <span className='text-[#D95103]'>Most Popular</span> Recipes
          </h3>
          <p>Browse through a varieties of recipes with fresh ingredients selected only from the best places</p>
        </div>

        <div className='flex justify-center p-4 gap-6'>
          {categories.map((cat) => (
            <button
              key={cat}
              className='w-[133px] h-[56px] border-2 rounded-full text-[20px] font-semibold hover:border-[#D95103]'
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Auto-rotating 3-item display, no scrollbar */}
        <div className='w-full overflow-hidden'>
          <div className='flex gap-10 justify-center'>
            {isPending && (
              <p className='py-10 text-gray-500'>Loading dishes...</p>
            )}

            {isError && (
              <p className='py-10 text-red-500'>Couldn't load dishes right now.</p>
            )}

            {!isPending && !isError && foods.length === 0 && (
              <p className='py-10 text-gray-500'>No dishes found.</p>
            )}

            {!isPending && !isError && visibleFoods.map((food) => (
              <div
                key={food._id}
                onClick={() => navigate('/menu')}
                className='flex flex-col items-center gap-3 cursor-pointer group transition-opacity duration-500'
              >
                <img
                  src={food.photo}
                  alt={food.name}
                  className='w-[288px] h-[288px] rounded-2xl object-cover group-hover:scale-105 transition-transform duration-300'
                />
                <p className='font-semibold text-lg'>{food.name}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => navigate('/menu')}
          className="bg-[#0C6967] text-white flex items-center gap-3 py-5 px-10 rounded-full mt-8 w-[249px] h-[64px] rounded-[100px] flex justify-center"
        >
          Explore Our Menu<FaArrowRight />
        </button>
      </div>
    </div>
  )
}

export default OurRecipes