
import { Post, User } from "../types/post";

export const users: User[] = [
  {
    id: "user1",
    username: "travelgram",
    display_name: "Alex Traveler",
    avatar_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "Travel enthusiast | Photographer | Adventure seeker",
    followers_count: 15230,
    following_count: 523,
    posts_count: 247
  },
  {
    id: "user2",
    username: "foodie_adventures",
    display_name: "Sam Foodie",
    avatar_url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    bio: "Food critic | Recipe developer | Restaurant explorer",
    followers_count: 8750,
    following_count: 312,
    posts_count: 189
  },
  {
    id: "user3",
    username: "tech_reviewer",
    display_name: "Jordan Tech",
    avatar_url: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    bio: "Tech enthusiast | Gadget reviewer | Software developer",
    followers_count: 22100,
    following_count: 245,
    posts_count: 315
  }
];

export const posts: Post[] = [
  // User 1 posts - Travel theme
  {
    post_id: "IG-2025-0413-001",
    date_posted: "2025-04-13T09:10:00Z",
    image_url: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    caption: "Incredible moment in Kruger National Park - a family of deer spotted at sunset. Such majestic creatures in their natural habitat. #Safari #SouthAfrica #WildlifePhotography #NatureLover",
    location: {
      name: "Kruger National Park, South Africa",
      coordinates: {
        latitude: -23.9884,
        longitude: 31.5547
      }
    },
    likes: 5127,
    saves: 872,
    hashtags: ["#Safari", "#SouthAfrica", "#WildlifePhotography", "#NatureLover"],
    tagged_users: ["@kruger_safari", "@wildlife_shots"],
    filter_used: "Sierra",
    engagement_rate: 19.8,
    user: users[0]
  },
  {
    post_id: "IG-2025-0410-002",
    date_posted: "2025-04-10T14:25:00Z",
    image_url: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    caption: "Ideas illuminate our path in unexpected ways. This little discovery on my morning walk reminded me to always look for the light. #MorningWalk #Inspiration #LightBulb",
    location: {
      name: "Kyoto, Japan",
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681
      }
    },
    likes: 3842,
    saves: 521,
    hashtags: ["#MorningWalk", "#Inspiration", "#Japan", "#Kyoto"],
    tagged_users: ["@japan_tourism"],
    filter_used: "Juno",
    engagement_rate: 15.2,
    user: users[0]
  },
  {
    post_id: "IG-2025-0405-003",
    date_posted: "2025-04-05T18:40:00Z",
    image_url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    caption: "Home away from home. Found this perfect Airbnb with the most incredible mountain view. Sometimes you need to disconnect to reconnect. #TravelLife #MountainViews #GetawayWeekend",
    location: {
      name: "Swiss Alps",
      coordinates: {
        latitude: 46.8182,
        longitude: 8.2275
      }
    },
    likes: 4219,
    saves: 938,
    hashtags: ["#TravelLife", "#MountainViews", "#Switzerland", "#GetawayWeekend"],
    tagged_users: ["@swiss_tourism", "@mountain_lovers"],
    filter_used: "Lark",
    engagement_rate: 22.1,
    user: users[0]
  },

  // User 2 posts - Food theme
  {
    post_id: "IG-2025-0412-004",
    date_posted: "2025-04-12T12:15:00Z",
    image_url: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    caption: "My new cooking assistant! This adorable cat won't leave my side when I'm in the kitchen. I think someone smells the fresh tuna! #CatsOfInstagram #CookingWithPets #FoodieLife",
    likes: 7834,
    saves: 1256,
    hashtags: ["#CatsOfInstagram", "#CookingWithPets", "#FoodieLife", "#ChefAtHome"],
    tagged_users: ["@cat_lovers"],
    filter_used: "Clarendon",
    engagement_rate: 28.4,
    user: users[1]
  },
  {
    post_id: "IG-2025-0409-005",
    date_posted: "2025-04-09T19:30:00Z",
    image_url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    caption: "Working on my new recipe blog while enjoying my morning coffee. Coding and cooking go surprisingly well together! #DevLife #FoodBlogger #CoffeeAndCode",
    location: {
      name: "Home Office, Seattle",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321
      }
    },
    likes: 3187,
    saves: 578,
    hashtags: ["#DevLife", "#FoodBlogger", "#CoffeeAndCode", "#WorkFromHome"],
    tagged_users: ["@dev_community", "@food_creators"],
    filter_used: "Valencia",
    engagement_rate: 16.9,
    user: users[1]
  },

  // User 3 posts - Tech theme
  {
    post_id: "IG-2025-0414-006",
    date_posted: "2025-04-14T10:20:00Z",
    image_url: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    caption: "Looking at the inner beauty of technology. This circuit board architecture is both functional and strangely artistic. #TechLife #ElectronicsArt #Engineering",
    likes: 4521,
    saves: 892,
    hashtags: ["#TechLife", "#ElectronicsArt", "#Engineering", "#CircuitDesign"],
    tagged_users: ["@engineering_daily", "@tech_aesthetics"],
    filter_used: "Maven",
    engagement_rate: 21.3,
    user: users[2]
  },
  {
    post_id: "IG-2025-0408-007",
    date_posted: "2025-04-08T15:45:00Z",
    image_url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    caption: "Productive day working on new app features. Sometimes the simplest solutions come after hours of complex problem-solving. #CodingLife #AppDevelopment #WorkAnywhere",
    location: {
      name: "Coffee Shop, San Francisco",
      coordinates: {
        latitude: 37.7749,
        longitude: -122.4194
      }
    },
    likes: 5678,
    saves: 732,
    hashtags: ["#CodingLife", "#AppDevelopment", "#WorkAnywhere", "#TechStartup"],
    tagged_users: ["@dev_community", "@sf_tech"],
    filter_used: "Perpetua",
    engagement_rate: 18.7,
    user: users[2]
  },
  {
    post_id: "IG-2025-0402-008",
    date_posted: "2025-04-02T20:05:00Z",
    image_url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    caption: "Deep diving into some machine learning algorithms today. When your code finally works after debugging for hours. #MachineLearning #AIresearch #CodeLife",
    likes: 8921,
    saves: 1782,
    hashtags: ["#MachineLearning", "#AIresearch", "#CodeLife", "#DataScience"],
    tagged_users: ["@ai_community", "@code_masters"],
    filter_used: "Reyes",
    engagement_rate: 32.6,
    user: users[2]
  }
];

// Function to get posts by user ID
export const getPostsByUser = (userId: string) => {
  return posts.filter(post => post.user.id === userId);
};

// Function to get all posts
export const getAllPosts = () => {
  return posts;
};
