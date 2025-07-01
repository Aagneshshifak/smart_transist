
import { useState } from 'react';
import { Navigation, Map } from 'lucide-react';
import Card from './Card';

interface RouteSearchFormProps {
  onPlanTrip: (fromLocation: string, toLocation: string) => void;
  onClear: () => void;
  loading: boolean;
  hasRoutes: boolean;
}

const RouteSearchForm = ({ onPlanTrip, onClear, loading, hasRoutes }: RouteSearchFormProps) => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fromLocation.trim() || !toLocation.trim()) {
      return;
    }

    onPlanTrip(fromLocation, toLocation);
  };

  const handleClear = () => {
    setFromLocation('');
    setToLocation('');
    onClear();
  };

  return (
    <Card>
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Navigation className="h-4 w-4" />
        Plan Your Route
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">From</label>
          <input
            type="text"
            value={fromLocation}
            onChange={(e) => setFromLocation(e.target.value)}
            placeholder="Enter starting location"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-black"
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
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-black"
            required
          />
        </div>
        
        <div className="flex gap-2">
          <button
            type="submit"
            disabled={loading}
            className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center gap-2 font-medium transition-colors ${
              loading 
                ? 'bg-gray-400 text-white cursor-not-allowed' 
                : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            <Map className="h-4 w-4" />
            {loading ? 'Planning...' : 'Plan Trip'}
          </button>
          
          {hasRoutes && (
            <button
              type="button"
              onClick={handleClear}
              className="px-4 py-2 border border-black rounded-lg hover:bg-black hover:text-white transition-colors"
            >
              Clear
            </button>
          )}
        </div>
      </form>
    </Card>
  );
};

export default RouteSearchForm;
