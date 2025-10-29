export interface Destination {
  id: string;
  name: string;
  state: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface UserPreferences {
  destination: string;
  interests: string[];
  duration: number;
  budget: 'budget' | 'moderate' | 'luxury';
  travelDates?: {
    start: Date;
    end: Date;
  };
}

export interface ItineraryDay {
  day: number;
  title: string;
  activities: Activity[];
  accommodation?: Homestay;
}

export interface Activity {
  id: string;
  time: string;
  name: string;
  description: string;
  location: string;
  type: 'sightseeing' | 'adventure' | 'culture' | 'food' | 'relaxation';
  estimatedCost: number;
}

export interface Homestay {
  id: string;
  name: string;
  location: string;
  description: string;
  images: string[];
  price: number;
  rating: number;
  reviewCount: number;
  amenities: string[];
  host: {
    name: string;
    verified: boolean;
  };
  sustainability: {
    localEmployment: boolean;
    ecoFriendly: boolean;
    communitySupport: boolean;
  };
}

export interface Experience {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  duration: string;
  price: number;
  rating: number;
  images: string[];
  sustainable: boolean;
  localGuide: boolean;
}
