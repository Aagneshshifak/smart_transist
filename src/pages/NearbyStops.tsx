
import { useState, useEffect } from 'react';
import { MapPin, Bus, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import MapSection from '../components/MapSection';

interface Stop {
  id: string;
  name: string;
  type: 'bus' | 'train';
  distance: string;
  routes: string[];
  walkTime: string;
}

const NearbyStops = () => {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Mock data for demonstration
  const mockStops: Stop[] = [
    {
      id: '1',
      name: 'Main Street Station',
      type: 'bus',
      distance: '0.2 km',
      routes: ['Route 42', 'Route 15', 'Route 8'],
      walkTime: '3 min walk'
    },
    {
      id: '2',
      name: 'Central Train Station',
      type: 'train',
      distance: '0.5 km',
      routes: ['Blue Line', 'Red Line'],
      walkTime: '6 min walk'
    },
    {
      id: '3',
      name: 'Park Avenue Stop',
      type: 'bus',
      distance: '0.8 km',
      routes: ['Route 23', 'Route 67'],
      walkTime: '10 min walk'
    }
  ];

  const getCurrentLocation = () => {
    setLoading(true);
    setError(null);
    
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by this browser.');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        setLoading(false);
        console.log('Location obtained:', position.coords);
      },
      (error) => {
        setError('Unable to retrieve your location. Please enable location services.');
        setLoading(false);
        console.error('Geolocation error:', error);
      }
    );
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#cce0ff] to-white dark:from-[#0a192f] dark:to-[#1c1c3a] transition-all duration-300 ease-in-out">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Nearby Stops</h1>
          <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Find bus and train stops near your current location</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map Section */}
          <div>
            <Card>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Location Map</h2>
              <MapSection height="h-80" />
              
              <div className="mt-4">
                <button
                  onClick={getCurrentLocation}
                  disabled={loading}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
                >
                  <MapPin className="h-4 w-4" />
                  {loading ? 'Getting Location...' : 'Update Location'}
                </button>
                
                {error && (
                  <p className="text-red-600 text-sm mt-2 text-center">{error}</p>
                )}
                
                {location && (
                  <p className="text-green-600 text-sm mt-2 text-center">
                    Location updated successfully
                  </p>
                )}
              </div>
            </Card>
          </div>

          {/* Stops List */}
          <div>
            <Card>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Nearby Stops ({mockStops.length})
              </h2>
              
              <div className="space-y-4">
                {mockStops.map((stop) => (
                  <div
                    key={stop.id}
                    className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 ease-in-out cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Bus className={`h-4 w-4 ${stop.type === 'bus' ? 'text-green-600' : 'text-blue-600'}`} />
                          <h3 className="font-medium text-gray-900 dark:text-white">{stop.name}</h3>
                          <span className="text-sm text-gray-500 dark:text-gray-400">• {stop.distance}</span>
                        </div>
                        
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{stop.walkTime}</p>
                        
                        <div className="flex flex-wrap gap-1">
                          {stop.routes.map((route) => (
                            <span
                              key={route}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full transition-colors duration-300"
                            >
                              {route}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <ArrowRight className="h-4 w-4 text-gray-400 dark:text-gray-500 mt-1" />
                    </div>
                  </div>
                ))}
              </div>
              
              {mockStops.length === 0 && (
                <div className="text-center py-8">
                  <MapPin className="h-12 w-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">No stops found in your area</p>
                  <p className="text-gray-400 dark:text-gray-500 text-sm">Try updating your location</p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NearbyStops;
