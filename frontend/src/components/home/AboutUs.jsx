import React from 'react'
import { FaArrowRight } from "react-icons/fa";
const AboutUs = () => {
  return (
    <div>       
       <div 
       className='After-hero-section px-[156px] py-[64px] flex items-center justify-center gap-[86px]'>

        <div>
          <img src="/section1man.png" alt="standingmanImage" className='w-[490px] h-[598px]'/>
        </div>

        <div className='flex flex-col gap-[40px] w-[522px] h-[319px]'>
          <h3 className='font-bold flex gap-2 text-[39px] font-bold'>Why Customers <span className='text-[#D95103]'>Love us</span></h3>

          <p className='text-[#6B788E] font-[400px] text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis doloribus ea, cupiditate atque provident minus molestiae exercitationem nemo tenetur nesciunt, animi enim asperiores nisi odit accusantium totam sed excepturi optio.</p>         

          <button className="bg-[#0C6967] text-white flex items-center gap-3 px-8 py-3 w-[247px] h-[64px] py-5 px-10 rounded-full mt-8">
             Explore Our Story<FaArrowRight />
          </button>
        </div>
      </div>    
    </div>

  )
}

export default AboutUs
