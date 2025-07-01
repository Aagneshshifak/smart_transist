
import { useState } from 'react';
import { Map, ArrowRight, Bus, Clock, DollarSign, Navigation, Hotel, UtensilsCrossed, ChevronDown, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import MapSection from '../components/MapSection';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../components/ui/collapsible';

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
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [routes, setRoutes] = useState<RouteOption[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);
  const [hotelsOpen, setHotelsOpen] = useState(false);
  const [restaurantsOpen, setRestaurantsOpen] = useState(false);

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

  const handlePlanTrip = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fromLocation.trim() || !toLocation.trim()) {
      return;
    }

    setLoading(true);
    console.log('Planning trip from:', fromLocation, 'to:', toLocation);
    
    setTimeout(() => {
      setRoutes(mockRoutes);
      setLoading(false);
    }, 1500);
  };

  const clearSearch = () => {
    setFromLocation('');
    setToLocation('');
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

  const RecommendationCard = ({ item, icon: Icon }: { item: Recommendation; icon: any }) => (
    <div className="p-4 border rounded-lg hover:border-blue-300 transition-colors">
      <div className="flex items-start gap-3">
        <Icon size={16} className="text-blue-600 mt-1" />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h4 className="font-medium text-sm">{item.name}</h4>
            {item.rating && (
              <div className="flex items-center gap-1 text-xs">
                <span className="text-yellow-500">★</span>
                <span>{item.rating}</span>
              </div>
            )}
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
            {item.description}
          </p>
          {item.link && (
            <button className="text-xs text-blue-600 hover:text-blue-700">
              View Details
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Trip Planner</h1>
          <p className="text-gray-600 dark:text-gray-400">Plan your journey and get route suggestions</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Search Form */}
          <div className="space-y-6">
            <Card>
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Navigation className="h-4 w-4" />
                Plan Your Route
              </h2>
              
              <form onSubmit={handlePlanTrip} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">From</label>
                  <input
                    type="text"
                    value={fromLocation}
                    onChange={(e) => setFromLocation(e.target.value)}
                    placeholder="Enter starting location"
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">To</label>
                  <input
                    type="text"
                    value={toLocation}
                    onChange={(e) => setToLocation(e.target.value)}
                    placeholder="Enter destination"
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div className="flex gap-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg disabled:bg-blue-400 flex items-center justify-center gap-2"
                  >
                    <Map className="h-4 w-4" />
                    {loading ? 'Planning...' : 'Plan Trip'}
                  </button>
                  
                  {routes.length > 0 && (
                    <button
                      type="button"
                      onClick={clearSearch}
                      className="px-4 py-2 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </form>
            </Card>

            {/* Route Options */}
            {routes.length > 0 && (
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Bus className="h-4 w-4" />
                  Route Options
                </h3>
                
                <div className="space-y-3">
                  {routes.map((route, index) => (
                    <div
                      key={route.id}
                      onClick={() => handleRouteSelect(route.id)}
                      className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                        selectedRoute === route.id
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                            Option {index + 1}
                          </span>
                          <span className="font-semibold">{route.duration}</span>
                        </div>
                        <span className="text-sm font-semibold text-green-600">{route.cost}</span>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <span>{route.transfers} transfer{route.transfers !== 1 ? 's' : ''}</span>
                        <span>{route.walkTime} walking</span>
                      </div>
                      
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {route.steps.join(' → ')}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>

          {/* Map and Details */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Map className="h-4 w-4" />
                Route Map
              </h2>
              <div className="rounded-lg overflow-hidden">
                <MapSection height="h-80" />
              </div>
              
              {routes.length === 0 && !loading && (
                <div className="mt-6 text-center">
                  <Bus className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-400">Enter your locations to see routes</p>
                </div>
              )}
              
              {loading && (
                <div className="mt-6 text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-600 border-t-transparent mx-auto mb-4"></div>
                  <p className="text-gray-600 dark:text-gray-400">Finding routes...</p>
                </div>
              )}
            </Card>

            {/* Recommendations */}
            {showRecommendations && (
              <div className="space-y-4">
                {/* Hotels */}
                <Card>
                  <Collapsible open={hotelsOpen} onOpenChange={setHotelsOpen}>
                    <CollapsibleTrigger className="w-full">
                      <div className="flex items-center justify-between py-2">
                        <div className="flex items-center gap-2">
                          <Hotel size={16} />
                          <h3 className="font-semibold">🏨 Recommended Hotels</h3>
                        </div>
                        <ChevronDown className={`h-4 w-4 transition-transform ${hotelsOpen ? 'rotate-180' : ''}`} />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-4">
                      <div className="grid gap-3">
                        {mockHotels.map((hotel) => (
                          <RecommendationCard key={hotel.id} item={hotel} icon={Hotel} />
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>

                {/* Restaurants */}
                <Card>
                  <Collapsible open={restaurantsOpen} onOpenChange={setRestaurantsOpen}>
                    <CollapsibleTrigger className="w-full">
                      <div className="flex items-center justify-between py-2">
                        <div className="flex items-center gap-2">
                          <UtensilsCrossed size={16} />
                          <h3 className="font-semibold">🍽️ Suggested Restaurants</h3>
                        </div>
                        <ChevronDown className={`h-4 w-4 transition-transform ${restaurantsOpen ? 'rotate-180' : ''}`} />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-4">
                      <div className="grid gap-3">
                        {mockRestaurants.map((restaurant) => (
                          <RecommendationCard key={restaurant.id} item={restaurant} icon={UtensilsCrossed} />
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TripPlanner;
