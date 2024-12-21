import React, { useState } from 'react';
import { BarChart, Calendar, Users, DollarSign } from 'lucide-react';

const AdminDashboard = () => {
  const [stats] = useState({
    totalUsers: 1234,
    activeEvents: 15,
    upcomingEvents: 8,
    totalRevenue: 45600
  });

  const cards = [
    { title: 'Total Users', value: stats.totalUsers, icon: Users, color: 'text-blue-500' },
    { title: 'Active Events', value: stats.activeEvents, icon: Calendar, color: 'text-green-500' },
    { title: 'Upcoming Events', value: stats.upcomingEvents, icon: BarChart, color: 'text-purple-500' },
    { title: 'Total Revenue', value: `$${stats.totalRevenue.toLocaleString()}`, icon: DollarSign, color: 'text-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between pb-2">
                  <h3 className="text-sm font-medium text-gray-500">
                    {card.title}
                  </h3>
                  <Icon className={`h-5 w-5 ${card.color}`} />
                </div>
                <div className="text-2xl font-bold">{card.value}</div>
              </div>
            );
          })}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[
                'New event created: Tech Summit 2024',
                'User registration spike: +125 users',
                'Event update: AI Workshop rescheduled',
                'New feedback received: 4.5/5 average'
              ].map((activity, index) => (
                <div key={index} className="flex items-center p-2 hover:bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions and System Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                {[
                  'Create New Event',
                  'Manage Users',
                  'View Reports',
                  'System Settings'
                ].map((action, index) => (
                  <button
                    key={index}
                    className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* System Status */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">System Status</h3>
              <div className="space-y-4">
                {[
                  { name: 'Server Status', status: 'Operational' },
                  { name: 'Database', status: 'Healthy' },
                  { name: 'API Response', status: 'Normal' },
                  { name: 'Storage', status: '72% Used' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-600">{item.name}</span>
                    <span className="text-green-500 font-medium">{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;