import React from 'react'

const ServiceFourthQuerie = () => {
  return (
    <div>
      {/* Fourth Section - Queries Section */}
      <div className="flex flex-col items-center justify-center pb-20 px-[156px] gap-20">
        <div className="flex flex-col rounded-[24px] p-16 gap-10 items-center justify-center bg-[#F5F6F7] w-[1128px]">
          <div className="flex flex-col gap-3 items-center">
            <h4 className="font-bold text-[31px] leading-[1.2] text-[#101828]">Got any Queries?</h4>
            <p className="text-[#6B788E] font-normal text-[18px] leading-[1.8]">
              If you have any queries, send us a message. Our friendly team would love to hear from you
            </p>
          </div>

          <button className="bg-[#0C6967] text-white px-10 py-5 rounded-full w-[216px] h-[60px] leading-1.2 font-medium text-[16px]">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  )
}

export default ServiceFourthQuerie
