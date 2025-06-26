
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import { Upload, DollarSign, MapPin } from "lucide-react";

const ListItem = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  // Redirect if not logged in
  if (!user) {
    navigate("/auth");
    return null;
  }

  const categories = ["Electronics", "Cameras", "Vehicles", "Spaces", "Tools", "Sports", "Home & Garden"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !description.trim() || !price || !category || !location.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (parseFloat(price) <= 0) {
      toast({
        title: "Invalid Price",
        description: "Please enter a valid price greater than 0.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase
        .from("listings")
        .insert([
          {
            user_id: user.id,
            title: title.trim(),
            description: description.trim(),
            price: parseFloat(price),
            category,
            location: location.trim(),
            image_url: imageUrl.trim() || null,
            available: true,
          },
        ])
        .select();

      if (error) {
        console.error("Error creating listing:", error);
        toast({
          title: "Error",
          description: "Failed to create listing. Please try again.",
          variant: "destructive",
        });
        return;
      }

      console.log("Listing created successfully:", data);
      
      toast({
        title: "Success!",
        description: "Your item has been listed successfully!",
      });
      
      // Reset form
      setTitle("");
      setDescription("");
      setPrice("");
      setCategory("");
      setLocation("");
      setImageUrl("");
      
      // Navigate to browse page
      navigate("/browse");
    } catch (error: any) {
      console.error("Unexpected error:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">List Your Item</h1>
            <p className="text-gray-600">Share what you have and start earning</p>
          </div>

          <Card className="shadow-lg border-0">
            <CardHeader className="pb-6">
              <CardTitle className="text-xl text-center">Item Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Item Title *
                  </label>
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="What are you renting out?"
                    className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Description *
                  </label>
                  <Textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe your item in detail..."
                    rows={4}
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      <DollarSign className="inline h-4 w-4 mr-1" />
                      Price per day *
                    </label>
                    <Input
                      type="number"
                      step="0.01"
                      min="0"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="0.00"
                      className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Category *
                    </label>
                    <Select value={category} onValueChange={setCategory} required>
                      <SelectTrigger className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    <MapPin className="inline h-4 w-4 mr-1" />
                    Location *
                  </label>
                  <Input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="City, State"
                    className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    <Upload className="inline h-4 w-4 mr-1" />
                    Image URL
                  </label>
                  <Input
                    type="url"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="https://example.com/image.jpg"
                    className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Add a photo URL to make your listing more attractive
                  </p>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-lg font-semibold shadow-md" 
                  disabled={loading}
                >
                  {loading ? "Creating Listing..." : "List Item"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
