import React from 'react';

const AboutUsSecond = () => {
  return (
    <div>
      {/* Second Section with overlay */}
      <div className="relative w-full h-[608px]">
        <img
          src="/About-image2.png"
          alt="Momos process"
          className="w-full h-full object-cover"
        />

        {/* Subtle black overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Text overlay */}
        <div className="absolute bottom-20 left-52 flex flex-col gap-4 text-white">
          <h2 className="font-bold text-[49px] leading-[1.2]">
            Process behind the making
          </h2>
          <p className="font-normal text-[25px] leading-[1.2]">
            See how we make momos that you like from only the best ingredients
          </p>

          {/* Limited size button, left-aligned */}
          <button className="w-[220px] h-[64px] bg-[#0C6967] text-white rounded-full flex items-center justify-center gap-2 mt-4">
            <img
              src="/play.png"
              alt="Play"
              className="w-[32px] h-[32px] flex-shrink-0"
            />
            <span className="text-[16px] font-medium whitespace-nowrap">
              Watch the Video
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSecond;