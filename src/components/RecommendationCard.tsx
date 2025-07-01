
interface Recommendation {
  id: string;
  name: string;
  description: string;
  distance: string;
  rating?: number;
  link?: string;
}

interface RecommendationCardProps {
  item: Recommendation;
  icon: any;
}

const RecommendationCard = ({ item, icon: Icon }: RecommendationCardProps) => (
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

export default RecommendationCard;
