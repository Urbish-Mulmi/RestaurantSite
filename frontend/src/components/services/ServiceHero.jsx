import React from 'react'

console.log("service hero");

const ServiceHero = () => {
  return (
    <div>
      {/* First hero Section */}
      <div className="max-w-[1440px] mx-auto px-[156px] py-[56px] h-[85vh] flex justify-around items-start gap-[58px]">
        
        {/* Left text content with top padding */}
        <div className="flex flex-col gap-20 pt-20">
          <img src="/Service-text.png" alt="" className="w-[254px]" />
          <div className="flex flex-col w-[600px] gap-6">
            <p className="text-[#6B788E] font-light text-[24px]">
              KNOWING OUR CUSTOMERS NEEDS
            </p>
            <div>
              <p className="text-[#D95103] font-bold text-[31px] leading-[1.2]">
                We're more than just momos.
              </p>
              <p className="text-[#101828] font-bold text-[31px] leading-[1.2]">
                We're a full-service dining experience.
              </p>
            </div>
          </div>
        </div>

        {/* Right-hand side image */}
        <div className="self-start mt-10">
          <img
            src="/Service-image1.png"
            alt="About-image1"
            className="w-[494px] h-[494px]"
          />
        </div>
      </div>
    </div>
  )
}

export default ServiceHero;