
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Calendar, DollarSign, Package, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const stats = [
    { label: "Active Listings", value: "3", icon: Package },
    { label: "Total Earnings", value: "₹12,450", icon: DollarSign },
    { label: "Bookings", value: "24", icon: Calendar },
    { label: "Rating", value: "4.8", icon: Star },
  ];

  const listings = [
    {
      id: 1,
      title: "Canon EOS R5 Camera",
      status: "Active",
      price: "₹89/day",
      bookings: 5,
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=200&h=150&fit=crop"
    },
    {
      id: 2,
      title: "Mountain Bike",
      status: "Rented",
      price: "₹45/day",
      bookings: 3,
      image: "https://images.unsplash.com/photo-1544191696-15693072b1f8?w=200&h=150&fit=crop"
    },
    {
      id: 3,
      title: "MacBook Pro",
      status: "Active",
      price: "₹120/day",
      bookings: 8,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=150&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Rentify
              </span>
            </Link>
            <div className="flex items-center space-x-3">
              <Link to="/browse">
                <Button variant="outline">Browse</Button>
              </Link>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                List Item
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-gray-600">Manage your listings and track your earnings</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <stat.icon className="h-8 w-8 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Listings */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Your Listings</CardTitle>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add New
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {listings.map((listing) => (
                <div key={listing.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-grow">
                    <h3 className="font-semibold">{listing.title}</h3>
                    <p className="text-sm text-gray-600">{listing.bookings} bookings</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{listing.price}</p>
                    <Badge variant={listing.status === "Active" ? "default" : "secondary"}>
                      {listing.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
