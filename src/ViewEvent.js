// ViewEvent.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ViewEvent = () => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/events/${id}`);
        setEvent(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch event details');
        setLoading(false);
      }
    };
    fetchEvent();
  }, [id]);

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
      <div className="mb-20 max-w-4xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="relative h-96">
          <img
            src="/Campus.webp"
            alt={event?.eventName}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="p-8">
          <div className="mb-4">
            <span className="text-red-600 border border-gray-300 bg-white rounded-full px-4 py-1 text-sm font-semibold">
              {event?.category}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{event?.eventName}</h1>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-red-600 mr-3">
                <i className="fas fa-calendar-alt"></i>
              </span>
              <div>
                <p className="text-gray-700">Start Date: {event?.startDate}</p>
                <p className="text-gray-700">End Date: {event?.endDate}</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-red-600 mr-3">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <p className="text-gray-700">{event?.location}</p>
            </div>
            <div className="flex items-center">
              <span className="text-red-600 mr-3">
                <i className="fas fa-user"></i>
              </span>
              <p className="text-gray-700">Organizer: {event?.organizerName}</p>
            </div>
            <div>
              <p className="text-gray-700">
                Tickets: {event?.unlimitedTickets ? 'Unlimited' : `${event?.numberOfTickets} available`}
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate('/events')}
            className="mt-8 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors"
          >
            Back to Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewEvent;