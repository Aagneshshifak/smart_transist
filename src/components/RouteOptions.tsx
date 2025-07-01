
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
    <Card>
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Bus className="h-4 w-4" />
        Route Options
      </h3>
      
      <div className="space-y-3">
        {routes.map((route, index) => (
          <div
            key={route.id}
            onClick={() => onRouteSelect(route.id)}
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
  );
};

export default RouteOptions;
