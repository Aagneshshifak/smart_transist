
import { UtensilsCrossed, ChevronDown } from 'lucide-react';
import Card from './Card';
import RecommendationCard from './RecommendationCard';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

interface Recommendation {
  id: string;
  name: string;
  description: string;
  distance: string;
  rating?: number;
  link?: string;
}

interface RestaurantRecommendationsProps {
  restaurants: Recommendation[];
  isOpen: boolean;
  onToggle: (open: boolean) => void;
}

const RestaurantRecommendations = ({ restaurants, isOpen, onToggle }: RestaurantRecommendationsProps) => (
  <Card>
    <Collapsible open={isOpen} onOpenChange={onToggle}>
      <CollapsibleTrigger className="w-full">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-2">
            <UtensilsCrossed size={16} />
            <h3 className="font-semibold">🍽️ Suggested Restaurants</h3>
          </div>
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="pt-4">
        <div className="grid gap-3">
          {restaurants.map((restaurant) => (
            <RecommendationCard key={restaurant.id} item={restaurant} icon={UtensilsCrossed} />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  </Card>
);

export default RestaurantRecommendations;
