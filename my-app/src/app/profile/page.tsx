import React from 'react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/common/Card';

export default function ProfilePage() {
  const bookings = [
    {
      destination: 'Rishikesh',
      image: '🏞️',
      type: 'Homestay',
      dates: 'Oct 26-29, 2024',
      status: 'Confirmed',
    },
    {
      destination: 'Auli',
      image: '⛷️',
      type: 'Skill Experience',
      dates: 'Nov 10-12, 2024',
      status: 'Pending',
    },
    {
      destination: 'Dehradun',
      image: '🌲',
      type: 'Eco-Friendly Trip',
      dates: 'Sep 15-18, 2024',
      status: 'Completed',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Container>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Profile & Dashboard</h1>
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl">
            👤
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="md:col-span-1">
            <Card className="mb-6">
              <h3 className="font-bold text-gray-900 mb-4">My Traveler Dashboard</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-[#6B8E6F] text-white rounded-lg font-medium">
                  <span>📅</span>
                  My Bookings
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors">
                  <span>🔖</span>
                  Saved Itineraries
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors">
                  <span>⚙️</span>
                  Profile Settings
                </button>
              </div>
            </Card>

            <Card>
              <h3 className="font-bold text-gray-900 mb-4">My Provider Dashboard</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors">
                  <span>🏠</span>
                  My Listings
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors">
                  <span>📊</span>
                  Booking Requests
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors">
                  <span>📈</span>
                  Performance Analytics
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors">
                  <span>⚙️</span>
                  Provider Settings
                </button>
              </div>
            </Card>
          </div>

          {/* Main Content - Bookings */}
          <div className="md:col-span-3">
            <div className="grid md:grid-cols-3 gap-6">
              {bookings.map((booking, idx) => (
                <Card key={idx} className="p-0 overflow-hidden">
                  <div className="relative h-40 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center text-5xl">
                    {booking.image}
                    <div className="absolute top-3 left-3 right-3">
                      <h3 className="text-white text-xl font-bold drop-shadow-lg">
                        {booking.destination}
                      </h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="mb-3">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Type:</span> {booking.type}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Date:</span> {booking.dates}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold">Status:</span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          booking.status === 'Confirmed'
                            ? 'bg-green-100 text-green-800'
                            : booking.status === 'Pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {booking.status}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
