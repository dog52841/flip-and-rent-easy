
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search, MapPin, Filter, Grid, List } from "lucide-react";

const Browse = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [viewMode, setViewMode] = useState("grid");

  const listings = [
    {
      id: 1,
      title: "Professional DSLR Camera",
      description: "Canon EOS R5 with 24-70mm lens, perfect for professional photography",
      price: 89,
      location: "Mumbai, Maharashtra",
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop",
      category: "Electronics",
      rating: 4.9,
      reviews: 47,
    },
    {
      id: 2,
      title: "Luxury Beachfront Apartment",
      description: "2 BHK apartment with stunning sea view and modern amenities",
      price: 150,
      location: "Goa, India",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      category: "Rooms",
      rating: 4.8,
      reviews: 32,
    },
    {
      id: 3,
      title: "Mountain Bike - Trek",
      description: "High-end mountain bike perfect for trail adventures and city rides",
      price: 45,
      location: "Bangalore, Karnataka",
      image: "https://images.unsplash.com/photo-1544191696-15693072b1f8?w=400&h=300&fit=crop",
      category: "Vehicles",
      rating: 4.7,
      reviews: 23,
    },
    {
      id: 4,
      title: "MacBook Pro 2023",
      description: "Latest MacBook Pro with M3 chip, perfect for content creation",
      price: 120,
      location: "Delhi, India",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      category: "Electronics",
      rating: 4.9,
      reviews: 61,
    },
    {
      id: 5,
      title: "City Tour Guide Service",
      description: "Expert local guide for Mumbai city tours and hidden gems",
      price: 75,
      location: "Mumbai, Maharashtra",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
      category: "Tours",
      rating: 4.6,
      reviews: 18,
    },
    {
      id: 6,
      title: "Honda City - Sedan",
      description: "Well-maintained sedan perfect for city drives and weekend trips",
      price: 95,
      location: "Pune, Maharashtra",
      image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=400&h=300&fit=crop",
      category: "Vehicles",
      rating: 4.5,
      reviews: 29,
    },
  ];

  const categories = ["All", "Electronics", "Vehicles", "Rooms", "Tours", "Misc"];
  const cities = ["All Cities", "Mumbai", "Delhi", "Bangalore", "Goa", "Pune", "Chennai", "Kolkata"];

  const filteredListings = listings.filter((listing) => {
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         listing.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || selectedCategory === "All" || listing.category === selectedCategory;
    const matchesLocation = !selectedLocation || selectedLocation === "All Cities" || 
                           listing.location.includes(selectedLocation);
    const matchesPrice = listing.price >= priceRange[0] && listing.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesLocation && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Rentify
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline">Sign In</Button>
              <Button className="bg-gradient-to-r from-blue-600 to-green-600">List Item</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="h-5 w-5" />
                  <h2 className="text-lg font-semibold">Filters</h2>
                </div>

                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search items..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                </div>

                {/* Category */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Location */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">
                    Price Range: ₹{priceRange[0]} - ₹{priceRange[1]} per day
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={1000}
                    step={10}
                    className="mt-2"
                  />
                </div>

                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("");
                    setSelectedLocation("");
                    setPriceRange([0, 1000]);
                  }}
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Listings */}
          <div className="lg:w-3/4">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold">Browse Listings</h1>
                <p className="text-gray-600">{filteredListings.length} items available</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Listings Grid */}
            <div className={viewMode === "grid" ? "grid md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4"}>
              {filteredListings.map((listing) => (
                <Card key={listing.id} className="group cursor-pointer hover:shadow-lg transition-all duration-200 overflow-hidden">
                  {viewMode === "grid" ? (
                    <>
                      <div className="relative overflow-hidden">
                        <img
                          src={listing.image}
                          alt={listing.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <Badge className="absolute top-3 right-3 bg-white/90 text-gray-800">
                          {listing.category}
                        </Badge>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors line-clamp-1">
                            {listing.title}
                          </h3>
                          <div className="flex items-center space-x-1">
                            <span className="text-yellow-500">★</span>
                            <span className="text-sm font-medium">{listing.rating}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-3 line-clamp-2 text-sm">{listing.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-gray-500 text-sm">
                            <MapPin className="h-3 w-3 mr-1" />
                            {listing.location.split(',')[0]}
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-green-600">₹{listing.price}</div>
                            <div className="text-xs text-gray-500">per day</div>
                          </div>
                        </div>
                      </CardContent>
                    </>
                  ) : (
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="relative w-32 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                          <img
                            src={listing.image}
                            alt={listing.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
                                {listing.title}
                              </h3>
                              <div className="flex items-center gap-2 mb-1">
                                <Badge variant="secondary">{listing.category}</Badge>
                                <div className="flex items-center space-x-1">
                                  <span className="text-yellow-500">★</span>
                                  <span className="text-sm font-medium">{listing.rating}</span>
                                  <span className="text-sm text-gray-500">({listing.reviews} reviews)</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-xl font-bold text-green-600">₹{listing.price}</div>
                              <div className="text-sm text-gray-500">per day</div>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-2 line-clamp-2">{listing.description}</p>
                          <div className="flex items-center text-gray-500 text-sm">
                            <MapPin className="h-4 w-4 mr-1" />
                            {listing.location}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>

            {filteredListings.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="h-16 w-16 mx-auto mb-4" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No items found</h3>
                <p className="text-gray-600">Try adjusting your filters or search terms</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
