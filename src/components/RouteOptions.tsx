
import { Bus } from 'lucide-react';
import Card from './Card';

interface RouteOption {
  id: string;
  duration: string;
  transfers: number;
  walkTime: string;
  cost: string;
  steps: string[];
}

interface RouteOptionsProps {
  routes: RouteOption[];
  selectedRoute: string | null;
  onRouteSelect: (routeId: string) => void;
}

const RouteOptions = ({ routes, selectedRoute, onRouteSelect }: RouteOptionsProps) => {
  if (routes.length === 0) return null;

  return (
    <div className="rounded-3xl p-8 bg-gray-50">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-black">
        <Bus className="h-4 w-4 text-black" />
        Route Options
      </h3>
      
      <div className="space-y-3">
        {routes.map((route, index) => (
          <div
            key={route.id}
            onClick={() => onRouteSelect(route.id)}
            className={`p-3 border rounded-lg cursor-pointer transition-colors ${
              selectedRoute === route.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 hover:border-blue-300'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                  Option {index + 1}
                </span>
                <span className="font-semibold text-black">{route.duration}</span>
              </div>
              <span className="text-sm font-semibold text-green-600">{route.cost}</span>
            </div>
            
            <div className="flex items-center gap-4 text-sm mb-2 text-gray-600">
              <span>{route.transfers} transfer{route.transfers !== 1 ? 's' : ''}</span>
              <span>{route.walkTime} walking</span>
            </div>
            
            <div className="text-xs text-gray-500">
              {route.steps.join(' → ')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RouteOptions;
