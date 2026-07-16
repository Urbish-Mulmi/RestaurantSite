import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logoutUser } from "../api/auth.service";
import { AuthSuccess, LogoutSuccess } from "../redux/features/authSlice";
import { clearCart } from "../redux/features/cartSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const linkStyles = ({ isActive }) =>
    `py-2 px-3 font-medium transition-colors duration-200 ${
      isActive ? "text-[#0C6967] font-semibold" : "text-[#6B788E] hover:text-[#0C6967]"
    }`;

  const ctaStyles =
    "bg-[#D95103] px-8 py-3 text-white text-base font-semibold rounded-full whitespace-nowrap flex items-center justify-center hover:bg-[#b84302] transition-all duration-200";

  const outlineCtaStyles =
    "border-2 border-[#0C6967] text-[#0C6967] px-8 py-3 text-base font-semibold rounded-full whitespace-nowrap flex items-center justify-center hover:bg-[#0C6967] hover:text-white transition-all duration-200";

  const handleLogout = async () => {
    await logoutUser();
    dispatch(LogoutSuccess());
    dispatch(clearCart());
    navigate("/");
    setMenuOpen(false);
  };

  // validates the httpOnly JWT cookie against the backend on mount
  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUser();
      dispatch(AuthSuccess(res.user));
    };
    fetchUser();
  }, [dispatch]);

  return (
    <nav className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-16 shadow-md min-h-20 fixed top-0 w-full z-50 bg-white">
      {/* Logo & primary browsing links */}
      <div className="flex items-center gap-6">
        <div
          className="flex items-center gap-2 hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          <NavLink to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="logo" className="w-10 h-10" />
            <h5 className="text-[#0C6967] font-bold text-xl sm:text-2xl">momos</h5>
          </NavLink>
        </div>

        <div className="hidden min-[900px]:flex gap-2 font-medium">
          <NavLink className={linkStyles} to="/menu">
            Our Menu
          </NavLink>
          <NavLink className={linkStyles} to="/about">
            About Us
          </NavLink>
          <NavLink className={linkStyles} to="/service">
            Our Services
          </NavLink>
        </div>
      </div>

      {/* Account area: same slot whether logged in or out - desktop */}
      <div className="hidden min-[900px]:flex items-center gap-4">
        <NavLink className={linkStyles} to="/cart">
          Cart
        </NavLink>

        {isAuthenticated && user ? (
          <>
            {/* <NavLink className={linkStyles} to="/profile">
              Profile
            </NavLink> */}
            <button onClick={handleLogout} className={ctaStyles}>
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className={outlineCtaStyles}>
              Login
            </NavLink>
            <NavLink to="/sign-up" className={ctaStyles}>
              Signup
            </NavLink>
          </>
        )}
      </div>

      {/* Hamburger - mobile */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="min-[900px]:hidden text-[#252D43] p-2"
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Dropdown menu - mobile */}
      {menuOpen && (
        <div className="min-[900px]:hidden absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start gap-1 border-t border-gray-100 px-4 py-3">
          <NavLink className={linkStyles} to="/menu" onClick={() => setMenuOpen(false)}>
            Our Menu
          </NavLink>
          <NavLink className={linkStyles} to="/about" onClick={() => setMenuOpen(false)}>
            About Us
          </NavLink>
          <NavLink className={linkStyles} to="/service" onClick={() => setMenuOpen(false)}>
            Our Services
          </NavLink>

          {isAuthenticated && user ? (
            <>
              <NavLink className={linkStyles} to="/cart" onClick={() => setMenuOpen(false)}>
                Cart
              </NavLink>
              <NavLink className={linkStyles} to="/profile" onClick={() => setMenuOpen(false)}>
                Profile
              </NavLink>
              <button onClick={handleLogout} className={`${ctaStyles} mt-2 w-full`}>
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink className={linkStyles} to="/cart" onClick={() => setMenuOpen(false)}>
                Cart
              </NavLink>
              <div className="flex flex-col gap-2 mt-2 w-full">
                <NavLink to="/login" className={outlineCtaStyles} onClick={() => setMenuOpen(false)}>
                  Login
                </NavLink>
                <NavLink to="/sign-up" className={ctaStyles} onClick={() => setMenuOpen(false)}>
                  Signup
                </NavLink>
              </div>
            </>
          )}

          <div className="flex gap-4 mt-3">
            <FaFacebook size={28} className="text-[#A6AEBB] hover:text-blue-500 transition-all duration-300" />
            <FaTiktok
              size={28}
              className="bg-[#A6AEBB] text-white p-1.5 rounded-full hover:bg-black transition-all duration-300"
            />
            <FaInstagram
              size={28}
              className="bg-[#A6AEBB] text-white p-1.5 rounded-full hover:bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] transition-all duration-300"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;