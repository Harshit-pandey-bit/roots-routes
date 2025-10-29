import React from 'react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/common/Card';

export default function HomestaysPage() {
  const homestays = [
    {
      name: 'Rustic Mountain Retreat',
      location: 'Mukteshwar',
      price: '₹3,500',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop',
      description: 'Cozy homestay with stunning valley views and authentic Kumaoni hospitality'
    },
    {
      name: 'Riverside Forest Haven',
      location: 'Rishikesh',
      price: '₹4,000',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      description: 'Peaceful riverside cottage surrounded by lush forests'
    },
    {
      name: 'Heritage Village Home',
      location: 'Almora',
      price: '₹2,800',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop',
      description: 'Traditional stone house with modern amenities in historic village'
    },
    {
      name: 'Lakeside Eco Lodge',
      location: 'Nainital',
      price: '₹5,000',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&h=400&fit=crop',
      description: 'Eco-friendly accommodation with breathtaking lake views'
    },
    {
      name: 'Mountain Valley Cottage',
      location: 'Auli',
      price: '₹4,500',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=600&h=400&fit=crop',
      description: 'Cozy cottage with panoramic Himalayan mountain views'
    },
    {
      name: 'Traditional Pahadi House',
      location: 'Ranikhet',
      price: '₹3,200',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600&h=400&fit=crop',
      description: 'Authentic village experience with home-cooked meals'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Eco-Friendly Homestays
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay with local families and experience authentic Uttarakhand culture while supporting sustainable tourism
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {homestays.map((homestay, idx) => (
            <Card key={idx} className="p-0 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={homestay.image}
                  alt={homestay.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1 shadow-lg">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm font-semibold text-gray-900">{homestay.rating}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <h3 className="text-lg font-bold text-gray-900">{homestay.name}</h3>
                    <p className="text-sm text-gray-600">{homestay.location}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 text-sm">{homestay.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Per night</p>
                    <p className="text-2xl font-bold text-[#6B8E6F]">{homestay.price}</p>
                  </div>
                  <button className="bg-[#6B8E6F] hover:bg-[#5a7a5e] text-white font-medium px-6 py-2 rounded-lg transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
