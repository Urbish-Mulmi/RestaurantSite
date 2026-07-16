import React from "react";

const AboutUsfourth = () => {
  return (
    <div>
      {/* About quote and image */}
      <div className="w-full max-w-[1440px] h-[640px] flex mx-auto">

        {/* LEFT SIDE */}
        <div className="relative w-1/2 h-full overflow-hidden">

          {/* Background image */}
          <img
            src="/About-restaurant-bg.png"
            alt="restaurant"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Modern gradient glass overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40 backdrop-blur-xl"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center h-full px-[80px] text-white gap-6">

            {/* Quote icon */}
            <img
              src="/About-Quoteimage.png"
              alt="quote"
              className="w-12 h-12"
            />

            {/* Quote text */}
            <p className="text-[20px] leading-[1.6] max-w-[480px]">
              Momo is not just about sustenance, it's about bringing people
              together and creating memories. At our restaurant, we strive to
              create a warm and inviting atmosphere where our guests can enjoy
              delicious momo, great company, and unforgettable experiences.
            </p>

            {/* Author */}
            <div>
              <p className="font-bold text-[24px]">Marcus Schleifer</p>
              <p className="text-[16px] opacity-80">CEO</p>
            </div>

            {/* Navigation arrows */}
            <div className="flex gap-4 mt-4">
              <button className="w-[40px] h-[40px] border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
                ←
              </button>

              <button className="w-[40px] h-[40px] border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
                →
              </button>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="w-1/2 h-full">
          <img
            src="/About-image10.png"
            alt="team member"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
      {/* About quote and image end */}
    </div>
  );
};

export default AboutUsfourth;