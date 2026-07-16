import React from 'react'
import { useNavigate } from 'react-router'
import { FaArrowRight } from "react-icons/fa";
// import Description from './Description';
const Hero = () => {
  const navigate = useNavigate();
  return (

    <div>

    <div className='flex items-center justify-between h-screen pl-20 overflow-hidden'>
      <div>
        <h3 className='text-[#6B788E]'>RESTAURANT</h3>
        <h1 className='text-[61px] font-bold'>The {" "}
            
          <span
            className="
              inline-block
              px-6 
              text-white
              bg-[url(/images/spanimage.png)]
              bg-contain
              bg-no-repeat
              bg-center">
            #One </span> <br />             
          Momo <span className='text-[#D95103]'>Restaurant</span> </h1>
        <p className='font-semibold text-[#252D43] text-xl'>
          More than <span className='text-[#D95103] font-bold text-[25px]' >
            20+ Varieties</span> of momo available for you
        </p>
        
       <button 
       onClick={() => navigate('/menu')}
       className="bg-[#0C6967] text-white flex items-center gap-3 px-8 py-3 rounded-full mt-8">
            Explore Food Menu <FaArrowRight />
          </button>

      </div>

{/* Right Content Image Section */}
      <div className='relative w-1/2 h-full flex items-center'>
        
        {/* 1. The Orange Circle: Set large and shifted UP (-top-20) to show bottom curve */}
        <img 
          src="/circle.png" 
          alt="orange-background"
          className='absolute -right-10 -top-20 h-[115vh] w-auto object-contain z-0' 
        />

        {/* 2. The Momo Plate: Pushed LEFT (right-24) to overlap into the white space */}
        <img 
          src="/momos.png" 
          alt="momo-plate" 
          className='relative z-20 w-[650px] right-24 drop-shadow-2xl' 
        />

       
      </div>
    </div>      
             
    </div>
  )
}

export default Hero
