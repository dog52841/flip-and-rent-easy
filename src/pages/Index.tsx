
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Calendar, Users, Zap, Camera, Car, Home, Navigation } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const categories = [
    { name: "Electronics", icon: Zap, color: "bg-blue-500", count: "1,200+" },
    { name: "Cameras", icon: Camera, color: "bg-purple-500", count: "800+" },
    { name: "Vehicles", icon: Car, color: "bg-green-500", count: "2,100+" },
    { name: "Accommodation", icon: Home, color: "bg-orange-500", count: "3,500+" },
    { name: "Experiences", icon: Navigation, color: "bg-red-500", count: "600+" },
  ];

  // Location-based pricing examples
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
      discount: "25% off in Mumbai"
    },
    {
      id: 2,
      title: "Cozy Apartment",
      description: "2 BHK with sea view",
      price: 120,
      originalPrice: 180,
      location: "Goa",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      category: "Accommodation",
      rating: 4.8,
      discount: "Peak season pricing"
    },
    {
      id: 3,
      title: "Mountain Bike",
      description: "High-end trail bike",
      price: 35,
      originalPrice: 45,
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1544191696-15693072b1f8?w=400&h=300&fit=crop",
      category: "Vehicles",
      rating: 4.7,
      discount: "Weekend special"
    },
  ];

  const stats = [
    { label: "Active Items", value: "50K+", icon: Home },
    { label: "Happy Users", value: "25K+", icon: Users },
    { label: "Cities", value: "100+", icon: MapPin },
    { label: "Bookings", value: "150K+", icon: Calendar },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Clean Navigation */}
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
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/browse" className="text-gray-700 hover:text-blue-600 transition-colors">
                Browse
              </Link>
              <Link to="/how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">
                How it Works
              </Link>
              <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors">
                Dashboard
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline">Sign In</Button>
              <Button className="bg-gradient-to-r from-blue-600 to-green-600">List Item</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Minimalistic Hero */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 text-gray-900">
              Rent Anything,
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Anywhere
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              From cameras to cars, rooms to experiences. Discover endless possibilities.
            </p>

            {/* Clean Search */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-16 max-w-3xl mx-auto">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="What do you need?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 border-gray-200"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Where?"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="pl-10 h-12 border-gray-200"
                  />
                </div>
                <Link to="/browse">
                  <Button className="h-12 w-full bg-gradient-to-r from-blue-600 to-green-600">
                    Search
                  </Button>
                </Link>
              </div>
            </div>

            {/* Simple Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clean Categories */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Browse Categories</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <Link key={index} to="/browse">
                <Card className="group cursor-pointer hover:shadow-lg transition-all duration-200 border-none">
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 ${category.color} rounded-lg mb-3 group-hover:scale-110 transition-transform`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-medium mb-1">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.count}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured with Location Pricing */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Near You</h2>
            <p className="text-gray-600">Prices automatically adjusted for your location</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredListings.map((listing) => (
              <Card key={listing.id} className="group cursor-pointer hover:shadow-lg transition-all duration-200 overflow-hidden border-none">
                <div className="relative overflow-hidden">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 right-3 bg-green-600 text-white">
                    {listing.discount}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg">{listing.title}</h3>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm font-medium">{listing.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{listing.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {listing.location}
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-400 line-through">₹{listing.originalPrice}</span>
                        <span className="text-2xl font-bold text-green-600">₹{listing.price}</span>
                      </div>
                      <div className="text-sm text-gray-500">per day</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/browse">
              <Button variant="outline" size="lg">View All</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Start Earning Today</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            List your items and connect with people who need them.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            List Your First Item
          </Button>
        </div>
      </section>

      {/* Clean Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">R</span>
                </div>
                <span className="text-xl font-bold">Rentify</span>
              </div>
              <p className="text-gray-400">Rent anything, anywhere.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/how-it-works" className="hover:text-white transition-colors">How it Works</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Rentify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
