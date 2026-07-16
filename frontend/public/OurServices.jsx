import React from "react";

const OurServices = () => {
  return (
    <div>
      {/* Section Title */}
      <div className="flex flex-col items-center justify-center bg-[#F7F9FC] gap-[16px]">
        <div className="bg-[#F7F9FC]">
          <h3 className="font-bold text-[39px] flex items-center py-[80px] px-[156px]">
            <span className="text-[#D95103] mr-2">We Offer People</span>
            The Service They Want
          </h3>
        </div>

        {/* Hero Image with Overlay and Text */}
        <div className="w-full h-[720px] overflow-hidden relative">
          <img
            src="images/chef.png"
            alt="chef"
            className="w-full h-full object-cover"
          />

          {/* Subtle black overlay */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col gap-[48px] items-center justify-center text-center">
            <div className="flex flex-col gap-[8px] items-center justify-center text-center">
              <h2 className="text-[49px] font-bold leading-1.2 text-white">
                Process behind the making
              </h2>
              <p className="text-[25px] text-white">
                See how only chefs cooks only the best momos
              </p>
            </div>
            <button className="bg-[#0C6967] text-white px-10 h-[64px] rounded-[100px] flex items-center justify-center gap-2">
              <img
                src="/images/play.png"
                alt=""
                className="w-[32px] h-[32px]"
              />
              <span>Watch the Video</span>
            </button>
          </div>
        </div>

        {/* Service Icons Section */}
        <div className="flex flex-col items-center gap-[40px] px-[156px] py-[64px]">
          <div className="flex gap-[24px] justify-center w-[1128px]">
            <img
              src="images/icon1.png"
              alt=""
              className="w-[365px] h-[290px] rounded-[16px] p-[10px]"
            />
            <img
              src="images/icon2.png"
              alt=""
              className="w-[365px] h-[290px] rounded-[16px] p-[10px]"
            />
            <img
              src="images/icon3.png"
              alt=""
              className="w-[365px] h-[290px] rounded-[16px] p-[10px]"
            />
          </div>

          {/* Explore Menu Button */}
          <button className="bg-[#0C6967] text-white px-10 py-5 w-[249px] h-[64px] rounded-[100px] flex items-center justify-center gap-2">
            Explore Our Menu
            <img
              src="/images/RightArrow.png"
              alt=""
              className="w-[24px] h-[24px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurServices;