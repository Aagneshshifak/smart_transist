
import { MapPin } from 'lucide-react';

interface MapSectionProps {
  height?: string;
  showPlaceholder?: boolean;
  children?: React.ReactNode;
}

const MapSection = ({ height = 'h-64', showPlaceholder = true, children }: MapSectionProps) => {
  return (
    <div className={`${height} bg-gray-800 rounded-lg border border-gray-700 relative overflow-hidden`}>
      {showPlaceholder ? (
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-gray-500 mx-auto mb-2" />
            <p className="text-gray-400 text-sm">Map will be integrated here</p>
            <p className="text-gray-500 text-xs">Google Maps API</p>
          </div>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default MapSection;
