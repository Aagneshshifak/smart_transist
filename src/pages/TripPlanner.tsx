
import { useState } from 'react';
import { Navigation } from 'lucide-react';
import Navbar from '../components/Navbar';
import TimeThemeToggle from '../components/TimeThemeToggle';
import MapSection from '../components/MapSection';
import RouteSearchForm from '../components/RouteSearchForm';
import RouteOptions from '../components/RouteOptions';
import HotelRecommendations from '../components/HotelRecommendations';
import RestaurantRecommendations from '../components/RestaurantRecommendations';
import { useTimeBasedTheme } from '../hooks/useTimeBasedTheme';

interface RouteOption {
  id: string;
  duration: string;
  transfers: number;
  walkTime: string;
  cost: string;
  steps: string[];
}

interface Recommendation {
  id: string;
  name: string;
  description: string;
  distance: string;
  rating?: number;
  link?: string;
}

const TripPlanner = () => {
  const [routes, setRoutes] = useState<RouteOption[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);
  const [hotelsOpen, setHotelsOpen] = useState(false);
  const [restaurantsOpen, setRestaurantsOpen] = useState(false);
  const { theme, isTransitioning } = useTimeBasedTheme();

  // Mock route data
  const mockRoutes: RouteOption[] = [
    {
      id: '1',
      duration: '28 min',
      transfers: 1,
      walkTime: '8 min',
      cost: '$3.50',
      steps: ['Walk to Main St Station (3 min)', 'Route 42 to Central Hub (15 min)', 'Route 67 to Destination (10 min)']
    },
    {
      id: '2',
      duration: '35 min',
      transfers: 0,
      walkTime: '12 min',
      cost: '$2.25',
      steps: ['Walk to Park Ave Stop (6 min)', 'Route 23 Direct (25 min)', 'Walk to destination (4 min)']
    },
    {
      id: '3',
      duration: '31 min',
      transfers: 2,
      walkTime: '10 min',
      cost: '$4.00',
      steps: ['Walk to Train Station (5 min)', 'Blue Line (12 min)', 'Route 15 (9 min)', 'Walk (5 min)']
    }
  ];

  // Mock recommendations data
  const mockHotels: Recommendation[] = [
    {
      id: '1',
      name: 'Grand Central Hotel',
      description: '0.2 km from destination',
      distance: '0.2 km',
      rating: 4.5,
      link: '#'
    },
    {
      id: '2',
      name: 'Metropolitan Inn',
      description: '0.8 km from destination',
      distance: '0.8 km',
      rating: 4.2,
      link: '#'
    },
    {
      id: '3',
      name: 'Downtown Suites',
      description: '1.2 km from destination',
      distance: '1.2 km',
      rating: 4.7,
      link: '#'
    }
  ];

  const mockRestaurants: Recommendation[] = [
    {
      id: '1',
      name: 'Bella Vista',
      description: 'Italian cuisine • 0.3 km away',
      distance: '0.3 km',
      rating: 4.6,
      link: '#'
    },
    {
      id: '2',
      name: 'The Garden Bistro',
      description: 'Modern European • 0.5 km away',
      distance: '0.5 km',  
      rating: 4.4,
      link: '#'
    },
    {
      id: '3',
      name: 'Spice Route',
      description: 'Asian fusion • 0.7 km away',
      distance: '0.7 km',
      rating: 4.3,
      link: '#'
    },
    {
      id: '4',
      name: 'Oceanview Grill',
      description: 'Seafood • 0.9 km away',
      distance: '0.9 km',
      rating: 4.8,
      link: '#'
    }
  ];

  const handlePlanTrip = (fromLocation: string, toLocation: string) => {
    setLoading(true);
    console.log('Planning trip from:', fromLocation, 'to:', toLocation);
    
    setTimeout(() => {
      setRoutes(mockRoutes);
      setLoading(false);
    }, 1500);
  };

  const clearSearch = () => {
    setRoutes([]);
    setSelectedRoute(null);
    setHotelsOpen(false);
    setRestaurantsOpen(false);
  };

  const handleRouteSelect = (routeId: string) => {
    setSelectedRoute(routeId);
  };

  const totalDistance = 50;
  const showRecommendations = routes.length > 0 && totalDistance >= 200;

  return (
    <div className={`min-h-screen ${theme === 'day' ? 'bg-white text-black' : 'bg-black text-white'} ${isTransitioning ? 'opacity-95' : 'opacity-100'} transition-all duration-1000`}>
      <Navbar />
      <TimeThemeToggle />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-4xl md:text-6xl font-light mb-6 tracking-tight ${theme === 'day' ? 'text-black' : 'text-white'}`}>
            Plan Trip.
          </h1>
          <p className={`text-xl font-light mb-12 ${theme === 'day' ? 'text-gray-600' : 'text-gray-400'}`}>
            Find the perfect route for your journey.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Search Form and Route Options */}
            <div className="space-y-6">
              <div className={`rounded-3xl p-8 ${theme === 'day' ? 'bg-gray-50' : 'bg-gray-900'}`}>
                <h2 className={`text-xl font-medium mb-6 flex items-center gap-2 ${theme === 'day' ? 'text-black' : 'text-white'}`}>
                  <Navigation className="h-5 w-5" />
                  Plan Your Route
                </h2>
                <RouteSearchForm 
                  onPlanTrip={handlePlanTrip}
                  onClear={clearSearch}
                  loading={loading}
                  hasRoutes={routes.length > 0}
                />
              </div>

              {routes.length > 0 && (
                <div className={`rounded-3xl p-8 ${theme === 'day' ? 'bg-gray-50' : 'bg-gray-900'}`}>
                  <RouteOptions 
                    routes={routes}
                    selectedRoute={selectedRoute}
                    onRouteSelect={handleRouteSelect}
                  />
                </div>
              )}
            </div>

            {/* Map and Details */}
            <div className="lg:col-span-2 space-y-6">
              <div className={`rounded-3xl p-8 ${theme === 'day' ? 'bg-gray-50' : 'bg-gray-900'}`}>
                <h2 className={`text-xl font-medium mb-6 ${theme === 'day' ? 'text-black' : 'text-white'}`}>
                  Route Map
                </h2>
                <div className="rounded-2xl overflow-hidden">
                  <MapSection height="h-80" />
                </div>
                
                {routes.length === 0 && !loading && (
                  <div className="mt-8 text-center">
                    <Navigation className={`h-12 w-12 mx-auto mb-4 ${theme === 'day' ? 'text-gray-400' : 'text-gray-500'}`} />
                    <p className={`${theme === 'day' ? 'text-gray-600' : 'text-gray-400'}`}>
                      Enter your locations to see routes
                    </p>
                  </div>
                )}
                
                {loading && (
                  <div className="mt-8 text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-500 border-t-transparent mx-auto mb-4"></div>
                    <p className={`${theme === 'day' ? 'text-gray-600' : 'text-gray-400'}`}>
                      Finding routes...
                    </p>
                  </div>
                )}
              </div>

              {/* Recommendations */}
              {showRecommendations && (
                <div className="space-y-4">
                  <HotelRecommendations 
                    hotels={mockHotels}
                    isOpen={hotelsOpen}
                    onToggle={setHotelsOpen}
                  />

                  <RestaurantRecommendations 
                    restaurants={mockRestaurants}
                    isOpen={restaurantsOpen}
                    onToggle={setRestaurantsOpen}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TripPlanner;
