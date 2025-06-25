
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Calendar, Users, Zap, Camera, Car, Home, Navigation, TrendingUp, Shield, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchQuery) params.append('search', searchQuery);
    if (selectedLocation) params.append('location', selectedLocation);
    window.location.href = `/browse?${params.toString()}`;
  };

  const categories = [
    { name: "Electronics", icon: Zap, count: "1,200+", trend: "+12%" },
    { name: "Cameras", icon: Camera, count: "800+", trend: "+8%" },
    { name: "Vehicles", icon: Car, count: "2,100+", trend: "+15%" },
    { name: "Spaces", icon: Home, count: "3,500+", trend: "+20%" },
    { name: "Experiences", icon: Navigation, count: "600+", trend: "+25%" },
  ];

  const featuredListings = [
    {
      id: 1,
      title: "Professional Camera Kit",
      description: "Canon EOS R5 with multiple lenses",
      price: 89,
      originalPrice: 120,
      location: "New York",
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop",
      category: "Electronics",
      rating: 4.9,
      badge: "Pro Kit",
      verified: true
    },
    {
      id: 2,
      title: "Modern Apartment",
      description: "2BR apartment with city views",
      price: 120,
      originalPrice: 150,
      location: "Los Angeles",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      category: "Spaces",
      rating: 4.8,
      badge: "Featured",
      verified: true
    },
    {
      id: 3,
      title: "Mountain Bike",
      description: "High-performance electric mountain bike",
      price: 75,
      originalPrice: 95,
      location: "Chicago",
      image: "https://images.unsplash.com/photo-1544191696-15693072b1f8?w=400&h=300&fit=crop",
      category: "Vehicles",
      rating: 4.7,
      badge: "Popular",
      verified: false
    },
  ];

  const stats = [
    { label: "Active Items", value: "50K+", icon: Home, change: "+12%" },
    { label: "Happy Users", value: "25K+", icon: Users, change: "+18%" },
    { label: "Cities", value: "100+", icon: MapPin, change: "+5%" },
    { label: "Bookings", value: "150K+", icon: Calendar, change: "+22%" },
  ];

  const features = [
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "End-to-end encryption and verified payments"
    },
    {
      icon: Clock,
      title: "Instant Booking",
      description: "Book instantly or schedule for later"
    },
    {
      icon: TrendingUp,
      title: "Smart Pricing",
      description: "Competitive pricing based on market demand"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Rentify</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/browse" className="text-gray-600 hover:text-gray-900 font-medium">
                Browse
              </Link>
              <Link to="/how-it-works" className="text-gray-600 hover:text-gray-900 font-medium">
                How it Works
              </Link>
              <Link to="/dashboard" className="text-gray-600 hover:text-gray-900 font-medium">
                Dashboard
              </Link>
            </div>
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

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-gray-900">
              Rent Everything
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              The marketplace for sharing anything, anywhere.
            </p>

            {/* Search */}
            <div className="bg-gray-50 rounded-xl p-6 mb-16 max-w-3xl mx-auto">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="What do you need?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-12 border-gray-200 bg-white"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Where?"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="pl-12 h-12 border-gray-200 bg-white"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <Button 
                  onClick={handleSearch}
                  className="h-12 bg-black text-white hover:bg-gray-800"
                >
                  Search
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Browse Categories</h2>
            <p className="text-lg text-gray-600">Find what you're looking for</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <Link key={index} to="/browse">
                <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-gray-200">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors">
                      <category.icon className="h-6 w-6 text-gray-700" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.count}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Featured Items</h2>
            <p className="text-lg text-gray-600">Curated picks from our community</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredListings.map((listing) => (
              <Card key={listing.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden border-gray-200">
                <div className="relative overflow-hidden">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-black text-white">
                      {listing.badge}
                    </Badge>
                  </div>
                  {listing.verified && (
                    <div className="absolute top-4 right-4">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 text-white text-xs">✓</div>
                      </div>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-lg text-gray-900">{listing.title}</h3>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm font-medium text-gray-900">{listing.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{listing.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {listing.location}
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-gray-900">${listing.price}</div>
                      <div className="text-xs text-gray-500">per day</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/browse">
              <Button variant="outline" size="lg" className="border-gray-200">
                View All Items
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Rentify?</h2>
            <p className="text-lg text-gray-600">Simple, secure, reliable</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-gray-700" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to start?</h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Join the community and start earning or saving today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              List Your Item
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/browse">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Start Browsing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">R</span>
                </div>
                <span className="text-xl font-semibold">Rentify</span>
              </div>
              <p className="text-gray-600">The marketplace for sharing anything, anywhere.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/how-it-works" className="hover:text-gray-900">How it Works</Link></li>
                <li><a href="#" className="hover:text-gray-900">Safety</a></li>
                <li><a href="#" className="hover:text-gray-900">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact</a></li>
                <li><a href="#" className="hover:text-gray-900">Trust & Safety</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Terms</a></li>
                <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
                <li><a href="#" className="hover:text-gray-900">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
            <p>&copy; 2024 Rentify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
