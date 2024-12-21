import React from "react";

const NotAuthorizedPage = () => {
  return (
    <div>
      {/* Navigation Bar Placeholder */}
      {/* Replace this with your actual Navbar component */}
      <NavBar enableScrollingGradient={true} />

      {/* Page Title */}
      <title>Not Authorized to Access this Page</title>

      {/* Banner Section */}
      <div className="relative w-full sm:h-64">
        <img
          src="/path-to-your-image/vitap-drone-2.webp" // Update the image path
          alt=""
          className="object-cover w-full sm:h-64"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col h-96">
        <div className="flex items-center justify-center flex-1">
          <div className="max-w-xl px-4 py-8 mx-auto text-center">
            {/* Icon */}
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 bg-red-100 rounded-full sm:w-20 sm:h-20">
              <i className="w-8 h-8 text-center text-red-600">🔒</i> {/* Replace with your icon */}
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              You are not authorized to access this page.
            </h1>

            {/* Description */}
            <p className="mt-4 text-gray-500">
              You don't have the necessary permissions to access this page. If you think this is a mistake, please{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:events.vitap@vitap.ac.in"
                className="text-blue-400 underline"
              >
                Report this issue
              </a>
              .
            </p>

            {/* Back to Home Button */}
            <a
              href="/home" // Update this route as needed
              className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white transition-all duration-300 rounded-full bg-primary-orange hover:bg-primary-orange-reverse hover:bg-indigo-700 focus:outline-none focus:ring"
            >
              <i className="inline-block w-4 h-4">⬅️</i> {/* Replace with your icon */}
              Go Back Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Replace with your actual Navbar component or remove if not needed
const NavBar = ({ enableScrollingGradient }) => (
  <div>
    {/* Navigation bar logic */}
    <p>Navbar with Scrolling Gradient: {enableScrollingGradient.toString()}</p>
  </div>
);

export default NotAuthorizedPage;