
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
      color: "from-blue-500 to-cyan-500",
      trend: "up"
    },
    { 
      label: "Total Earnings", 
      value: "₹12,450", 
      icon: DollarSign, 
      change: "+₹2,340 this month",
      color: "from-green-500 to-emerald-500",
      trend: "up"
    },
    { 
      label: "Total Bookings", 
      value: "24", 
      icon: Calendar, 
      change: "+8 this week",
      color: "from-purple-500 to-pink-500",
      trend: "up"
    },
    { 
      label: "Average Rating", 
      value: "4.8", 
      icon: Star, 
      change: "+0.2 improvement",
      color: "from-orange-500 to-red-500",
      trend: "up"
    },
  ];

  const listings = [
    {
      id: 1,
      title: "Canon EOS R5 Camera",
      status: "Active",
      price: "₹89/day",
      bookings: 5,
      views: 234,
      messages: 12,
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=200&h=150&fit=crop",
      earnings: "₹2,670",
      rating: 4.9
    },
    {
      id: 2,
      title: "Mountain Bike",
      status: "Rented",
      price: "₹45/day",
      bookings: 3,
      views: 156,
      messages: 8,
      image: "https://images.unsplash.com/photo-1544191696-15693072b1f8?w=200&h=150&fit=crop",
      earnings: "₹1,350",
      rating: 4.7
    },
    {
      id: 3,
      title: "MacBook Pro",
      status: "Active",
      price: "₹120/day",
      bookings: 8,
      views: 387,
      messages: 19,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=150&fit=crop",
      earnings: "₹9,600",
      rating: 4.8
    }
  ];

  const quickActions = [
    { title: "List New Item", icon: Plus, color: "from-blue-500 to-purple-500", href: "#" },
    { title: "View Analytics", icon: BarChart3, color: "from-green-500 to-teal-500", href: "#" },
    { title: "Manage Bookings", icon: Calendar, color: "from-orange-500 to-red-500", href: "#" },
    { title: "Update Profile", icon: Users, color: "from-pink-500 to-rose-500", href: "#" },
  ];

  const recentActivity = [
    { type: "booking", message: "New booking for Canon EOS R5", time: "2 hours ago", color: "green" },
    { type: "message", message: "New message about MacBook Pro", time: "4 hours ago", color: "blue" },
    { type: "review", message: "New 5-star review received", time: "1 day ago", color: "yellow" },
    { type: "earning", message: "Payment of ₹540 received", time: "2 days ago", color: "green" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
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
                <div className="text-xs text-gray-500 -mt-1">Dashboard</div>
              </div>
            </Link>
            <div className="flex items-center space-x-3">
              <Link to="/browse">
                <Button variant="outline" className="border-gray-300 hover:border-blue-400 transition-all duration-300">
                  Browse Items
                </Button>
              </Link>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg">
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
              <h1 className="text-4xl font-bold mb-2 text-gray-900">Welcome back! 👋</h1>
              <p className="text-xl text-gray-600">Here's what's happening with your rentals</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-gray-200/50">
              <div className="text-sm text-gray-600">This Month</div>
              <div className="text-2xl font-bold text-green-600">+₹2,340</div>
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
            <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-none bg-white/60 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">{action.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none bg-white/60 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
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
            <Card className="border-none bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900">Your Listings</CardTitle>
                    <p className="text-gray-600 mt-1">Manage and track your rental items</p>
                  </div>
                  <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {listings.map((listing) => (
                    <div key={listing.id} className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center space-x-4">
                        <img
                          src={listing.image}
                          alt={listing.title}
                          className="w-20 h-20 rounded-xl object-cover"
                        />
                        <div className="flex-grow">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-bold text-lg text-gray-900">{listing.title}</h3>
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
                  <Button variant="outline" className="border-gray-300 hover:border-blue-400">
                    View All Listings
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card className="border-none bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">Recent Activity</CardTitle>
                <p className="text-gray-600">Latest updates and notifications</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-200/50">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        activity.color === 'green' ? 'bg-green-500' :
                        activity.color === 'blue' ? 'bg-blue-500' :
                        activity.color === 'yellow' ? 'bg-yellow-500' : 'bg-gray-500'
                      }`}></div>
                      <div className="flex-grow">
                        <p className="text-sm text-gray-900 font-medium">{activity.message}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button variant="outline" className="w-full border-gray-300 hover:border-blue-400">
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
