import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Events = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/events');
        setEvents(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch events');
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500 text-lg">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-24">
      <h1 className="text-3xl font-bold mb-8 text-center">Events</h1>
      <div className="mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
        {events.map((event) => (
          <div
          key={event.id}
          className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-500 transform hover:translate-y-[-5px] mx-auto cursor-pointer"
          onClick={() => navigate(`/events/${event.id}`)}
        >
            {/* Image Section */}
            <div className="relative h-40 overflow-hidden">
              <img
                src="Campus.webp"
                alt="Event"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            {/* Content Section */}
            <div className="p-4">
              {/* Category Section */}
              <p className="text-red-600 border border-gray-300 bg-white rounded-full px-3 py-1 inline-block text-sm font-semibold">
                {event.category}
              </p>
              <div className="space-y-2 mt-2">
                <h2 className="text-xl font-bold mb-2">{event.eventName}</h2>
                {/* Date Section */}
                <p className="text-gray-600 flex items-center">
                  <span className="text-red-600 mr-2">
                    <i className="fas fa-calendar-alt"></i>
                  </span>
                  {event.startDate} - {event.endDate}
                </p>
                {/* Location Section */}
                <p className="text-gray-600 text-sm flex items-center">
                  <span className="text-red-600 mr-2">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  {event.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;