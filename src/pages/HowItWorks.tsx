
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, MessageSquare, CreditCard, Star, Shield, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

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
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            How It <span className="text-blue-600">Works</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Rent anything you need or earn from what you own. It's simple, secure, and community-driven.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">For Renters</h2>
            <p className="text-lg text-gray-600">Get what you need in 4 simple steps</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-white">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-sm font-semibold text-blue-600 mb-3 tracking-wide">
                      STEP {index + 1}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose Rentify?</h2>
            <p className="text-lg text-gray-600">Built for trust, convenience, and community</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-blue-100 group-hover:bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 shadow-md">
                  <benefit.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of users who are already renting and earning with Rentify
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/browse">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg px-8 py-3 text-lg font-semibold min-w-[200px]"
              >
                Start Browsing
              </Button>
            </Link>
            <Link to="/list-item">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold min-w-[200px] transition-all duration-300"
              >
                List Your Item
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
