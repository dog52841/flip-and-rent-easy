
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search, MapPin, Filter, Grid, List, Star, X, SlidersHorizontal, ArrowRight } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

const Browse = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || "");
  const [selectedLocation, setSelectedLocation] = useState(searchParams.get('location') || "");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    if (searchParams.get('search')) {
      setSearchQuery(searchParams.get('search') || "");
    }
    if (searchParams.get('location')) {
      setSelectedLocation(searchParams.get('location') || "");
    }
  }, [searchParams]);

  const listings = [
    {
      id: 1,
      title: "Professional DSLR Camera",
      description: "Canon EOS R5 with 24-70mm lens, perfect for professional photography",
      price: 89,
      originalPrice: 120,
      location: "New York, NY",
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop",
      category: "Electronics",
      type: "Camera",
      rating: 4.9,
      reviews: 47,
      verified: true,
      featured: true
    },
    {
      id: 2,
      title: "Modern Apartment",
      description: "2BR apartment with stunning city view and modern amenities",
      price: 150,
      originalPrice: 200,
      location: "Los Angeles, CA",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      category: "Accommodation",
      type: "Apartment",
      rating: 4.8,
      reviews: 32,
      verified: true,
      featured: true
    },
    {
      id: 3,
      title: "Mountain Bike - Trek",
      description: "High-end mountain bike perfect for trail adventures and city rides",
      price: 45,
      originalPrice: 60,
      location: "Chicago, IL",
      image: "https://images.unsplash.com/photo-1544191696-15693072b1f8?w=400&h=300&fit=crop",
      category: "Vehicles",
      type: "Bicycle",
      rating: 4.7,
      reviews: 23,
      verified: false,
      featured: false
    },
    {
      id: 4,
      title: "MacBook Pro 2023",
      description: "Latest MacBook Pro with M3 chip, perfect for content creation",
      price: 120,
      originalPrice: 150,
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      category: "Electronics",
      type: "Laptop",
      rating: 4.9,
      reviews: 61,
      verified: true,
      featured: true
    },
    {
      id: 5,
      title: "City Tour Guide Service",
      description: "Expert local guide for city tours and hidden gems",
      price: 75,
      originalPrice: 100,
      location: "Boston, MA",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
      category: "Experiences",
      type: "Tour Guide",
      rating: 4.6,
      reviews: 18,
      verified: true,
      featured: false
    },
    {
      id: 6,
      title: "Honda Civic - Sedan",
      description: "Well-maintained sedan perfect for city drives and weekend trips",
      price: 95,
      originalPrice: 130,
      location: "Miami, FL",
      image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=400&h=300&fit=crop",
      category: "Vehicles",
      type: "Car",
      rating: 4.5,
      reviews: 29,
      verified: true,
      featured: false
    },
  ];

  const categories = ["All", "Electronics", "Vehicles", "Accommodation", "Experiences"];
  const itemTypes = ["All", "Camera", "Laptop", "Car", "Bicycle", "Apartment", "Tour Guide", "Tools", "Sports Equipment"];
  const cities = ["All Cities", "New York", "Los Angeles", "Chicago", "San Francisco", "Boston", "Miami", "Seattle"];

  const filteredListings = listings.filter((listing) => {
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         listing.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || selectedCategory === "All" || listing.category === selectedCategory;
    const matchesType = !selectedType || selectedType === "All" || listing.type === selectedType;
    const matchesLocation = !selectedLocation || selectedLocation === "All Cities" || 
                           listing.location.includes(selectedLocation);
    const matchesPrice = listing.price >= priceRange[0] && listing.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesType && matchesLocation && matchesPrice;
  });

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setSelectedType("");
    setSelectedLocation("");
    setPriceRange([0, 1000]);
  };

  const hasActiveFilters = searchQuery || selectedCategory || selectedType || selectedLocation || priceRange[0] > 0 || priceRange[1] < 1000;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <div>
                <span className="text-xl font-semibold text-gray-900">Rentify</span>
                <div className="text-xs text-gray-500">Browse</div>
              </div>
            </Link>
            <div className="flex items-center space-x-3">
              <Button variant="outline" className="border-gray-200">
                Sign In
              </Button>
              <Button className="bg-black text-white hover:bg-gray-800">
                List Item
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Bar */}
      <div className="bg-gray-50 border-b border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-3">
              <div className="md:col-span-2 relative">
                <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search for anything..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 border-gray-200 bg-white"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Location"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="pl-12 h-12 border-gray-200 bg-white"
                />
              </div>
              <Button
                onClick={() => setShowFilters(!showFilters)}
                variant="outline"
                className="h-12 border-gray-200 bg-white"
              >
                <SlidersHorizontal className="h-5 w-5 mr-2" />
                Filters
                {hasActiveFilters && (
                  <div className="ml-2 w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <Card className="sticky top-32 border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Filter className="h-5 w-5 text-gray-600" />
                    <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                  </div>
                  {hasActiveFilters && (
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={clearAllFilters}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <X className="h-4 w-4 mr-1" />
                      Clear
                    </Button>
                  )}
                </div>

                {/* Category */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3 text-gray-900">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="border-gray-200">
                      <SelectValue placeholder="All categories" />
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

                {/* Item Type */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3 text-gray-900">Item Type</label>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="border-gray-200">
                      <SelectValue placeholder="All types" />
                    </SelectTrigger>
                    <SelectContent>
                      {itemTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Location */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3 text-gray-900">City</label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger className="border-gray-200">
                      <SelectValue placeholder="All locations" />
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
                  <label className="block text-sm font-medium mb-3 text-gray-900">
                    Price Range: ${priceRange[0]} - ${priceRange[1]} per day
                  </label>
                  <div className="px-2">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={1000}
                      step={10}
                      className="mt-3"
                    />
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-gray-200"
                  onClick={clearAllFilters}
                >
                  Reset Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Listings */}
          <div className="lg:w-3/4">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {searchQuery ? `Results for "${searchQuery}"` : 'Browse Items'}
                </h1>
                <p className="text-gray-600">
                  {filteredListings.length} {filteredListings.length === 1 ? 'item' : 'items'} found
                  {selectedLocation && selectedLocation !== 'All Cities' && ` in ${selectedLocation}`}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 rounded-lg p-1 border border-gray-200">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className={viewMode === "grid" ? "bg-black text-white" : "text-gray-600"}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className={viewMode === "list" ? "bg-black text-white" : "text-gray-600"}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            {hasActiveFilters && (
              <div className="mb-6 flex flex-wrap gap-2">
                {searchQuery && (
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 px-3 py-1">
                    Search: {searchQuery}
                    <X className="h-3 w-3 ml-2 cursor-pointer" onClick={() => setSearchQuery("")} />
                  </Badge>
                )}
                {selectedCategory && selectedCategory !== "All" && (
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700 px-3 py-1">
                    {selectedCategory}
                    <X className="h-3 w-3 ml-2 cursor-pointer" onClick={() => setSelectedCategory("")} />
                  </Badge>
                )}
                {selectedType && selectedType !== "All" && (
                  <Badge variant="secondary" className="bg-green-100 text-green-700 px-3 py-1">
                    {selectedType}
                    <X className="h-3 w-3 ml-2 cursor-pointer" onClick={() => setSelectedType("")} />
                  </Badge>
                )}
                {selectedLocation && selectedLocation !== "All Cities" && (
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700 px-3 py-1">
                    {selectedLocation}
                    <X className="h-3 w-3 ml-2 cursor-pointer" onClick={() => setSelectedLocation("")} />
                  </Badge>
                )}
              </div>
            )}

            {/* Listings Grid */}
            <div className={viewMode === "grid" ? "grid md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-6"}>
              {filteredListings.map((listing) => (
                <Card key={listing.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden border-gray-200">
                  {viewMode === "grid" ? (
                    <>
                      <div className="relative overflow-hidden">
                        <img
                          src={listing.image}
                          alt={listing.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                          {listing.featured && (
                            <Badge className="bg-black text-white">
                              Featured
                            </Badge>
                          )}
                          {listing.verified && (
                            <Badge className="bg-green-500 text-white">Verified</Badge>
                          )}
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="bg-white/90 text-gray-700">{listing.category}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-semibold text-lg text-gray-900 line-clamp-1">{listing.title}</h3>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium text-gray-900">{listing.rating}</span>
                            <span className="text-xs text-gray-500">({listing.reviews})</span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4 line-clamp-2">{listing.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-gray-500 text-sm">
                            <MapPin className="h-4 w-4 mr-1" />
                            {listing.location.split(',')[0]}
                          </div>
                          <div className="text-right">
                            {listing.originalPrice > listing.price && (
                              <div className="text-sm text-gray-400 line-through">${listing.originalPrice}</div>
                            )}
                            <div className="text-xl font-bold text-gray-900">${listing.price}</div>
                            <div className="text-xs text-gray-500">per day</div>
                          </div>
                        </div>
                      </CardContent>
                    </>
                  ) : (
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="relative w-40 h-32 flex-shrink-0 overflow-hidden rounded-lg">
                          <img
                            src={listing.image}
                            alt={listing.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {listing.featured && (
                            <div className="absolute top-2 left-2">
                              <Badge className="bg-black text-white text-xs">
                                Featured
                              </Badge>
                            </div>
                          )}
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="font-semibold text-xl text-gray-900 mb-2">{listing.title}</h3>
                              <div className="flex items-center gap-3 mb-2">
                                <Badge variant="secondary" className="bg-blue-100 text-blue-700">{listing.category}</Badge>
                                {listing.verified && (
                                  <Badge className="bg-green-500 text-white text-xs">Verified</Badge>
                                )}
                                <div className="flex items-center space-x-1">
                                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                  <span className="text-sm font-medium">{listing.rating}</span>
                                  <span className="text-sm text-gray-500">({listing.reviews} reviews)</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              {listing.originalPrice > listing.price && (
                                <div className="text-sm text-gray-400 line-through">${listing.originalPrice}</div>
                              )}
                              <div className="text-2xl font-bold text-gray-900">${listing.price}</div>
                              <div className="text-sm text-gray-500">per day</div>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-3 line-clamp-2">{listing.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-gray-500">
                              <MapPin className="h-4 w-4 mr-1" />
                              {listing.location}
                            </div>
                            <Button size="sm" className="bg-black text-white hover:bg-gray-800">
                              View Details
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>

            {filteredListings.length === 0 && (
              <div className="text-center py-16">
                <div className="bg-gray-50 rounded-lg p-12 border border-gray-200 max-w-md mx-auto">
                  <Search className="h-16 w-16 mx-auto mb-6 text-gray-300" />
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">No items found</h3>
                  <p className="text-gray-600 mb-6">Try adjusting your search criteria or filters</p>
                  <Button onClick={clearAllFilters} className="bg-black text-white">
                    Clear All Filters
                  </Button>
                </div>
              </div>
            )}

            {/* Load More */}
            {filteredListings.length > 0 && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" className="border-gray-200">
                  Load More Items
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
