
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
    
    // Simulate API call with enhanced loading
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

  // Mock distance check - in real app this would be calculated from route data
  const totalDistance = 50; // km - mock value
  const showRecommendations = routes.length > 0 && totalDistance >= 200;

  const RecommendationCard = ({ item, icon: Icon }: { item: Recommendation; icon: any }) => (
    <div className="group bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 rounded-2xl p-4 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 cursor-pointer hover:bg-white dark:hover:bg-gray-900 hover:border-blue-200/50 dark:hover:border-blue-500/40">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
          <Icon size={18} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h4 className="font-semibold text-gray-900 dark:text-white text-sm truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {item.name}
            </h4>
            {item.rating && (
              <div className="flex items-center gap-1 text-xs">
                <span className="text-yellow-500">★</span>
                <span className="text-gray-600 dark:text-gray-300 font-medium">{item.rating}</span>
              </div>
            )}
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 transition-colors duration-300">
            {item.description}
          </p>
          {item.link && (
            <button className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-300">
              View Details
              <ExternalLink size={10} />
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#cce0ff] to-white dark:from-[#0a192f] dark:to-[#1c1c3a] transition-all duration-300 ease-in-out">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Trip Planner</h1>
          <p className="text-gray-600 dark:text-slate-100 transition-colors duration-300">Plan your journey and get the best route suggestions</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Search Form */}
          <div className="lg:col-span-1 space-y-6">
            <div className="transform transition-all duration-300 hover:scale-[1.02]">
              <Card>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300 flex items-center gap-2">
                  <Navigation className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  Plan Your Route
                </h2>
                
                <form onSubmit={handlePlanTrip} className="space-y-4">
                  <div className="space-y-4">
                    <div className="group">
                      <label htmlFor="from" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-300 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400">
                        From
                      </label>
                      <input
                        type="text"
                        id="from"
                        value={fromLocation}
                        onChange={(e) => setFromLocation(e.target.value)}
                        placeholder="Enter starting location"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 ease-in-out hover:shadow-md focus:shadow-lg transform hover:-translate-y-0.5"
                        required
                      />
                    </div>
                    
                    <div className="group">
                      <label htmlFor="to" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-300 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400">
                        To
                      </label>
                      <input
                        type="text"
                        id="to"
                        value={toLocation}
                        onChange={(e) => setToLocation(e.target.value)}
                        placeholder="Enter destination"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 ease-in-out hover:shadow-md focus:shadow-lg transform hover:-translate-y-0.5"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-6 rounded-xl disabled:from-blue-400 disabled:to-blue-500 transition-all duration-300 flex items-center justify-center gap-2 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none disabled:hover:shadow-lg"
                    >
                      <Map className="h-4 w-4" />
                      {loading ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                          Planning...
                        </>
                      ) : (
                        'Plan Trip'
                      )}
                    </button>
                    
                    {routes.length > 0 && (
                      <button
                        type="button"
                        onClick={clearSearch}
                        className="px-4 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </form>
              </Card>
            </div>

            {/* Route Options */}
            {routes.length > 0 && (
              <div className="animate-fade-in animation-delay-200">
                <Card>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300 flex items-center gap-2">
                    <Bus className="h-5 w-5 text-green-600 dark:text-green-400" />
                    Route Options ({routes.length})
                  </h3>
                  
                  <div className="space-y-3">
                    {routes.map((route, index) => (
                      <div
                        key={route.id}
                        onClick={() => handleRouteSelect(route.id)}
                        className={`p-4 border-2 rounded-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-lg ${
                          selectedRoute === route.id
                            ? 'border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/30 shadow-md'
                            : 'border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                        }`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-sm">
                              Option {index + 1}
                            </span>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                              <span className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">{route.duration}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4 text-green-600 dark:text-green-400" />
                            <span className="text-sm font-semibold text-green-600 dark:text-green-400 transition-colors duration-300">{route.cost}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300 mb-3 transition-colors duration-300">
                          <span className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            {route.transfers} transfer{route.transfers !== 1 ? 's' : ''}
                          </span>
                          <span className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            {route.walkTime} walking
                          </span>
                        </div>
                        
                        <div className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300 leading-relaxed">
                          {route.steps.join(' → ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            )}
          </div>

          {/* Map and Details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="transform transition-all duration-300 hover:scale-[1.005]">
              <Card>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300 flex items-center gap-2">
                  <Map className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  Route Map
                </h2>
                <div className="rounded-xl overflow-hidden shadow-inner">
                  <MapSection height="h-96" />
                </div>
                
                {routes.length === 0 && !loading && (
                  <div className="mt-8 text-center animate-fade-in">
                    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 transition-all duration-300">
                      <Bus className="h-16 w-16 text-blue-500 dark:text-blue-400 mx-auto mb-4 animate-pulse" />
                      <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300 text-lg">Enter your start and destination to see routes</p>
                    </div>
                  </div>
                )}
                
                {loading && (
                  <div className="mt-8 text-center animate-fade-in">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-2xl p-8 transition-all duration-300">
                      <div className="relative">
                        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-200 dark:border-blue-800 border-t-blue-600 dark:border-t-blue-400 mx-auto mb-4"></div>
                        <div className="absolute inset-0 rounded-full bg-blue-100 dark:bg-blue-900/20 animate-ping opacity-20"></div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300 text-lg font-medium">Finding the best routes for you...</p>
                      <div className="flex justify-center mt-4 space-x-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            </div>

            {/* Recommendations Sections */}
            {showRecommendations && (
              <div className="space-y-6 animate-fade-in animation-delay-300">
                {/* Hotels Section */}
                <Card>
                  <Collapsible open={hotelsOpen} onOpenChange={setHotelsOpen}>
                    <CollapsibleTrigger className="w-full">
                      <div className="flex items-center justify-between py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg text-white shadow-lg">
                            <Hotel size={16} />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">🏨 Recommended Hotels</h3>
                        </div>
                        <ChevronDown className={`h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform duration-300 ${hotelsOpen ? 'rotate-180' : ''}`} />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                        {mockHotels.map((hotel) => (
                          <RecommendationCard key={hotel.id} item={hotel} icon={Hotel} />
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>

                {/* Restaurants Section */}
                <Card>
                  <Collapsible open={restaurantsOpen} onOpenChange={setRestaurantsOpen}>
                    <CollapsibleTrigger className="w-full">
                      <div className="flex items-center justify-between py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg text-white shadow-lg">
                            <UtensilsCrossed size={16} />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">🍽️ Suggested Restaurants</h3>
                        </div>
                        <ChevronDown className={`h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform duration-300 ${restaurantsOpen ? 'rotate-180' : ''}`} />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
