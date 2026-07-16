import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 mt-auto pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* 
          Grid layout: 
          - 1 column on mobile 
          - 2 columns on tablet 
          - 4 columns on desktop 
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand (Takes more space) */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="logo" className="w-10 h-10" />
              <h4 className="font-bold text-2xl text-[#0C6967]">momos</h4>
            </div>
            <p className="text-[#6B788E] text-sm leading-relaxed">
              YUMMY FOODS FOR YOUR TUMMY!
            </p>
          </div>

          {/* Column 2: Nav */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-lg text-[#0C6967]">Company</h4>
            <div className="flex flex-col gap-3">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/menu">Our Menu</FooterLink>
              <FooterLink to="/service">Our Services</FooterLink>
            </div>
          </div>

          {/* Column 3: Legals */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-lg text-[#0C6967]">Legals</h4>
            <div className="flex flex-col gap-3">
              <FooterLink to="/">Terms & Conditions</FooterLink>
              <FooterLink to="/">Privacy Policy</FooterLink>
              <FooterLink to="/">Support</FooterLink>
            </div>
          </div>

          {/* Column 4: Follow Us (Icons) */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-lg text-[#0C6967]">Follow Us</h4>
            <div className="grid grid-cols-3 gap-3 max-w-[150px]">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <img 
                  key={i} 
                  src={`/footer-icon${i}.png`} 
                  alt="social" 
                  className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform" 
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[#6B788E] text-sm">
          <p>© {new Date().getFullYear()} Momo & Cuisines Pvt Ltd. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-[#0C6967]">Privacy</Link>
            <Link to="/" className="hover:text-[#0C6967]">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Simple helper for consistent link styles
const FooterLink = ({ to, children }) => (
  <Link to={to} className="text-[#6B788E] hover:text-[#D95103] transition-colors w-fit">
    {children}
  </Link>
);

export default Footer;