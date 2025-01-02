import React, { useState, useEffect, useRef } from "react";
import { 
  FaSearch, FaUser, FaBars, FaDumbbell, FaBed, 
  FaSignOutAlt, FaUserCog, FaChartLine, FaCalendarAlt, 
  FaClipboardList, FaMoneyCheckAlt 
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from './AuthContext';
import axios from "axios";

const LoginNavBar = () => {
  // State management
  const [atTop, setAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [roleMenus, setRoleMenus] = useState([]); // Role-specific menu state

  // Authentication and navigation
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // References
  const searchRef = useRef(null);
  const profileRef = useRef(null);

  // Role-specific menu configurations (UPDATED)
  const roleMenuConfigurations = {
    'ADMIN': [
        { label: 'Admin Dashboard', path: '/admin/dashboard', icon: 'user-cog' },
        { label: 'Event Management', path: '/admin/events', icon: 'calendar-alt' },
        { label: 'User Management', path: '/admin/users', icon: 'chart-line' }
    ],
    'USER': [
      { label: 'Admin Dashboard', path: '/admin/dashboard', icon: 'user-cog' },
        { label: 'My Events', path: '/user/events', icon: 'calendar-alt' },
        { label: 'Profile', path: '/profile', icon: 'user' }
    ],
    'FINANCER': [
        { label: 'Financial Reports', path: '/finance/reports', icon: 'money-check-alt' },
        { label: 'Event Budgets', path: '/finance/budgets', icon: 'chart-line' }
    ],
    'ORGANIZER': [
        { label: 'Event Planning', path: '/organizer/events', icon: 'calendar-alt' },
        { label: 'Event Tasks', path: '/organizer/tasks', icon: 'clipboard-list' }
    ]
};

  // Scroll handling
  const handleScroll = () => {
    setAtTop(window.scrollY < 50);
  };

  // Logout handler
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Outside click detection for search and profile dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Update role-specific menu (UPDATED)
  useEffect(() => {
    if (user) {
        const role = user.role?.toUpperCase() || 'USER';
        console.log('Current user role:', role);
        
        if (roleMenuConfigurations[role]) {
            setRoleMenus(roleMenuConfigurations[role]);
        } else {
            console.warn(`No menu configuration found for role: ${role}`);
            setRoleMenus(roleMenuConfigurations['USER']);
        }
    }
  }, [user]);

  // Helper function to get icons for menu items
  const getIconForMenu = (iconName) => {
    const icons = {
      'user-cog': <FaUserCog />,
      'chart-line': <FaChartLine />,
      'calendar-alt': <FaCalendarAlt />, 
      'calendar': <FaCalendarAlt />,
      'dumbbell': <FaDumbbell />,
      'bed': <FaBed />,
      'money-check-alt': <FaMoneyCheckAlt />,
      'clipboard-list': <FaClipboardList />
    };
    return icons[iconName] || <FaBars />;
  };

  // If no user or not authenticated, return null or a minimal component
  if (!user) return null;

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
          {/* Logo and Navigation */}
          <div className="flex items-center">
            {/* Mobile Menu Toggle */}
            <button className="sm:hidden p-2 text-white bg-transparent hover:bg-gray-200 rounded-xl">
              <FaBars className="w-5 h-5" />
            </button>

            {/* Logo */}
            <a href="/" className="text-3xl font-bold">
              <img
                src="/VIT-AP-logo.png"
                alt="logo"
                className="antialiased w-28 duration-500 hover:scale-95"
              />
            </a>

            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex items-center space-x-10 text-[#c4c5c675] ml-64">
              {['Home', 'Events'].map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase()}`}
                    className={`px-3 py-2 rounded-xl ${
                      window.location.pathname === `/${link.toLowerCase()}`
                        ? "text-white font-semibold bg-[#ffffff17]"
                        : "hover:bg-[#ffffff17]"
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}

              {/* Services Dropdown */}
              <li className="relative group">
                <a
                  href="#services"
                  className="px-3 py-2 rounded-xl hover:bg-[#ffffff17] flex items-center"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  Services
                </a>
                {servicesOpen && (
                  <div
                    className="absolute top-[-3px] -translate-x-1/2 translate-y-11 opacity-100 scale-100 transition-all duration-100 ease-in-out"
                    style={{ left: "50%", zIndex: 50 }}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <div className="flex justify-center w-auto h-auto overflow-hidden bg-white border shadow-sm rounded-xl border-neutral-300/80">
                      <div className="w-80 h-28 mb-8">
                        {[
                          { name: 'Gym', icon: FaDumbbell, path: '/services/gym' },
                          { name: 'Guest House', icon: FaBed, path: '/services/guest-house' }
                        ].map(({ name, icon: Icon, path }) => (
                          <a
                            key={name}
                            href={path}
                            className="mt-5 ml-5 mr-5 px-3.5 py-2 text-sm rounded-lg hover:bg-neutral-100 text-gray-900 hover:text-orange-500 flex items-center gap-3 transition-all duration-300"
                          >
                            <div className="flex items-center justify-center w-8 h-8">
                              <Icon className="w-5 h-5 text-gray-700" />
                            </div>
                            <span className="font-semibold">{name}</span>
                          </a>
                        ))}
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

            {/* Profile Dropdown */}
            <div ref={profileRef} className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="hidden sm:flex items-center justify-center w-12 h-12 bg-[#ffffff17] text-white rounded-full hover:bg-[#ffffff57]"
              >
                <FaUser className="w-5 h-5" />
              </button>

              <div
                className={`absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-1 z-50 transition-all duration-300 ${
                  profileOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-3 pointer-events-none"
                }`}
              >
                <div className="px-4 py-2 text-sm font-semibold text-gray-700 border-b">
                  {user?.name || user?.email} ({user?.role})
                </div>

                {/* Debug: Log roleMenus to console */}
                {console.log('Role Menus:', roleMenus)}

                {roleMenus.map((menu, index) => (
  <div key={index}>
  <a
    href={menu.path}
    className="block px-4 py-2 rounded-xl text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
  >
    {getIconForMenu(menu.icon)}
    {menu.label}
  </a>
  {/* Handle subitems if they exist */}
  {menu.subItems && menu.subItems.map((subItem, subIndex) => (
    <a
      key={subIndex}
      href={subItem.path}
      className="block px-4 py-2 pl-8 text-sm text-gray-600 hover:bg-gray-100"
    >
      {subItem.label}
    </a>
  ))}
</div>
))}

                <button 
                  onClick={handleLogout}
                  className="block w-full rounded-xl text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center gap-2"
                >
                  <FaSignOutAlt className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default LoginNavBar;