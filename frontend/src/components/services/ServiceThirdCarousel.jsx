import React from 'react'

const ServiceThirdCarousel = () => {
  return (
    <div>
            {/* Third Section - Carousels */}
      <div className="flex flex-col gap-30 py-20 px-[156px] items-center">
        {/* Row 1 */}
        <div className="flex gap-30 w-[1128px]">
          <div className="flex flex-col gap-10 w-[456px]">
            <div className="flex flex-col gap-6">
              <img src="/Service-image3.png" alt="confetti" className="w-[56px] h-[56px]" />
              <h4 className="font-bold text-[31px] leading-[1.2]">Private Party</h4>
              <p className="text-[16px] text-[#6B788E] font-normal leading-[1.8]">
                Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.
              </p>
            </div>

            <div className="flex py-4 pl-6 pr-4 w-[456px] h-[152px] justify-between items-center rounded-[12px] shadow-[6px_6px_12px_0px_#00000020]">
              <div className="flex flex-col">
                <h5 className="text-[#0C6967] font-bold text-[25px] leading-[1.2]">Scan the QR code</h5>
                <p className="leading-1.5 font-normal text-[14px] text-[#6B788E]">You can also check about the service</p>
              </div>
              <img src="/QR.png" alt="" className="w-[107px] h-[107px]" />
            </div>
          </div>

          <div className="w-[552px] h-[448px]">
            <img src="/ServiceCarousel1.png" alt="" />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex gap-30 w-[1128px]">
          <div className="w-[552px] h-[448px]">
            <img src="/ServiceCarousel1.png" alt="" />
          </div>

          <div className="flex flex-col gap-10 w-[456px]">
            <div className="flex flex-col gap-6">
              <img src="/Service-image4.png" alt="chefhat" className="w-[56px] h-[56px]" />
              <h4 className="font-bold text-[31px] leading-[1.2]">Catering</h4>
              <p className="text-[16px] text-[#6B788E] font-normal leading-[1.8]">
                Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.
              </p>
            </div>

            <div className="flex py-4 pl-6 pr-4 w-[456px] h-[152px] justify-between items-center rounded-[12px] shadow-[6px_6px_12px_0px_#00000020]">
              <div className="flex flex-col">
                <h5 className="text-[#0C6967] font-bold text-[25px] leading-[1.2]">Scan the QR code</h5>
                <p className="leading-1.5 font-normal text-[14px] text-[#6B788E]">You can also check about the service</p>
              </div>
              <img src="/QR.png" alt="" className="w-[107px] h-[107px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceThirdCarousel
