
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Calendar } from "lucide-react";

interface ItemCardProps {
  item: {
    id: number;
    title: string;
    description: string;
    price: number;
    location: string;
    image: string;
    category: string;
    rating: number;
    verified?: boolean;
    available?: boolean;
  };
  onBookNow?: (id: number) => void;
}

const ItemCard = ({ item, onBookNow }: ItemCardProps) => {
  return (
    <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-white/90 text-gray-900">
            {item.category}
          </Badge>
        </div>
        {item.verified && (
          <div className="absolute top-3 right-3">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 text-white text-xs">✓</div>
            </div>
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg text-gray-900 line-clamp-1">{item.title}</h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium">{item.rating}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center text-gray-500 text-sm">
            <MapPin className="h-4 w-4 mr-1" />
            {item.location}
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-gray-900">${item.price}</div>
            <div className="text-xs text-gray-500">per day</div>
          </div>
        </div>
        <Button 
          className="w-full"
          onClick={() => onBookNow?.(item.id)}
          disabled={!item.available}
        >
          <Calendar className="h-4 w-4 mr-2" />
          {item.available ? 'Book Now' : 'Unavailable'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
