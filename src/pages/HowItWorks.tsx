
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, MessageSquare, CreditCard, Star, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Find What You Need",
      description: "Browse thousands of items available for rent in your area"
    },
    {
      icon: MessageSquare,
      title: "Connect with Owners",
      description: "Message item owners directly to discuss details and availability"
    },
    {
      icon: CreditCard,
      title: "Book Securely",
      description: "Complete your booking with secure payment and protection"
    },
    {
      icon: Star,
      title: "Enjoy & Review",
      description: "Use the item and leave a review for the community"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "All payments are protected with secure processing"
    },
    {
      icon: Users,
      title: "Verified Community",
      description: "Connect with trusted renters and owners"
    },
    {
      icon: Star,
      title: "Quality Assurance",
      description: "Rating system ensures quality experiences"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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
              <Button>List Item</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl font-bold mb-6">How Rentify Works</h1>
          <p className="text-xl text-gray-600 mb-12">
            Simple steps to rent anything you need, or earn from what you own
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">For Renters</h2>
            <p className="text-gray-600">Get what you need in 4 simple steps</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="text-center border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-sm font-medium text-gray-500 mb-2">STEP {index + 1}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Rentify?</h2>
            <p className="text-gray-600">Built for trust, convenience, and community</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/browse">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Browsing
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              List Your Item
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
