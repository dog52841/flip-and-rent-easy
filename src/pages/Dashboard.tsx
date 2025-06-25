
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Calendar, DollarSign, Package, Star, TrendingUp, Users, Eye, MessageSquare, ArrowRight, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const stats = [
    { 
      label: "Active Listings", 
      value: "3", 
      icon: Package, 
      change: "+1 this week",
      trend: "up"
    },
    { 
      label: "Total Earnings", 
      value: "$1,245", 
      icon: DollarSign, 
      change: "+$234 this month",
      trend: "up"
    },
    { 
      label: "Total Bookings", 
      value: "24", 
      icon: Calendar, 
      change: "+8 this week",
      trend: "up"
    },
    { 
      label: "Average Rating", 
      value: "4.8", 
      icon: Star, 
      change: "+0.2 improvement",
      trend: "up"
    },
  ];

  const listings = [
    {
      id: 1,
      title: "Canon EOS R5 Camera",
      status: "Active",
      price: "$89/day",
      bookings: 5,
      views: 234,
      messages: 12,
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=200&h=150&fit=crop",
      earnings: "$267",
      rating: 4.9
    },
    {
      id: 2,
      title: "Mountain Bike",
      status: "Rented",
      price: "$45/day",
      bookings: 3,
      views: 156,
      messages: 8,
      image: "https://images.unsplash.com/photo-1544191696-15693072b1f8?w=200&h=150&fit=crop",
      earnings: "$135",
      rating: 4.7
    },
    {
      id: 3,
      title: "MacBook Pro",
      status: "Active",
      price: "$120/day",
      bookings: 8,
      views: 387,
      messages: 19,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=150&fit=crop",
      earnings: "$960",
      rating: 4.8
    }
  ];

  const quickActions = [
    { title: "List New Item", icon: Plus, href: "#" },
    { title: "View Analytics", icon: BarChart3, href: "#" },
    { title: "Manage Bookings", icon: Calendar, href: "#" },
    { title: "Update Profile", icon: Users, href: "#" },
  ];

  const recentActivity = [
    { type: "booking", message: "New booking for Canon EOS R5", time: "2 hours ago" },
    { type: "message", message: "New message about MacBook Pro", time: "4 hours ago" },
    { type: "review", message: "New 5-star review received", time: "1 day ago" },
    { type: "earning", message: "Payment of $54 received", time: "2 days ago" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
                <div className="text-xs text-gray-500">Dashboard</div>
              </div>
            </Link>
            <div className="flex items-center space-x-3">
              <Link to="/browse">
                <Button variant="outline" className="border-gray-200">
                  Browse Items
                </Button>
              </Link>
              <Button className="bg-black text-white hover:bg-gray-800">
                <Plus className="h-4 w-4 mr-2" />
                List New Item
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2 text-gray-900">Welcome back</h1>
              <p className="text-lg text-gray-600">Here's what's happening with your rentals</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="text-sm text-gray-600">This Month</div>
              <div className="text-2xl font-bold text-green-600">+$234</div>
              <div className="text-xs text-green-600 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +23% vs last month
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {quickActions.map((action, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-md transition-all duration-300 border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mb-3 group-hover:bg-gray-200 transition-colors">
                  <action.icon className="h-6 w-6 text-gray-700" />
                </div>
                <h3 className="font-semibold text-gray-900">{action.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-gray-700" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
                <div className="flex items-center text-sm text-green-600 font-medium">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  {stat.change}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Listings */}
          <div className="lg:col-span-2">
            <Card className="border-gray-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900">Your Listings</CardTitle>
                    <p className="text-gray-600 mt-1">Manage and track your rental items</p>
                  </div>
                  <Button size="sm" className="bg-black text-white hover:bg-gray-800">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {listings.map((listing) => (
                    <div key={listing.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <div className="flex items-center space-x-4">
                        <img
                          src={listing.image}
                          alt={listing.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-grow">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-lg text-gray-900">{listing.title}</h3>
                            <Badge 
                              variant={listing.status === "Active" ? "default" : "secondary"}
                              className={listing.status === "Active" ? "bg-green-500" : "bg-orange-500"}
                            >
                              {listing.status}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div className="flex items-center text-gray-600">
                              <DollarSign className="h-4 w-4 mr-1 text-green-500" />
                              {listing.price}
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Calendar className="h-4 w-4 mr-1 text-blue-500" />
                              {listing.bookings} bookings
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Eye className="h-4 w-4 mr-1 text-purple-500" />
                              {listing.views} views
                            </div>
                            <div className="flex items-center text-gray-600">
                              <MessageSquare className="h-4 w-4 mr-1 text-orange-500" />
                              {listing.messages} messages
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-3">
                            <div className="text-sm">
                              <span className="text-gray-600">Total earned: </span>
                              <span className="font-bold text-green-600">{listing.earnings}</span>
                            </div>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-500 mr-1" />
                              <span className="font-medium">{listing.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline" className="border-gray-200">
                    View All Listings
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-900">Recent Activity</CardTitle>
                <p className="text-gray-600">Latest updates and notifications</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="w-2 h-2 rounded-full mt-2 bg-blue-500"></div>
                      <div className="flex-grow">
                        <p className="text-sm text-gray-900 font-medium">{activity.message}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button variant="outline" className="w-full border-gray-200">
                    View All Activity
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
