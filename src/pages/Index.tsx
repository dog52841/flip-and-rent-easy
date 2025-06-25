
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
    // Navigate to browse page with search parameters
    const params = new URLSearchParams();
    if (searchQuery) params.append('search', searchQuery);
    if (selectedLocation) params.append('location', selectedLocation);
    window.location.href = `/browse?${params.toString()}`;
  };

  const categories = [
    { name: "Electronics", icon: Zap, color: "from-purple-500 to-blue-500", count: "1,200+", trend: "+12%" },
    { name: "Cameras", icon: Camera, color: "from-pink-500 to-orange-500", count: "800+", trend: "+8%" },
    { name: "Vehicles", icon: Car, color: "from-green-500 to-teal-500", count: "2,100+", trend: "+15%" },
    { name: "Spaces", icon: Home, color: "from-blue-500 to-cyan-500", count: "3,500+", trend: "+20%" },
    { name: "Experiences", icon: Navigation, color: "from-red-500 to-pink-500", count: "600+", trend: "+25%" },
  ];

  const featuredListings = [
    {
      id: 1,
      title: "Professional Camera Kit",
      description: "Canon EOS R5 with multiple lenses",
      price: 89,
      originalPrice: 120,
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop",
      category: "Electronics",
      rating: 4.9,
      badge: "Pro Kit",
      verified: true
    },
    {
      id: 2,
      title: "Luxury Beach Villa",
      description: "3 BHK villa with private beach access",
      price: 320,
      originalPrice: 450,
      location: "Goa",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      category: "Spaces",
      rating: 4.8,
      badge: "Luxury",
      verified: true
    },
    {
      id: 3,
      title: "Adventure E-Bike",
      description: "High-performance electric mountain bike",
      price: 75,
      originalPrice: 95,
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1544191696-15693072b1f8?w=400&h=300&fit=crop",
      category: "Vehicles",
      rating: 4.7,
      badge: "Eco-Friendly",
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
      title: "Dynamic Pricing",
      description: "Smart pricing based on demand and location"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                  Rentify
                </span>
                <div className="text-xs text-gray-500 -mt-1">Rent. Share. Thrive.</div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/browse" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                Browse
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/how-it-works" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                How it Works
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                Dashboard
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" className="border-gray-300 hover:border-blue-400 transition-all duration-300">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg">
                List Item
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-green-600/5"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Live in 100+ cities across India</span>
            </div>
            
            <h1 className="text-7xl md:text-8xl font-bold mb-8 tracking-tight">
              <span className="text-gray-900">Rent</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                Everything
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              From cameras to cars, spaces to experiences. The future of sharing is here.
            </p>

            {/* Enhanced Search */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-16 max-w-4xl mx-auto border border-gray-200/50">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative group">
                  <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                  <Input
                    placeholder="What do you need?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-14 border-gray-200/50 bg-white/50 focus:bg-white transition-all duration-300 rounded-xl"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <div className="relative group">
                  <MapPin className="absolute left-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                  <Input
                    placeholder="Where?"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="pl-12 h-14 border-gray-200/50 bg-white/50 focus:bg-white transition-all duration-300 rounded-xl"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <Button 
                  onClick={handleSearch}
                  className="h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg rounded-xl font-semibold"
                >
                  Search Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Dynamic Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 group-hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-gray-600 text-sm mb-2">{stat.label}</div>
                    <div className="text-green-600 text-xs font-semibold">{stat.change}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Trending Categories</h2>
            <p className="text-xl text-gray-600">Discover what's popular in your area</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <Link key={index} to="/browse">
                <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-500 border-none bg-white/60 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-8 text-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" 
                         style={{backgroundImage: `linear-gradient(135deg, ${category.color.split(' ')[1]}, ${category.color.split(' ')[3]})`}}></div>
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{category.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{category.count}</p>
                    <div className="inline-flex items-center text-xs text-green-600 font-semibold">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {category.trend}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-20 px-4 bg-white/30 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Featured This Week</h2>
            <p className="text-xl text-gray-600">Handpicked items from verified owners</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredListings.map((listing) => (
              <Card key={listing.id} className="group cursor-pointer hover:shadow-2xl transition-all duration-500 overflow-hidden border-none bg-white/80 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold">
                      {listing.badge}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    {listing.verified && (
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 text-white">✓</div>
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-xl text-gray-900">{listing.title}</h3>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-500 text-lg">★</span>
                      <span className="text-sm font-bold text-gray-900">{listing.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{listing.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {listing.location}
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-sm text-gray-400 line-through">₹{listing.originalPrice}</span>
                        <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">₹{listing.price}</span>
                      </div>
                      <div className="text-xs text-gray-500">per day</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/browse">
              <Button variant="outline" size="lg" className="border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300">
                Explore All Items
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose Rentify?</h2>
            <p className="text-xl text-gray-600">Built for the modern sharing economy</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 group-hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-8">Ready to Start?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of users already earning and saving with Rentify.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 shadow-xl">
              List Your First Item
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/browse">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 transition-all duration-300">
                Start Browsing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <div>
                  <span className="text-2xl font-bold">Rentify</span>
                  <div className="text-xs text-gray-400 -mt-1">Rent. Share. Thrive.</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">The future of sharing economy. Rent anything, anywhere.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Platform</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/how-it-works" className="hover:text-white transition-colors">How it Works</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety Guidelines</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Trust & Safety</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Legal</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Rentify. All rights reserved. Made with ❤️ in India.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
