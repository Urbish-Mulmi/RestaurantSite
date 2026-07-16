import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getFoods } from '../../api/food.service'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { add } from '../../redux/features/cartSlice'

const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["foods"],
    queryFn: getFoods,
  });

  // Smooth Animated Loading State
  if (isPending) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500 mb-4"></div>
        <p className="text-gray-600 font-medium animate-pulse">Loading delicious food menu...</p>
      </div>
    );
  }

  // Clean Error State
  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
        <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl max-w-md text-center shadow-sm">
          <p className="font-bold text-lg mb-1">Oops! Something went wrong</p>
          <p className="text-sm text-red-600">{error?.message || "Failed to fetch the menu."}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Header section */}
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Our Special <span className="text-orange-500">Menu</span>
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg sm:text-xl text-gray-500">
          Freshly prepared, delicious meals delivered straight to your craving zone.
        </p>
      </div>

      {/* Food Grid: Responsive gaps and column count */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {data?.foods?.map((food) => (
          <div
            key={food._id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
          >
            {/* Food Image Container */}
            <div className="relative h-48 sm:h-56 w-full bg-gray-200 overflow-hidden">
              <img
                onClick={() => navigate(`/menu/${food._id}`, { state: food })}
                src={food.photo}
                alt={food.name}
                className="w-full h-full object-cover object-center cursor-pointer hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Food Details */}
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 line-clamp-1">
                  {food.name}
                </h3>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-500 line-clamp-2">
                  {food.description || "No description available for this item."}
                </p>
              </div>

              {/* Price and Action button */}
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-lg sm:text-xl font-extrabold text-orange-600">
                  Rs.{food.price}
                </span>
                <button
                  onClick={() => {
                    dispatch(add(food));
                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors shadow-sm"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;