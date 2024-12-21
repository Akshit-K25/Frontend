import React from "react";

const ServiceUnavailable = () => {
  return (
    <div className="flex h-screen flex-col">
      {/* Page Title */}
      <title>Service Unavailable</title>

      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center">
        <div className="mx-auto max-w-xl px-4 py-8 text-center">
          {/* Logo */}
          <div className="flex flex-row content-center justify-center items-center">
            <img
              src="/path-to-your-logo/vitap-logo-color.svg" // Replace with your actual logo path
              alt="VIT-AP Logo"
              className="sm:w-64 w-24 pb-12 object-cover"
            />
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We're just tuning up a few things.
          </h1>

          {/* Description */}
          <p className="mt-4 text-gray-500">
            Hi there! We're currently undergoing scheduled maintenance. We should be back shortly. Thank you for your
            patience.
          </p>

          {/* Contact Us Button */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:events.vitap@vitap.ac.in"
            className="mt-6 inline-block bg-primary-orange transition-all duration-300 hover:bg-primary-orange-reverse rounded-full px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            <i className="w-4 h-4 inline-block">📧</i> {/* Replace with an actual icon */}
            Contact Us
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center px-4 mb-10 mt-4">
        <span className="inline-block text-sm font-light text-gray-700 bg-gray-100 border sm:shadow-2xl border-gray-300 py-2 px-4 rounded-full">
          Copyright © {new Date().getFullYear()} Software Development Cell, VIT-AP University, Andhra Pradesh-522241
        </span>
      </div>
    </div>
  );
};

export default ServiceUnavailable;