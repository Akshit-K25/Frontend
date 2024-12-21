import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaSignInAlt, FaBars, FaDumbbell, FaBed } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Navigation = () => {
  const [atTop, setAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const searchRef = useRef(null);  // Ref to the search box

  // Get the navigate function from useNavigate hook
  const navigate = useNavigate();

  // Handle scroll event
  const handleScroll = () => {
    setAtTop(window.scrollY < 50); // At top when scrollY is less than 50
  };

  // Close search box when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };

    // Add event listener for outside click
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Top Fixed Header */}
      <div
        className={`fixed inset-x-0 top-0 h-20 z-40 w-full transition-all duration-500 ease-in-out ${
          atTop
          ? "bg-transparent before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-full before:bg-gradient-to-b before:from-black/90 before:via-black/40 before:to-transparent"
          : "bg-gradient-to-b from-[#C45A00] via-[#E71D36] to-[#6D3E27] opacity-100"
        }`}
      ></div>

      {/* Main Navigation */}
      <header className="fixed top-0 z-50 w-full">
        <nav className="flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <button className="sm:hidden p-2 text-white bg-transparent hover:bg-gray-200 rounded-xl">
              <FaBars className="w-5 h-5" />
            </button>
            <a href="/" className="text-3xl font-bold">
              <img
                src="/VIT-AP-logo.png"
                alt="logo"
                className="antialiased w-28 duration-500 hover:scale-95"
              />
            </a>

            {/* Links */}
            <ul className="hidden md:flex items-center space-x-10 text-[#c4c5c675] ml-64">
              <li>
                <a
                  href="/"
                  className={`px-3 py-2 rounded-xl ${
                    window.location.pathname === "/"
                      ? "text-white font-semibold bg-[#ffffff17]"
                      : "hover:bg-[#ffffff17]"
                  }`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className={`px-3 py-2 rounded-xl ${
                    window.location.pathname === "/events"
                      ? "text-white font-semibold bg-[#ffffff17]"
                      : "hover:bg-[#ffffff17]"
                  }`}
                >
                  Events
                </a>
              </li>
              {/* Services with Submenu */}
              {/* Services with Submenu */}
<li className="relative group">
  <a
    href="#services"
    className="px-3 py-2 rounded-xl hover:bg-[#ffffff17] flex items-center"
    onMouseEnter={() => setServicesOpen(true)}
    onMouseLeave={() => setServicesOpen(false)}
  >
    Services
    <svg
      className="w-3 h-3 ml-1 transform duration-300"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  </a>
  {/* Submenu */}
  {servicesOpen && (
    <div
      className="absolute top-[-3px] -translate-x-1/2 translate-y-11 opacity-100 scale-100 transition-all duration-100 ease-in-out"
      style={{ left: "50%", zIndex: 50 }}
      onMouseEnter={() => setServicesOpen(true)}
      onMouseLeave={() => setServicesOpen(false)}
    >
      <div className="flex justify-center w-auto h-auto overflow-hidden bg-white border shadow-sm rounded-xl border-neutral-300/80">
        <div className="w-80 h-28 mb-8">
          <a
            href="/services/gym"
            className="mt-5 ml-5 mr-5 px-3.5 py-2 text-sm rounded-lg hover:bg-neutral-100 text-gray-900 hover:text-orange-500 flex items-center gap-3 transition-all duration-300"
          >
            <div className="flex items-center justify-center w-8 h-8">
              <FaDumbbell className="w-5 h-5 text-gray-700" />
            </div>
            <span className="font-semibold">Gym</span>
          </a>
          <a
            href="/services/guest-house"
            className="mt-2 ml-5 mr-5 px-3.5 py-2 text-sm rounded-lg hover:bg-neutral-100 text-gray-900 hover:text-orange-500 flex items-center gap-3 transition-all duration-300"
          >
            <div className="flex items-center justify-center w-8 h-8">
              <FaBed className="w-5 h-5 text-gray-700" />
            </div>
            <span className="font-semibold">Guest House</span>
          </a>
        </div>
      </div>
    </div>
  )}
</li>
            </ul>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="hidden sm:flex items-center px-4 py-3 bg-[#ffffff17] text-white rounded-xl hover:bg-[#ffffff57]"
            >
              <FaSearch className="w-6 h-6" />
            </button>
            <button
              onClick={() => navigate("/login")} // Use navigate to redirect to login page
              className="hidden sm:flex items-center font-semibold px-6 py-3 bg-[#ffffff17] text-white rounded-xl hover:bg-[#ffffff57]"
            >
              Sign In
            </button>
          </div>
        </nav>
      </header>

      {/* Search Bar */}
      {searchOpen && (
        <>
          {/* Background Blur */}
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 backdrop-blur-sm z-40"></div>

          {/* Search Box */}
          <div
            ref={searchRef}
            className={`fixed top-10 left-0 w-full flex justify-center z-50 transition-all duration-500 ease-in-out ${
              searchOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="bg-white p-4 shadow-lg rounded-[15px] w-11/12 sm:w-2/3 lg:w-1/2 transition-all duration-300 ease-in-out">
              <div className="flex items-center border-b border-gray-300 pb-2">
                <FaSearch className="text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 focus:outline-none focus:ring-0 ml-2"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navigation;