import React from 'react';
import HomeCarousel from './HomeCarousel';

const banners = [
  {
    image: '/Campus.webp',
    title: 'Achieve Your Dreams',
    description: 'Empowering your journey to success with top-notch resources.',
  },
  {
    image: '/Campus-login.jpeg',
    title: 'Learn and Grow',
    description: 'Explore a world of learning opportunities at your fingertips.',
  },
];

const HomePage = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section Replaced by HomeCarousel */}
      <HomeCarousel banners={banners} />

      <div>
      {/* Rest of your home page content */}
    </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="h-12 w-12 bg-blue-500 rounded-md flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Get Started</h3>
              <p className="mt-2 text-gray-600">
                Begin your journey with our comprehensive onboarding process.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="h-12 w-12 bg-green-500 rounded-md flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Resources</h3>
              <p className="mt-2 text-gray-600">
                Access our library of educational materials and professional resources.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="h-12 w-12 bg-purple-500 rounded-md flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Events</h3>
              <p className="mt-2 text-gray-600">
                Stay updated with upcoming workshops, seminars, and networking events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;