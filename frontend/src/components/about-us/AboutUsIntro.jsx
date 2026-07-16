import React from "react";

const AboutUsIntro = () => {
  return (
    <div>
      {/* AboutusHero section */}
      <div className="max-w-[1440px] mx-auto pt-20 min-h-screen flex justify-around  items-center">
        <div className="flex flex-col gap-20">
          <img src="/About-text.png" alt="" className="w-100" />

          <div className="flex flex-col w-[522px] gap-6">
            <p className="text-[#6B788E] font-light text-[20px]">
              WE PRIDE OURSELF ON
            </p>
            <div>
              <p className="text-[#D95103] font-bold text-[39px]">
                Our authentic momo recipes
              </p>
              <p className="text-[#101828] font-bold text-[39px]">
                passed down through <br /> generations
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/About-image1.png"
            alt="About-image1"
            className="w-[583px] h-[631px] "
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsIntro;
