export interface Post {
  post_id: string;
  date_posted: string;
  image_url: string;
  caption: string;
  location?: {
    name: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  likes: number;
  saves: number;
  hashtags: string[];
  tagged_users: string[];
  filter_used?: string;
  engagement_rate?: number;
  user: User;
  is_ad?: boolean;
  comments?: any[];
  isCustomizing?: boolean;
}

export interface User {
  id: string;
  username: string;
  display_name: string;
  avatar_url: string;
  bio?: string;
  followers_count?: number;
  following_count?: number;
  posts_count?: number;
  is_advertiser?: boolean;
  business_type?: string;
  business_description?: string;
  target_audience?: {
    age_range?: string;
    interests?: string[];
    demographics?: string[];
  };
  interests?: string[];
  age_group?: string;
  preferences?: string[];
  demographics?: string[];
}
