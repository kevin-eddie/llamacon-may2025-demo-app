import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import Header from "../components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { generateAdvertisementImage } from "../lib/imageGenerator";
import { useToast } from "@/components/ui/use-toast";
import { getAdvertisementsByAdvertiser, Advertisement } from "../data/advertisements";
import { formatDistanceToNow } from "date-fns";

const AdvertiserDashboard: React.FC = () => {
  const { currentUser, isAuthenticated } = useAuth();
  const { toast } = useToast();
  const [adImageUrl, setAdImageUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    description: "",
    features: "",
    targetAudience: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [advertisements, setAdvertisements] = useState<Advertisement[]>([]);

  // Fetch advertisements when the component mounts
  useEffect(() => {
    if (currentUser?.id) {
      const ads = getAdvertisementsByAdvertiser(currentUser.id);
      setAdvertisements(ads);
    }
  }, [currentUser?.id]);

  // Refresh advertisements after generating a new one
  const refreshAdvertisements = () => {
    if (currentUser?.id) {
      const ads = getAdvertisementsByAdvertiser(currentUser.id);
      setAdvertisements(ads);
    }
  };

  // Redirect if not an advertiser
  if (!isAuthenticated || !currentUser?.is_advertiser) {
    return <Navigate to="/" replace />;
  }

  const handleGenerateClick = () => {
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const imageUrl = await generateAdvertisementImage(currentUser, {
        name: productDetails.name,
        description: productDetails.description,
        features: productDetails.features,
        targetAudience: productDetails.targetAudience
      });
      setAdImageUrl(imageUrl);
      setShowForm(false);
      setProductDetails({
        name: "",
        description: "",
        features: "",
        targetAudience: ""
      });
      toast({
        title: "Success!",
        description: "Your advertisement has been generated and saved.",
      });
      
      // Refresh advertisements list after generating a new one
      refreshAdvertisements();
    } catch (error) {
      console.error("Error generating advertisement:", error);
      setError(error instanceof Error ? error.message : "Failed to generate advertisement. Please try again.");
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to generate advertisement. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Format the date for display
  const formatDate = (dateString: string) => {
    return formatDistanceToNow(new Date(dateString), { addSuffix: true });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-4 pb-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Advertiser Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome, {currentUser.display_name} ({currentUser.business_type})
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Business Profile</CardTitle>
                <CardDescription>Your business information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Business Type</h3>
                    <p className="text-muted-foreground">{currentUser.business_type}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Description</h3>
                    <p className="text-muted-foreground">{currentUser.business_description}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Target Audience</h3>
                    <p className="text-muted-foreground">
                      Age Range: {currentUser.target_audience?.age_range}<br />
                      Interests: {currentUser.target_audience?.interests?.join(", ")}<br />
                      Demographics: {currentUser.target_audience?.demographics?.join(", ")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Base Image Generator</CardTitle>
                <CardDescription>Create new targeted advertisements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {!showForm ? (
                    <Button 
                      onClick={handleGenerateClick} 
                      className="w-full"
                    >
                      Generate New Base Image
                    </Button>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="productName">Product Name</Label>
                        <Textarea
                          id="productName"
                          value={productDetails.name}
                          onChange={(e) => setProductDetails(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Enter your product name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="productDescription">Product Description</Label>
                        <Textarea
                          id="productDescription"
                          value={productDetails.description}
                          onChange={(e) => setProductDetails(prev => ({ ...prev, description: e.target.value }))}
                          placeholder="Describe your product"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="productFeatures">Key Features</Label>
                        <Textarea
                          id="productFeatures"
                          value={productDetails.features}
                          onChange={(e) => setProductDetails(prev => ({ ...prev, features: e.target.value }))}
                          placeholder="List the main features of your product"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="targetAudience">Specific Target Audience</Label>
                        <Textarea
                          id="targetAudience"
                          value={productDetails.targetAudience}
                          onChange={(e) => setProductDetails(prev => ({ ...prev, targetAudience: e.target.value }))}
                          placeholder="Describe who this specific product is for"
                          required
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          type="submit" 
                          className="flex-1"
                          disabled={loading}
                        >
                          {loading ? "Generating..." : "Generate Advertisement"}
                        </Button>
                        <Button 
                          type="button" 
                          variant="outline"
                          onClick={() => setShowForm(false)}
                          disabled={loading}
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  )}

                  {adImageUrl && (
                    <div className="mt-4">
                      <img 
                        src={adImageUrl} 
                        alt="Generated Advertisement" 
                        className="w-full rounded-lg shadow-sm"
                      />
                      <div className="mt-2 text-sm text-muted-foreground">
                        Generated based on your business profile and product details
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Advertisement Gallery Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Your Advertisement Gallery</CardTitle>
              <CardDescription>All advertisements you've created</CardDescription>
            </CardHeader>
            <CardContent>
              {advertisements.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">You haven't created any advertisements yet.</p>
                  <Button onClick={handleGenerateClick}>Create Your First Ad</Button>
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {advertisements.map((ad) => (
                    <Card key={ad.id} className="overflow-hidden border">
                      <div className="aspect-square relative">
                        <img 
                          src={ad.image_url} 
                          alt={ad.product_details?.name || "Advertisement"} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-bold mb-1">{ad.product_details?.name}</h3>
                        <p className="text-sm line-clamp-2 mb-2">{ad.product_details?.description}</p>
                        <div className="flex justify-between items-center text-xs text-muted-foreground">
                          <span>Created {formatDate(ad.date_created)}</span>
                          <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">Active</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdvertiserDashboard; 