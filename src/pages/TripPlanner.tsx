
import { useState } from 'react';
import { Map, ArrowRight, Bus } from 'lucide-react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import MapSection from '../components/MapSection';

interface RouteOption {
  id: string;
  duration: string;
  transfers: number;
  walkTime: string;
  cost: string;
  steps: string[];
}

const TripPlanner = () => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [routes, setRoutes] = useState<RouteOption[]>([]);
  const [loading, setLoading] = useState(false);

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

  const handlePlanTrip = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fromLocation.trim() || !toLocation.trim()) {
      return;
    }

    setLoading(true);
    console.log('Planning trip from:', fromLocation, 'to:', toLocation);
    
    // Simulate API call
    setTimeout(() => {
      setRoutes(mockRoutes);
      setLoading(false);
    }, 1500);
  };

  const clearSearch = () => {
    setFromLocation('');
    setToLocation('');
    setRoutes([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Trip Planner</h1>
          <p className="text-gray-600">Plan your journey and get the best route suggestions</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Search Form */}
          <div className="lg:col-span-1">
            <Card>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Plan Your Route</h2>
              
              <form onSubmit={handlePlanTrip} className="space-y-4">
                <div>
                  <label htmlFor="from" className="block text-sm font-medium text-gray-700 mb-1">
                    From
                  </label>
                  <input
                    type="text"
                    id="from"
                    value={fromLocation}
                    onChange={(e) => setFromLocation(e.target.value)}
                    placeholder="Enter starting location"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="to" className="block text-sm font-medium text-gray-700 mb-1">
                    To
                  </label>
                  <input
                    type="text"
                    id="to"
                    value={toLocation}
                    onChange={(e) => setToLocation(e.target.value)}
                    placeholder="Enter destination"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div className="flex gap-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-colors flex items-center justify-center gap-2"
                  >
                    <Map className="h-4 w-4" />
                    {loading ? 'Planning...' : 'Plan Trip'}
                  </button>
                  
                  {routes.length > 0 && (
                    <button
                      type="button"
                      onClick={clearSearch}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </form>
            </Card>

            {/* Route Options */}
            {routes.length > 0 && (
              <div className="mt-6">
                <Card>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Route Options ({routes.length})
                  </h3>
                  
                  <div className="space-y-3">
                    {routes.map((route, index) => (
                      <div
                        key={route.id}
                        className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                              Option {index + 1}
                            </span>
                            <span className="font-medium text-gray-900">{route.duration}</span>
                          </div>
                          <span className="text-sm font-medium text-green-600">{route.cost}</span>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                          <span>{route.transfers} transfer{route.transfers !== 1 ? 's' : ''}</span>
                          <span>{route.walkTime} walking</span>
                        </div>
                        
                        <div className="text-xs text-gray-500">
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
          <div className="lg:col-span-2">
            <Card>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Route Map</h2>
              <MapSection height="h-96" />
              
              {routes.length === 0 && !loading && (
                <div className="mt-6 text-center">
                  <Bus className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Enter your start and destination to see routes</p>
                </div>
              )}
              
              {loading && (
                <div className="mt-6 text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-500">Finding the best routes for you...</p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TripPlanner;
