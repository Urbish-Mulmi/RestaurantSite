import React from "react";

const AboutUsfifth = () => {
  return (
    <div>
      {/* About us our team section */}
      <div className="ourteam flex flex-col py-20 px-[156px] gap-10 items-center justify-center">

        {/* Section title */}
        <div className="flex flex-col gap-2 items-center">
          <h2 className="font-bold text-[49px]">
            Meet The <span className="text-[#D95103]">Team</span>
          </h2>

          <h5 className="font-bold text-[25px] text-[#0C6967]">
            Our talented team members who delivers only the best results
          </h5>
        </div>

        {/* Chef cards */}
        <div className="flex gap-6">

          {/* Chef 1 */}
          <div className="relative w-[360px] h-[512px] overflow-hidden rounded-[6px]">
            <img
              src="/About-chef1.png"
              alt="Head Chef"
              className="w-full h-full object-cover"
            />

            {/* bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* title */}
            <p className="absolute bottom-6 left-6 text-white text-[28px] font-bold">
              Head Chef
            </p>
          </div>

          {/* Chef 2 */}
          <div className="relative w-[360px] h-[512px] overflow-hidden rounded-[6px]">
            <img
              src="/About-chef2.png"
              alt="Assistant Chef"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            <p className="absolute bottom-6 left-6 text-white text-[28px] font-bold">
              Assistant Chef
            </p>
          </div>

          {/* Chef 3 */}
          <div className="relative w-[360px] h-[512px] overflow-hidden rounded-[6px]">
            <img
              src="/About-chef3.png"
              alt="Assistant Chef"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            <p className="absolute bottom-6 left-6 text-white text-[28px] font-bold">
              Assistant Chef
            </p>
          </div>

        </div>
        {/* About us our team section end*/}
      </div>
    </div>
  );
};

export default AboutUsfifth;