import React from 'react'

const Testimonials = () => {
  return (
    <div>

    {/* Testimonials infromative left section */}
    <div className='py-[83px] px-[156px]  flex justify-center gap-[96px] bg-[#FAFBFB]'>

      <div className='flex flex-col gap-[56px] w-[576px] h-[420px] justify-end'>
        <div className='gap-2 flex flex-col'>
          <h3 className='font-bold text-[39px]'>200+ <span className='text-[#D95103]'>Happy Customers</span></h3>
          <p className='text-[#0C6967] text-[25px] font-bold '>What our customers say about us</p>
        </div>

        <div className='gap-[24px]'>
          <div className='flex flex-col gap-6 '>
            <p className='text-[#252D43] text-[24px] font-normal italic '>
              “Only the best momo you can find in the market. Different Varieties of momo to choose from. Will be visiting again soon”</p>
            <h3 className='text-[#101828] text-[31px] font-bold'>Livia Dias</h3>
          </div>  
      </div>
      </div>
      


      {/* Testimonials right image section */}
      <div className=''>
        <img src="/sitinglady.png" alt="sitinglady" className='w-[456px] h-[576px] rounded-[8px]' />
      </div>
    </div>

    {/* Testimonials section end */}
    </div>
  )
}

export default Testimonials
