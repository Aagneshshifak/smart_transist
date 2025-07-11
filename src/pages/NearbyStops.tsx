
import { useState, useEffect } from 'react';
import { MapPin, Bus, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
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
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight text-black">
            Nearby Stops.
          </h1>
          <p className="text-xl font-light mb-12 text-gray-600">
            Discover transit options around you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Map Section */}
            <div className="rounded-3xl p-8 bg-gray-50">
              <h2 className="text-2xl font-medium mb-6 text-black">
                Your Location
              </h2>
              <div className="mb-6">
                <MapSection height="h-80" />
              </div>
              
              <button
                onClick={getCurrentLocation}
                disabled={loading}
                className={`w-full py-3 px-6 rounded-full font-medium transition-all duration-200 ${
                  loading ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                <MapPin className="h-4 w-4 inline mr-2" />
                {loading ? 'Getting Location...' : 'Update Location'}
              </button>
              
              {error && (
                <p className="text-red-500 text-sm mt-3 text-center">{error}</p>
              )}
              
              {location && (
                <p className="text-green-500 text-sm mt-3 text-center">
                  Location updated successfully
                </p>
              )}
            </div>

            {/* Stops List */}
            <div className="rounded-3xl p-8 bg-gray-50">
              <h2 className="text-2xl font-medium mb-6 text-black">
                Nearby Stops ({mockStops.length})
              </h2>
              
              <div className="space-y-4">
                {mockStops.map((stop) => (
                  <div
                    key={stop.id}
                    className="p-6 rounded-2xl border bg-white border-gray-200 hover:border-black hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Bus className={`h-5 w-5 ${stop.type === 'bus' ? 'text-green-500' : 'text-blue-500'}`} />
                          <h3 className="font-medium text-lg text-black">
                            {stop.name}
                          </h3>
                          <span className="text-sm text-gray-500">
                            • {stop.distance}
                          </span>
                        </div>
                        
                        <p className="text-sm mb-3 text-gray-600">
                          {stop.walkTime}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {stop.routes.map((route) => (
                            <span
                              key={route}
                              className="px-3 py-1 rounded-full text-xs font-medium bg-black text-white"
                            >
                              {route}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <ArrowRight className="h-5 w-5 mt-1 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
              
              {mockStops.length === 0 && (
                <div className="text-center py-12">
                  <MapPin className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-500">
                    No stops found in your area
                  </p>
                  <p className="text-sm mt-1 text-gray-400">
                    Try updating your location
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NearbyStops;
