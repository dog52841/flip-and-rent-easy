
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { X, Filter } from "lucide-react";
import { useState } from "react";

interface SearchFiltersProps {
  onFiltersChange: (filters: any) => void;
  activeFilters: any;
}

const SearchFilters = ({ onFiltersChange, activeFilters }: SearchFiltersProps) => {
  const [showFilters, setShowFilters] = useState(false);

  const categories = ["Electronics", "Cameras", "Vehicles", "Spaces", "Tools"];
  const priceRanges = [
    { label: "Under $25", value: "0-25" },
    { label: "$25 - $50", value: "25-50" },
    { label: "$50 - $100", value: "50-100" },
    { label: "Over $100", value: "100+" },
  ];

  const handleFilterChange = (type: string, value: string) => {
    const newFilters = { ...activeFilters };
    if (type === 'category') {
      newFilters.category = newFilters.category === value ? '' : value;
    } else if (type === 'price') {
      newFilters.price = newFilters.price === value ? '' : value;
    }
    onFiltersChange(newFilters);
  };

  const clearAllFilters = () => {
    onFiltersChange({});
  };

  const hasActiveFilters = Object.values(activeFilters).some(filter => filter);

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2"
        >
          <Filter className="h-4 w-4" />
          Filters
        </Button>
        {hasActiveFilters && (
          <Button variant="ghost" onClick={clearAllFilters} className="text-sm">
            Clear all
          </Button>
        )}
      </div>

      {showFilters && (
        <Card>
          <CardContent className="p-4 space-y-4">
            <div>
              <h4 className="font-medium mb-2">Category</h4>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={activeFilters.category === category ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => handleFilterChange('category', category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Price per day</h4>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map((range) => (
                  <Badge
                    key={range.value}
                    variant={activeFilters.price === range.value ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => handleFilterChange('price', range.value)}
                  >
                    {range.label}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 mt-3">
          {activeFilters.category && (
            <Badge variant="secondary" className="flex items-center gap-1">
              {activeFilters.category}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => handleFilterChange('category', activeFilters.category)}
              />
            </Badge>
          )}
          {activeFilters.price && (
            <Badge variant="secondary" className="flex items-center gap-1">
              {priceRanges.find(r => r.value === activeFilters.price)?.label}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => handleFilterChange('price', activeFilters.price)}
              />
            </Badge>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchFilters;
