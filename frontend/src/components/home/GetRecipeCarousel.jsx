// import React, { useEffect, useState } from 'react'
// import axios from "axios"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css"; 
// import Slider from "react-slick";

// const GetRecipeCarousel = () => {

//   const [recipes, setRecipes] = useState([]);
//   const getRecipes = async()=>{
//     try {
//       const res = await axios.get("https://dummyjson.com/recipes?limit=10");
//       console.log("try block->API is working"+res)
//       console.log(res)
//       setRecipes(res.data.recipes)
      
//     } catch (error) {
//       console.log(`catch block->api error`)
      
//     }
     
//   }

//   useEffect(() => {
//     getRecipes();   
//   }, [])
  

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed:2000,
//   };

//   return (
//     <div className="w-full mx-auto   p-20">
//       {recipes.length > 0 ? (
//         <Slider {...settings}>
//           {recipes.map((recipe) => (
//             <div
//               key={recipe.id}
//               className="p-4">            
//               <div className="bg-white  shadow-lg rounded-xl p-4 text-center">
//                 <img
//                   src={recipe.image}
//                   alt={recipe.name}
//                   className="w-full h-70 object-cover rounded-lg"
//                 />
//                 <h2 className="text-xl font-semibold mt-3">{recipe.name}</h2>
//                 <h3 className="text-orange-700 text-2xl font-bold">
//                   Rs. {recipe.caloriesPerServing}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       ) : (
//         <div className="text-center text-gray-500">Loading Recipes...</div>
//       )}
//     </div>
//   );
// };

// export default GetRecipeCarousel;

