import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/common/Card';

// Data Models
interface ContentItem {
  name: string;
  image: string;
  description: string;
}

// Data Constants
const FEATURED_HOMESTAYS: ContentItem[] = [
  { 
    name: 'Rustic Mountain Retreat', 
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop',
    description: 'Experience authentic Kumaoni hospitality in a cozy homestay' 
  },
  { 
    name: 'Riverside Forest Haven', 
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    description: 'Nestled by a gentle river, this homestay offers a refreshing escape' 
  },
  { 
    name: 'Charming Village Escape', 
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop',
    description: 'Immerse yourself in village life. Stay in a traditional home' 
  },
];

const EXPERIENCES: ContentItem[] = [
  { 
    name: 'Himalayan Weaving Workshop', 
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&h=400&fit=crop',
    description: 'Learn the ancient craft of hand-weaving from local artisans' 
  },
  { 
    name: 'Uttarakhandi Culinary Class', 
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=400&fit=crop',
    description: 'Dive into the flavors of Uttarakhand. A hands-on cooking experience' 
  },
  { 
    name: 'Guided Forest Bird Watching', 
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop',
    description: 'Explore the diverse avian life of Uttarakhand with an experienced guide' 
  },
];

const ADVENTURES: ContentItem[] = [
  { 
    name: 'Pristine Lake Trek & Clean-up', 
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=400&fit=crop',
    description: 'Embark on a scenic trek to a high-altitude lake' 
  },
  { 
    name: 'Organic Farm Stay Experience', 
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop',
    description: 'Spend the day on an organic farm, learn about sustainable farming' 
  },
  { 
    name: 'Community Reforestation Drive', 
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
    description: 'Join local communities in planting trees and contributing to conservation' 
  },
];

const TRAILS: ContentItem[] = [
  { 
    name: 'Ancient Temples Circuit', 
    image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=600&h=400&fit=crop',
    description: 'Discover the spiritual heritage of Uttarakhand by visiting ancient temples' 
  },
  { 
    name: 'Colonial Hill Station Walk', 
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&h=400&fit=crop',
    description: 'Stroll through the charming streets of an old colonial hill station' 
  },
  { 
    name: 'Hidden Village Discovery', 
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop',
    description: 'Journey to a hidden village, experience the traditional lifestyle' 
  },
];

// Main Component
export default function HomePage() {
  return (
    <div className="bg-gray-50">
      <HeroSection />
      <ContentSection 
        title="Featured Homestays" 
        items={FEATURED_HOMESTAYS}
        buttonText="View Details"
        bgColor="bg-gray-50"
      />
      <ContentSection 
        title="Unique Skill Experiences" 
        items={EXPERIENCES}
        buttonText="Discover More"
        bgColor="bg-white"
      />
      <ContentSection 
        title="Eco-Friendly Adventures" 
        items={ADVENTURES}
        buttonText="Explore Eco Trips"
        bgColor="bg-gray-50"
      />
      <ContentSection 
        title="Explore Heritage Trails" 
        items={TRAILS}
        buttonText="Explore Trails"
        bgColor="bg-white"
      />
      <CTASection />
    </div>
  );
}

// Component: Hero Section
const HeroSection = () => (
  <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16 md:py-24">
    <Container>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Sustainable Journeys in Uttarakhand
          </h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Explore the pristine beauty and rich culture of Uttarakhand through eco-friendly 
            homestays, immersive experiences, and heritage trails. Your adventure, thoughtfully curated.
          </p>
          <Link href="/itinerary-builder">
            <button className="bg-[#6B8E6F] hover:bg-[#5a7a5e] text-white font-medium px-8 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl">
              Build Your Itinerary
            </button>
          </Link>
        </div>
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop"
              alt="Uttarakhand Mountains"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  </section>
);

// Component: Content Section (Reusable)
interface ContentSectionProps {
  title: string;
  items: ContentItem[];
  buttonText: string;
  bgColor: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ 
  title, 
  items, 
  buttonText, 
  bgColor 
}) => (
  <section className={`py-16 ${bgColor}`}>
    <Container>
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{title}</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <ContentCard key={idx} item={item} buttonText={buttonText} />
        ))}
      </div>
    </Container>
  </section>
);

// Component: Content Card
interface ContentCardProps {
  item: ContentItem;
  buttonText: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ item, buttonText }) => (
  <Card className="p-0 overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
    <div className="relative h-48 overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
        <span className="text-sm font-semibold text-gray-800">{item.name}</span>
      </div>
    </div>
    <div className="p-6">
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
      <button className="w-full border border-gray-300 text-gray-700 font-medium py-2 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200">
        {buttonText}
      </button>
    </div>
  </Card>
);

// Component: CTA Section
const CTASection = () => (
  <section className="py-16 bg-gray-50">
    <Container>
      <div className="bg-gradient-to-r from-[#6B8E6F] to-[#5a7a5e] rounded-2xl p-12 text-center text-white shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready for your next adventure?
        </h2>
        <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
          From tranquil homestays to thrilling eco-treks, Uttarakhand trails help you plan 
          memorable journeys that respect nature and culture.
        </p>
        <button className="bg-white text-[#6B8E6F] hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
          Discover More Experiences
        </button>
      </div>
    </Container>
  </section>
);
