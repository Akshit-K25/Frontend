import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaSearch, FaUserCircle } from 'react-icons/fa';
import './index.css';

function AdminPage() {
  const [openAnalytics, setOpenAnalytics] = useState(false);
  const [openSystem, setOpenSystem] = useState(false);
  const [openEventOrganizer, setOpenEventOrganizer] = useState(false);
  const [openFrontend, setOpenFrontend] = useState(false);
  const [openEventManagement, setOpenEventManagement] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-purple-900">
      <nav className="bg-purple-900 text-white p-4 flex items-center">
        {/* Vitap Logo */}
        <img src="VIT-AP-logo copy.png" alt="Vitap Logo" className="w-20" />

        {/* Space to separate the logo from search bar */}
        <div className="flex-1"></div>

        {/* Search Bar Section */}
        <div className="flex items-center space-x-2 bg-transparent border border-gray-500 rounded-md p-1 ml-auto">
          <FaSearch className="text-[#d9d9d9]" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-[#d9d9d9] outline-none"
          />
          <span className="text-[#d9d9d9]">Search</span>
        </div>

        {/* User Icon */}
        <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center ml-4">
          <FaUserCircle className="text-white" />
        </div>
      </nav>

      <div className="flex flex-1">
        <aside className="bg-transparent text-white w-64 p-4 space-y-4">
          {/* Dashboard (Always Visible) */}
          <div className="p-2">
            <span>Dashboard</span>
          </div>

          {/* Menu: Analytics */}
          <div className="p-2">
            <div 
              className="flex justify-between items-center cursor-pointer mt-5"
              onClick={() => setOpenAnalytics(!openAnalytics)}
            >
              <span className="text-[#d9d9d9] opacity-70">Analytics</span>
              {openAnalytics ? <FaChevronUp className="opacity-70" /> : <FaChevronDown className="opacity-70" />}
            </div>
            {openAnalytics && (
              <div className="mt-2 space-y-2">
                <div>Google Analytics</div>
                <div>Server Analytics</div>
              </div>
            )}
          </div>

          {/* Menu: System */}
          <div className="p-2">
            <div 
              className="flex justify-between items-center cursor-pointer mt-5"
              onClick={() => setOpenSystem(!openSystem)}
            >
              <span className="text-[#d9d9d9] opacity-70">System</span>
              {openSystem ? <FaChevronUp className="opacity-70" /> : <FaChevronDown className="opacity-70" />}
            </div>
            {openSystem && (
              <div className="mt-2 space-y-2">
                <div>Maintenance Settings</div>
                <div>Env Editor</div>
                <div>Logs</div>
                <div>Exceptions</div>
              </div>
            )}
          </div>

          {/* Menu: Event Organizer */}
          <div className="p-2">
            <div 
              className="flex justify-between items-center cursor-pointer mt-5"
              onClick={() => setOpenEventOrganizer(!openEventOrganizer)}
            >
              <span className="text-[#d9d9d9] opacity-70">Event Organizer</span>
              {openEventOrganizer ? <FaChevronUp className="opacity-70" /> : <FaChevronDown className="opacity-70" />}
            </div>
            {openEventOrganizer && (
              <div className="mt-2 space-y-2">
                <div>Organizer Profile</div>
              </div>
            )}
          </div>

          {/* Menu: Frontend */}
          <div className="p-2">
            <div 
              className="flex justify-between items-center cursor-pointer mt-5"
              onClick={() => setOpenFrontend(!openFrontend)}
            >
              <span className="text-[#d9d9d9] opacity-70">Frontend</span>
              {openFrontend ? <FaChevronUp className="opacity-70" /> : <FaChevronDown className="opacity-70" />}
            </div>
            {openFrontend && (
              <div className="mt-2 space-y-2">
                <div>Carousel Banners</div>
              </div>
            )}
          </div>

          {/* Menu: Event Management */}
          <div className="p-2">
            <div 
              className="flex justify-between items-center cursor-pointer mt-5"
              onClick={() => setOpenEventManagement(!openEventManagement)}
            >
              <span className="text-[#d9d9d9] opacity-70">Event Management</span>
              {openEventManagement ? <FaChevronUp className="opacity-70" /> : <FaChevronDown className="opacity-70" />}
            </div>
            {openEventManagement && (
              <div className="mt-2 space-y-2">
                <div>Event Categories</div>
                <div>Events</div>
              </div>
            )}
          </div>
        </aside>

        <main className="flex-1 p-4 bg-white rounded-tl-[12px]">
          <p>Welcome to the Admin Page</p>
        </main>
      </div>
    </div>
  );
}

export default AdminPage;
