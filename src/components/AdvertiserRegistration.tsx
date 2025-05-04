import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const businessTypes = [
  "E-commerce",
  "Technology",
  "Fashion",
  "Food & Beverage",
  "Health & Wellness",
  "Education",
  "Travel",
  "Entertainment",
  "Home & Garden",
  "Other"
];

const AdvertiserRegistration: React.FC = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    displayName: "",
    businessType: "",
    businessDescription: "",
    targetAgeRange: "",
    targetInterests: "",
    targetDemographics: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create advertiser user object
    const advertiserUser = {
      id: `adv-${Date.now()}`,
      username: formData.username,
      display_name: formData.displayName,
      avatar_url: "",
      is_advertiser: true,
      business_type: formData.businessType,
      business_description: formData.businessDescription,
      target_audience: {
        age_range: formData.targetAgeRange,
        interests: formData.targetInterests.split(",").map(i => i.trim()),
        demographics: formData.targetDemographics.split(",").map(d => d.trim())
      }
    };

    // Store in localStorage for now (in a real app, this would go to a backend)
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push(advertiserUser);
    localStorage.setItem("users", JSON.stringify(users));

    // Log in the new advertiser
    login(formData.username);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create Advertiser Account</CardTitle>
        <CardDescription>
          Set up your business profile to start creating targeted advertisements
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="displayName">Business Name</Label>
            <Input
              id="displayName"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="businessType">Business Type</Label>
            <Select
              value={formData.businessType}
              onValueChange={(value) => handleSelectChange("businessType", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your business type" />
              </SelectTrigger>
              <SelectContent>
                {businessTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="businessDescription">Business Description</Label>
            <Textarea
              id="businessDescription"
              name="businessDescription"
              value={formData.businessDescription}
              onChange={handleChange}
              placeholder="Describe your business and what makes it unique..."
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="targetAgeRange">Target Age Range</Label>
            <Input
              id="targetAgeRange"
              name="targetAgeRange"
              value={formData.targetAgeRange}
              onChange={handleChange}
              placeholder="e.g., 25-35"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="targetInterests">Target Interests (comma-separated)</Label>
            <Input
              id="targetInterests"
              name="targetInterests"
              value={formData.targetInterests}
              onChange={handleChange}
              placeholder="e.g., technology, fitness, travel"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="targetDemographics">Target Demographics (comma-separated)</Label>
            <Input
              id="targetDemographics"
              name="targetDemographics"
              value={formData.targetDemographics}
              onChange={handleChange}
              placeholder="e.g., urban professionals, parents, students"
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Create Advertiser Account
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AdvertiserRegistration; 