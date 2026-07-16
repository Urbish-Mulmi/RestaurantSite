import React from "react";
import { FaClock, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";

const HomeInquiry = () => {
  return (
    <div className="px-[156px] py-[64px] flex flex-col items-center gap-[56px] bg-white">

      {/* Heading */}
      <div className="flex flex-col items-center text-center">
        <h3 className="font-bold text-[39px] text-[#101828]">
          Get <span className="text-[#D95103]">In Touch</span>
        </h3>
        <h5 className="text-[#0C6967] text-[25px] font-bold">
          Our Friendly team would love to hear from you
        </h5>
      </div>

      {/* Main Container */}
      <div className="flex justify-evenly w-[1128px] rounded-3xl p-[20px] gap-[40px] bg-[#f1f3f4e5] shadow-md">

        {/* LEFT PANEL */}
        <div className="flex flex-col w-[461px] rounded-[16px] p-8 bg-[#0C6967] gap-[40px] text-white">

          {/* Address */}
          <div className="flex flex-col gap-6">
            <p className="flex items-center gap-2 text-[20px] font-semibold">
              <FaLocationDot size={20} />
              Our Address
            </p>
            <p className="italic text-white/80">
              Balkumari, Lalitpur, Nepal
            </p>
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-6">
            <p className="flex items-center gap-2 text-[20px] font-semibold">
              <IoIosCall size={20} />
              Our Contacts
            </p>

            <div className="flex gap-[56px]">
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Mobile</p>
                <p className="italic text-white/80">980-5689789</p>
                <p className="italic text-white/80">9841-275897</p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-semibold">Landline</p>
                <p className="italic text-white/80">01-4783972</p>
              </div>
            </div>
          </div>

          {/* Service Time */}
          <div className="flex flex-col gap-6">
            <p className="flex items-center gap-2 text-[20px] font-semibold">
              <FaClock size={20} />
              Our Service Time
            </p>

            <div className="flex gap-[56px]">
              <div className="flex flex-col gap-2">
                <p className="font-semibold">MON - FRI</p>
                <p className="italic text-white/80">10 am - 8 pm</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold">SAT - SUN</p>
                <p className="italic text-white/80">Closed</p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-6 pt-6 mt-auto border-t border-white/20">
            <p className="italic text-white/80 pt-6">Get in touch in social networks</p>
            <div className="flex gap-4">
              <FaFacebook size={28} className="cursor-pointer hover:text-[#D95103] hover:scale-110 transition-all" />
              <FaInstagram size={28} className="cursor-pointer hover:text-[#D95103] hover:scale-110 transition-all" />
              <FaTiktok size={28} className="cursor-pointer hover:text-[#D95103] hover:scale-110 transition-all" />
            </div>
          </div>

        </div>

        {/* RIGHT PANEL (FORM) */}
        <div className="flex-1">
          <form className="flex flex-col bg-white rounded-2xl py-10 px-8 gap-6 shadow-sm h-full">

            {/* Name Row */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                  First Name <span className="text-[#D95103]">*</span>
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  className="h-12 border border-gray-200 rounded-md px-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0C6967] focus:border-transparent transition"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                  Last Name <span className="text-[#D95103]">*</span>
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  className="h-12 border border-gray-200 rounded-md px-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0C6967] focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email <span className="text-[#D95103]">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                className="h-12 border border-gray-200 rounded-md px-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0C6967] focus:border-transparent transition"
              />
            </div>

            {/* Service Dropdown */}
            <div className="flex flex-col gap-2">
              <label htmlFor="service" className="text-sm font-medium text-gray-700">
                What can we do for you
              </label>
              <select
                id="service"
                className="h-12 border border-gray-200 rounded-md px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0C6967] focus:border-transparent transition cursor-pointer"
              >
                <option>Choose</option>
                <option>Customer Support</option>
                <option>Sales Inquiry</option>
                <option>General Feedback</option>
              </select>
            </div>

            {/* Phone with country code */}
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Phone
              </label>
              <div className="flex gap-2">
                <select
                  className="h-12 border border-gray-200 rounded-md px-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0C6967] focus:border-transparent transition cursor-pointer w-[110px]"
                >
                  <option>🇳🇵 +977</option>
                  <option>🇮🇳 +91</option>
                  <option>🇺🇸 +1</option>
                  <option>🇬🇧 +44</option>
                  <option>🇦🇺 +61</option>
                </select>
                <input
                  id="phone"
                  type="tel"
                  placeholder="98X-XXXXXXX"
                  className="h-12 flex-1 border border-gray-200 rounded-md px-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0C6967] focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Tell us how we can help..."
                className="border border-gray-200 rounded-md px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0C6967] focus:border-transparent transition resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-[#D95103] text-white py-4 px-10 rounded-full font-semibold hover:bg-[#b84202] active:scale-[0.98] transition-all shadow-sm shadow-orange-200 w-[256px] self-start"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeInquiry;