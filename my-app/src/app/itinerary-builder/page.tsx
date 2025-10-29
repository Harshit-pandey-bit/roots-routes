'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/common/Card';

// Types
interface Itinerary {
  day: number;
  date: string;
  destination: string;
  activities: string[];
  accommodation: string;
  image: string;
}

const DESTINATIONS = ['Rishikesh', 'Nainital', 'Mussoorie', 'Auli', 'Jim Corbett', 'Dehradun'] as const;
type DestinationType = typeof DESTINATIONS[number];

// Uttarakhand-specific destination images
const DESTINATION_IMAGES: Record<DestinationType, string> = {
  'Rishikesh': 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=400&fit=crop',
  'Nainital': 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=400&fit=crop',
  'Mussoorie': 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&h=400&fit=crop',
  'Auli': 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=400&fit=crop',
  'Jim Corbett': 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=400&fit=crop',
  'Dehradun': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop'
};

const ACTIVITY_MAP: Record<DestinationType, string[]> = {
  'Rishikesh': ['River Rafting', 'Ganga Aarti', 'Yoga Session', 'Beatles Ashram Visit', 'Cafe Hopping'],
  'Nainital': ['Boating on Naini Lake', 'Mall Road Walk', 'Naina Devi Temple', 'Snow View Point', 'Eco Cave Gardens'],
  'Mussoorie': ['Kempty Falls', 'Gun Hill', 'Mall Road Shopping', 'Company Garden', 'Lal Tibba'],
  'Auli': ['Skiing', 'Cable Car Ride', 'Artificial Lake Visit', 'Joshimath Temple', 'Valley Trek'],
  'Jim Corbett': ['Jungle Safari', 'Bird Watching', 'Nature Walk', 'Corbett Museum', 'Riverside Camping'],
  'Dehradun': ["Robber's Cave", 'Sahastradhara', 'Mindrolling Monastery', 'Tapkeshwar Temple', 'Malsi Deer Park']
};

const ACCOMMODATION_TYPES = [
  'Eco-friendly Guesthouse',
  'Heritage Homestay',
  'Riverside Cottage',
  'Mountain View Resort',
  'Traditional Village Home'
];

const INTERESTS = [
  'Adventure', 'Culture', 'Nature', 'Food', 'Photography',
  'Trekking', 'Spiritual', 'Wildlife', 'Relaxation'
];

// Main Component
export default function ItineraryBuilderPage() {
  const [step, setStep] = useState(1);
  const [destination, setDestination] = useState<DestinationType>('Nainital');
  const [startDate, setStartDate] = useState('2024-10-28');
  const [endDate, setEndDate] = useState('2024-10-30');
  const [budget, setBudget] = useState<'budget' | 'moderate' | 'luxury'>('moderate');
  const [travelers, setTravelers] = useState(2);
  const [interests, setInterests] = useState<string[]>([]);
  const [generatedItinerary, setGeneratedItinerary] = useState<Itinerary[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const toggleInterest = (interest: string) => {
    setInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const calculateDays = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    return days > 0 ? days : 1;
  };

  const generateItinerary = () => {
    setIsGenerating(true);

    setTimeout(() => {
      const days = calculateDays();
      const itinerary: Itinerary[] = [];

      for (let i = 0; i < days; i++) {
        const date = new Date(startDate);
        date.setDate(date.getDate() + i);

        const availableActivities = ACTIVITY_MAP[destination] || ['Sightseeing', 'Local Food Tour', 'Nature Walk'];
        const selectedActivities = availableActivities.slice(i * 2, (i * 2) + 3);

        itinerary.push({
          day: i + 1,
          date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          destination,
          activities: selectedActivities,
          accommodation: ACCOMMODATION_TYPES[i % ACCOMMODATION_TYPES.length],
          image: DESTINATION_IMAGES[destination]
        });
      }

      setGeneratedItinerary(itinerary);
      setIsGenerating(false);
    }, 2000);
  };

  const handleNext = () => {
    if (step === 4) {
      generateItinerary();
    } else {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const resetForm = () => {
    setGeneratedItinerary([]);
    setStep(1);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <StepOne
          destination={destination}
          setDestination={setDestination}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          calculateDays={calculateDays}
        />;
      case 2:
        return <StepTwo
          budget={budget}
          setBudget={setBudget}
          travelers={travelers}
          setTravelers={setTravelers}
        />;
      case 3:
        return <StepThree
          interests={interests}
          toggleInterest={toggleInterest}
        />;
      case 4:
        return <StepFour
          destination={destination}
          calculateDays={calculateDays}
          budget={budget}
          travelers={travelers}
          interests={interests}
        />;
      default:
        return null;
    }
  };

  if (isGenerating) {
    return <LoadingState />;
  }

  if (generatedItinerary.length > 0) {
    return (
      <GeneratedItinerary
        itinerary={generatedItinerary}
        destination={destination}
        calculateDays={calculateDays}
        onReset={resetForm}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Container>
        <Header />
        <div className="grid md:grid-cols-2 gap-8">
          <FormCard
            step={step}
            renderStepContent={renderStepContent}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
          />
          <PreviewCard
            destination={destination}
            startDate={startDate}
            destinationImage={DESTINATION_IMAGES[destination]}
          />
        </div>
      </Container>
    </div>
  );
}

// Component: Header
const Header = () => (
  <div className="text-center mb-12">
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
      Curate Your Perfect Uttarakhand Journey
    </h1>
    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
      Answer a few questions to unlock a personalized, sustainable itinerary tailored just for you.
    </p>
  </div>
);

// Component: Form Card
interface FormCardProps {
  step: number;
  renderStepContent: () => React.ReactNode;
  handlePrevious: () => void;
  handleNext: () => void;
}

const FormCard: React.FC<FormCardProps> = ({ step, renderStepContent, handlePrevious, handleNext }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
    <div className="flex items-center gap-3 mb-6">
      <span className="text-2xl">🌿</span>
      <h2 className="text-2xl font-bold text-[#6B8E6F]">Build Your Adventure</h2>
    </div>

    <div className="mb-6">
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#6B8E6F] transition-all duration-300"
          style={{ width: `${(step / 4) * 100}%` }}
        />
      </div>
      <p className="text-sm text-gray-500 mt-2">Step {step} of 4</p>
    </div>

    {renderStepContent()}

    <div className="flex gap-4 pt-6">
      <button
        disabled={step === 1}
        className="flex-1 px-6 py-3 border border-gray-300 text-gray-900 font-medium rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        onClick={handlePrevious}
      >
        Previous
      </button>
      <button
        className="flex-1 px-6 py-3 bg-[#6B8E6F] hover:bg-[#5a7a5e] text-white font-medium rounded-lg transition-colors"
        onClick={handleNext}
      >
        {step === 4 ? 'Generate Itinerary' : 'Next Step'}
      </button>
    </div>
  </div>
);

// Component: Preview Card
interface PreviewCardProps {
  destination: string;
  startDate: string;
  destinationImage: string;
}

const PreviewCard: React.FC<PreviewCardProps> = ({ destination, startDate, destinationImage }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
    <div className="flex items-center gap-3 mb-6">
      <span className="text-2xl">🌍</span>
      <h2 className="text-2xl font-bold text-[#6B8E6F]">Your AI Itinerary</h2>
    </div>
    <p className="text-gray-600 mb-6">A personalized plan based on your preferences.</p>

    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img
          src={destinationImage}
          alt={destination}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
          <p className="text-sm font-semibold text-gray-900">
            Day 1: {new Date(startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </p>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl">📍</span>
          <h3 className="text-xl font-bold text-gray-900">{destination}</h3>
        </div>

        <div className="space-y-3 mb-6">
          <div>
            <p className="text-sm font-semibold text-gray-900 mb-2">Activities:</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-900 text-sm rounded-full font-medium">Preview Mode</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-900 text-sm rounded-full font-medium">Complete Steps</span>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900 mb-2">Accommodation:</p>
            <div className="flex items-center gap-2">
              <span className="text-sm">🏠</span>
              <p className="text-sm text-gray-600">Awaiting generation...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Component: Step One
interface StepOneProps {
  destination: string;
  setDestination: (value: DestinationType) => void;
  startDate: string;
  setStartDate: (value: string) => void;
  endDate: string;
  setEndDate: (value: string) => void;
  calculateDays: () => number;
}

const StepOne: React.FC<StepOneProps> = ({
  destination,
  setDestination,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  calculateDays
}) => (
  <div className="space-y-6">
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        Where would you like to explore?
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        Choose your desired region or let us suggest one.
      </p>

      <label className="block text-sm font-semibold text-gray-900 mb-2">
        Destination
      </label>
      <select
        value={destination}
        onChange={(e) => setDestination(e.target.value as DestinationType)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8E6F] focus:border-transparent text-gray-900 font-medium bg-white"
      >
        {DESTINATIONS.map(dest => (
          <option key={dest} value={dest} className="text-gray-900 font-normal">{dest}</option>
        ))}
      </select>
    </div>

    <div>
      <label className="block text-sm font-semibold text-gray-900 mb-2">
        Travel Dates
      </label>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8E6F] focus:border-transparent text-gray-900 font-medium"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8E6F] focus:border-transparent text-gray-900 font-medium"
        />
      </div>
      <p className="text-sm text-gray-600 mt-2">
        {calculateDays()} days trip
      </p>
    </div>
  </div>
);

// Component: Step Two
interface StepTwoProps {
  budget: 'budget' | 'moderate' | 'luxury';
  setBudget: (value: 'budget' | 'moderate' | 'luxury') => void;
  travelers: number;
  setTravelers: (value: number) => void;
}

const StepTwo: React.FC<StepTwoProps> = ({ budget, setBudget, travelers, setTravelers }) => (
  <div className="space-y-6">
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        What&apos;s your travel style?
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        Help us understand your preferences.
      </p>

      <label className="block text-sm font-semibold text-gray-900 mb-3">
        Budget Range
      </label>
      <div className="grid grid-cols-3 gap-3">
        {(['budget', 'moderate', 'luxury'] as const).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setBudget(option)}
            className={`py-3 px-4 rounded-lg border-2 font-medium transition-all ${
              budget === option
                ? 'border-[#6B8E6F] bg-green-50 text-[#6B8E6F]'
                : 'border-gray-300 bg-white text-gray-900 hover:border-gray-400'
            }`}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>
    </div>

    <div>
      <label className="block text-sm font-semibold text-gray-900 mb-3">
        Number of Travelers
      </label>
      <input
        type="number"
        min="1"
        max="10"
        value={travelers}
        onChange={(e) => setTravelers(Number(e.target.value))}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8E6F] focus:border-transparent text-gray-900 font-medium"
      />
    </div>
  </div>
);

// Component: Step Three
interface StepThreeProps {
  interests: string[];
  toggleInterest: (interest: string) => void;
}

const StepThree: React.FC<StepThreeProps> = ({ interests, toggleInterest }) => (
  <div className="space-y-6">
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        What are your interests?
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        Select all that apply to personalize your itinerary.
      </p>

      <div className="flex flex-wrap gap-2">
        {INTERESTS.map((interest) => (
          <button
            key={interest}
            type="button"
            onClick={() => toggleInterest(interest)}
            className={`py-2 px-4 rounded-full text-sm font-medium transition-all ${
              interests.includes(interest)
                ? 'bg-[#6B8E6F] text-white'
                : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
            }`}
          >
            {interest}
          </button>
        ))}
      </div>
    </div>
  </div>
);

// Component: Step Four
interface StepFourProps {
  destination: string;
  calculateDays: () => number;
  budget: string;
  travelers: number;
  interests: string[];
}

const StepFour: React.FC<StepFourProps> = ({
  destination,
  calculateDays,
  budget,
  travelers,
  interests
}) => (
  <div className="space-y-6">
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        Review your preferences
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        Make sure everything looks good before we generate your itinerary.
      </p>

      <div className="bg-gray-50 rounded-lg p-4 space-y-3">
        <div className="flex justify-between">
          <span className="text-sm font-semibold text-gray-900">Destination:</span>
          <span className="text-sm text-gray-900 font-medium">{destination}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm font-semibold text-gray-900">Duration:</span>
          <span className="text-sm text-gray-900 font-medium">{calculateDays()} days</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm font-semibold text-gray-900">Budget:</span>
          <span className="text-sm text-gray-900 font-medium capitalize">{budget}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm font-semibold text-gray-900">Travelers:</span>
          <span className="text-sm text-gray-900 font-medium">{travelers} people</span>
        </div>
        <div className="flex justify-between items-start">
          <span className="text-sm font-semibold text-gray-900">Interests:</span>
          <span className="text-sm text-gray-900 font-medium text-right">{interests.join(', ') || 'None selected'}</span>
        </div>
      </div>
    </div>
  </div>
);

// Component: Loading State
const LoadingState = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
    <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-[#6B8E6F] mb-6" />
    <h3 className="text-2xl font-bold text-gray-900 mb-2">Creating Your Perfect Itinerary...</h3>
    <p className="text-gray-600">Our AI is crafting a personalized journey just for you</p>
  </div>
);

// Component: Generated Itinerary
interface GeneratedItineraryProps {
  itinerary: Itinerary[];
  destination: string;
  calculateDays: () => number;
  onReset: () => void;
}

const GeneratedItinerary: React.FC<GeneratedItineraryProps> = ({
  itinerary,
  destination,
  calculateDays,
  onReset
}) => (
  <div className="min-h-screen bg-gray-50 py-12">
    <Container>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900">
            Your {calculateDays()}-Day {destination} Itinerary
          </h2>
          <button
            onClick={onReset}
            className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            ← Create New
          </button>
        </div>

        {itinerary.map((day) => (
          <Card key={day.day} className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <div className="relative h-48 rounded-lg overflow-hidden group">
                  <img
                    src={day.image}
                    alt={day.destination}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
                    <p className="text-sm font-semibold text-gray-900">Day {day.day}: {day.date}</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">📍</span>
                  <h3 className="text-2xl font-bold text-gray-900">{day.destination}</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-2">Activities:</p>
                    <div className="flex flex-wrap gap-2">
                      {day.activities.map((activity, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-900 text-sm rounded-full font-medium">
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-2">Accommodation:</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">🏠</span>
                      <p className="text-sm text-gray-600">{day.accommodation}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                    View Similar Listings
                  </button>
                  <button className="flex-1 px-4 py-2 bg-[#6B8E6F] hover:bg-[#5a7a5e] text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                    Save Itinerary
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  </div>
);
