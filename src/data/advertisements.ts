import { User } from "../types/post";

export interface Advertisement {
  id: string;
  advertiser: User;
  image_url: string;
  date_created: string;
  target_audience: {
    age_range: string;
    interests: string[];
    demographics: string[];
  };
  business_type: string;
  business_description: string;
}

// Mock advertisements data
export const advertisements: Advertisement[] = [
  {
    id: "ad1",
    advertiser: {
      id: "advertiser1",
      username: "eco_tech",
      display_name: "EcoTech Solutions",
      avatar_url: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9",
      bio: "Sustainable Technology Solutions",
      is_advertiser: true,
      business_type: "Technology",
      business_description: "Leading provider of eco-friendly technology solutions for businesses and homes",
      target_audience: {
        age_range: "25-45",
        interests: ["sustainability", "technology", "environmental conservation"],
        demographics: ["urban professionals", "environmentally conscious consumers"]
      }
    },
    image_url: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9",
    date_created: "2025-04-15T10:00:00Z",
    target_audience: {
      age_range: "25-45",
      interests: ["sustainability", "technology", "environmental conservation"],
      demographics: ["urban professionals", "environmentally conscious consumers"]
    },
    business_type: "Technology",
    business_description: "Leading provider of eco-friendly technology solutions for businesses and homes"
  },
  {
    id: "ad2",
    advertiser: {
      id: "advertiser2",
      username: "green_living",
      display_name: "Green Living Co.",
      avatar_url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8",
      bio: "Sustainable Living Products",
      is_advertiser: true,
      business_type: "Retail",
      business_description: "Your one-stop shop for sustainable living products and eco-friendly alternatives",
      target_audience: {
        age_range: "18-35",
        interests: ["sustainable living", "zero waste", "eco-friendly products"],
        demographics: ["environmentally conscious", "urban dwellers", "young professionals"]
      }
    },
    image_url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8",
    date_created: "2025-04-15T11:00:00Z",
    target_audience: {
      age_range: "18-35",
      interests: ["sustainable living", "zero waste", "eco-friendly products"],
      demographics: ["environmentally conscious", "urban dwellers", "young professionals"]
    },
    business_type: "Retail",
    business_description: "Your one-stop shop for sustainable living products and eco-friendly alternatives"
  }
];

// Function to get advertisements by advertiser ID
export const getAdvertisementsByAdvertiser = (advertiserId: string) => {
  return advertisements.filter(ad => ad.advertiser.id === advertiserId);
};

// Function to get all advertisements
export const getAllAdvertisements = () => {
  return advertisements;
};

// Function to add a new advertisement
export const addAdvertisement = (advertisement: Advertisement) => {
  advertisements.push(advertisement);
  return advertisement;
}; 