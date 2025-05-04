import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import Header from "../components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { generateAdvertisementImage } from "../lib/imageGenerator";

const AdvertiserDashboard: React.FC = () => {
  const { currentUser, isAuthenticated } = useAuth();
  const [adImageUrl, setAdImageUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Redirect if not an advertiser
  if (!isAuthenticated || !currentUser?.is_advertiser) {
    return <Navigate to="/" replace />;
  }

  const generateNewAd = async () => {
    setIsGenerating(true);
    try {
      const imageUrl = await generateAdvertisementImage(currentUser);
      setAdImageUrl(imageUrl);
    } catch (error) {
      console.error('Failed to generate advertisement:', error);
    } finally {
      setIsGenerating(false);
    }
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

          <div className="grid gap-6 md:grid-cols-2">
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
                <CardTitle>Advertisement Generator</CardTitle>
                <CardDescription>Create new targeted advertisements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button 
                    onClick={generateNewAd} 
                    disabled={isGenerating}
                    className="w-full"
                  >
                    {isGenerating ? "Generating..." : "Generate New Advertisement"}
                  </Button>

                  {adImageUrl && (
                    <div className="mt-4">
                      <img 
                        src={adImageUrl} 
                        alt="Generated Advertisement" 
                        className="w-full rounded-lg shadow-sm"
                      />
                      <div className="mt-2 text-sm text-muted-foreground">
                        Generated based on your business profile and target audience
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdvertiserDashboard; 