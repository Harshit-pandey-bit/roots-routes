import React from 'react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/common/Card';

export default function ExperiencesPage() {
  const experiences = [
    {
      name: 'Himalayan Weaving Workshop',
      location: 'Munsiyari',
      price: '₹2,500',
      duration: '3 hours',
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop',
      description: 'Learn the ancient craft of hand-weaving from local artisans'
    },
    {
      name: 'Uttarakhandi Culinary Class',
      location: 'Almora',
      price: '₹1,800',
      duration: '4 hours',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=400&fit=crop',
      description: 'Master traditional Pahadi cuisine with local chefs'
    },
    {
      name: 'Guided Forest Bird Watching',
      location: 'Jim Corbett',
      price: '₹3,000',
      duration: '5 hours',
      image: 'https://images.unsplash.com/photo-1552083375-1447ce886485?w=600&h=400&fit=crop',
      description: 'Explore diverse avian life with experienced naturalists'
    },
    {
      name: 'Yoga & Meditation Retreat',
      location: 'Rishikesh',
      price: '₹4,500',
      duration: 'Full Day',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop',
      description: 'Find inner peace by the Ganges with expert instructors'
    },
    {
      name: 'Mountain Trekking Adventure',
      location: 'Chopta',
      price: '₹5,000',
      duration: '2 days',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      description: 'Trek through pristine valleys and alpine meadows'
    },
    {
      name: 'Traditional Pottery Workshop',
      location: 'Nainital',
      price: '₹2,000',
      duration: '3 hours',
      image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=400&fit=crop',
      description: 'Create your own pottery with local craftspeople'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Unique Experiences
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Immerse yourself in authentic cultural experiences and adventures across Uttarakhand
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((experience, idx) => (
            <Card key={idx} className="p-0 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={experience.image}
                  alt={experience.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <h3 className="text-lg font-bold text-gray-900">{experience.name}</h3>
                    <p className="text-sm text-gray-600">{experience.location}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 text-sm">{experience.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-semibold text-gray-900">{experience.duration}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-xl font-bold text-[#6B8E6F]">{experience.price}</p>
                  </div>
                </div>
                <button className="w-full bg-[#6B8E6F] hover:bg-[#5a7a5e] text-white font-medium py-2 rounded-lg transition-colors">
                  Book Experience
                </button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
