import React from 'react'

const AboutUsthird = () => {
  return (
    <div>
     {/* about 3rd section */}

      <div className="flex flex-col px-[156px] py-[144px] gap-[144px] ">
        {/* row1 */}
        <div className="flex gap-30 justify-around items relative">
          <div className="flex flex-col w-[456px] gap-4">
            <h3 className="text-[39px] font-bold">
              Our momos are{" "}
              <span className="text-[#D95103]"> made with love</span>
            </h3>
            <p className="text-[#6B788E] font-[400px]  text-[20px] leading-[1.6]">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
              adipiscing. Leo odio tincidunt ipsum magna lacus viverra
              tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum
              velit viverra gravida consectetur sed facilisis ut morbi.
            </p>
          </div>

          {/* chef image relative */}
          <div className="w-[555px] h-[448px] ">
            <img
              src="/About-image3.png"
              alt=""
              className=" rounded-[4px] relative z-0"
            />
          </div>

          {/* image positioning between left texts and right image */}

          <div className=" w-[264px] h-[191px] absolute -bottom-10 right-[40%] z-3">
            <img src="/About-image4.png" alt="" />
          </div>
        </div>
        {/* row1 end */}

        {/* row2 */}
        <div className="flex gap-30 justify-around items relative">
          {/* chef image relative */}
          <div className="w-[555px] h-[448px] ">
            <img
              src="/About-image5.png"
              alt=""
              className=" rounded-[4px] relative z-0"
            />
          </div>

          <div className="flex flex-col w-[456px] gap-4">
            <h3 className="text-[39px] font-bold">
              Taste the difference with{" "}
              <span className="text-[#D95103]"> our handcrafted momos</span>
            </h3>
            <p className="text-[#6B788E] font-[400px]  text-[20px] leading-[1.6]">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
              adipiscing. Leo odio tincidunt ipsum magna lacus viverra
              tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum
              velit viverra gravida consectetur sed facilisis ut morbi.
            </p>
          </div>

          {/* image positioning between left texts and right image */}

          <div className=" w-[263px] h-[170px] absolute -bottom-10 left-[40%] z-3">
            <img src="/About-image6.png" alt="" />
          </div>
        </div>
        {/* row2 end */}

        {/* row3 */}
        <div className="flex gap-30 justify-around items relative">
          <div className="flex flex-col w-[456px] gap-4">
            <h3 className="text-[39px] font-bold">
              Our momos are the perfect{" "}
              <span className="text-[#D95103]"> blend of tradition </span>and{" "}
              <span className="text-[#D95103]">innovation</span>
            </h3>
            <p className="text-[#6B788E] font-[400px]  text-[20px] leading-[1.6]">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
              adipiscing. Leo odio tincidunt ipsum magna lacus viverra
              tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum
              velit viverra gravida consectetur sed facilisis ut morbi.
            </p>
          </div>

          {/* chef image relative */}
          <div className="w-[552px] h-[448px] ">
            <img
              src="/About-image7.png"
              alt=""
              className=" rounded-[4px] relative z-0"
            />
          </div>

          {/* image positioning between left texts and right image */}

          <div className=" w-[360px] h-[238px] absolute -bottom-22 right-[35%] z-3">
            <img src="/About-image8.png" alt="" />
          </div>
        </div>
        {/* row3 end */}

        </div>
    {/* about 3rd section ends*/}
    </div>
  )
}

export default AboutUsthird
