
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
}
