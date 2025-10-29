import React from 'react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/common/Card';

export default function DestinationsPage() {
  const destinations = [
    { 
      name: 'Rishikesh', 
      region: 'Garhwal', 
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop',
      description: 'Yoga capital and adventure hub' 
    },
    { 
      name: 'Nainital', 
      region: 'Kumaon', 
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop',
      description: 'Scenic lake and hill station' 
    },
    { 
      name: 'Mussoorie', 
      region: 'Garhwal', 
      image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&h=600&fit=crop',
      description: 'Queen of the Hills' 
    },
    { 
      name: 'Auli', 
      region: 'Garhwal', 
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop',
      description: 'Skiing paradise' 
    },
    { 
      name: 'Jim Corbett', 
      region: 'Kumaon', 
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop',
      description: 'Wildlife sanctuary' 
    },
    { 
      name: 'Dehradun', 
      region: 'Garhwal', 
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      description: 'Gateway to Uttarakhand' 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Destinations
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover the diverse regions of Uttarakhand, from serene hill stations to thrilling adventure spots
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((dest, idx) => (
            <Card key={idx} className="p-0 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900">{dest.name}</h3>
                    <p className="text-sm text-gray-600">{dest.region} Region</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{dest.description}</p>
                <button className="w-full bg-[#6B8E6F] hover:bg-[#5a7a5e] text-white font-medium py-2 rounded-lg transition-colors">
                  Explore {dest.name}
                </button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
