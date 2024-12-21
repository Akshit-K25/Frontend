import React from "react";

const PageNotFound = () => {
  return (
    <div>
      

      {/* Banner Section */}
      <div className="relative sm:h-64 w-full">
        <title>Page Not Found</title>
        <img
          src="/path-to-your-image/vitap-drone-2.webp" // Replace with your image path
          alt=""
          className="w-full sm:h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Main Content */}
      <div className="flex h-96 flex-col">
        <div className="flex flex-1 items-center justify-center">
          <div className="mx-auto max-w-xl px-4 py-8 text-center">
            {/* Title */}
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Oops! Page not found.
            </h1>

            {/* Description */}
            <p className="mt-4 text-gray-500">
              The page you're looking for doesn't exist or has been moved. If you think this is a mistake, please let us
              know.{" "}
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
              href="/home" // Update with your actual home route
              className="mt-6 inline-block bg-primary-orange transition-all duration-300 hover:bg-primary-orange-reverse rounded-full px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
            >
              <i className="w-4 h-4 inline-block">⬅️</i> {/* Replace with an icon */}
              Go Back Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;