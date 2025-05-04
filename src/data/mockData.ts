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
    posts_count: 247,
    interests: ["travel", "photography", "hiking", "wildlife", "nature", "adventure"],
    age_group: "25-34",
    preferences: ["outdoor activities", "sustainable travel", "luxury experiences"],
    demographics: ["urban professional", "frequent traveler", "high income"]
  },
  {
    id: "user2",
    username: "foodie_adventures",
    display_name: "Sam Foodie",
    avatar_url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    bio: "Food critic | Recipe developer | Restaurant explorer",
    followers_count: 8750,
    following_count: 312,
    posts_count: 189,
    interests: ["cooking", "restaurants", "food photography", "culinary arts", "gourmet"],
    age_group: "35-44",
    preferences: ["fine dining", "exotic cuisine", "cooking gadgets", "organic ingredients"],
    demographics: ["urban dweller", "food enthusiast", "middle income"]
  },
  {
    id: "user3",
    username: "tech_reviewer",
    display_name: "Jordan Tech",
    avatar_url: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    bio: "Tech enthusiast | Gadget reviewer | Software developer",
    followers_count: 22100,
    following_count: 245,
    posts_count: 315,
    interests: ["technology", "programming", "gadgets", "AI", "sustainability", "innovation"],
    age_group: "18-24",
    preferences: ["cutting-edge tech", "minimalist design", "eco-friendly products"],
    demographics: ["tech professional", "early adopter", "high income"]
  },
  {
    id: "user4",
    username: "fitness_freak",
    display_name: "Taylor Fit",
    avatar_url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    bio: "Fitness coach | Nutrition expert | Marathon runner",
    followers_count: 32500,
    following_count: 478,
    posts_count: 210,
    interests: ["fitness", "nutrition", "running", "wellness", "health", "outdoor activities"],
    age_group: "25-34",
    preferences: ["fitness gear", "organic food", "wellness retreats", "athletic wear"],
    demographics: ["health conscious", "active lifestyle", "middle income"]
  },
  {
    id: "user5",
    username: "artistry",
    display_name: "Casey Creative",
    avatar_url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    bio: "Visual artist | Designer | Painter | Illustrator",
    followers_count: 18700,
    following_count: 342,
    posts_count: 156,
    interests: ["art", "design", "painting", "illustration", "creativity", "modern art"],
    age_group: "35-44",
    preferences: ["art supplies", "exhibit visits", "creative workshops", "unique designs"],
    demographics: ["creative professional", "artistic community", "middle income"]
  },
  {
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
  {
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
  {
    post_id: "IG-2025-0401-010",
    date_posted: "2025-04-01T10:15:00Z",
    image_url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    caption: "Breathtaking views from my morning hike. Nature has a way of putting everything into perspective. #MountainLife #Hiking #NatureLover",
    location: {
      name: "Rocky Mountains, Colorado",
      coordinates: {
        latitude: 39.5501,
        longitude: -105.7821
      }
    },
    likes: 6752,
    saves: 1023,
    hashtags: ["#MountainLife", "#Hiking", "#NatureLover", "#ColoradoViews"],
    tagged_users: ["@outdoor_adventures", "@hiking_trails"],
    filter_used: "Rise",
    engagement_rate: 24.5,
    user: users[0]
  },
  {
    post_id: "IG-2025-0328-011",
    date_posted: "2025-03-28T16:45:00Z",
    image_url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
    caption: "Island vibes 🏝️ Found this hidden beach after a 2-hour trek through the jungle. Totally worth it! #IslandLife #BeachDay #TravelGoals",
    location: {
      name: "Phi Phi Islands, Thailand",
      coordinates: {
        latitude: 7.7407,
        longitude: 98.7784
      }
    },
    likes: 8921,
    saves: 1756,
    hashtags: ["#IslandLife", "#BeachDay", "#TravelGoals", "#Thailand"],
    tagged_users: ["@thailand_tourism", "@island_explorer"],
    filter_used: "Gingham",
    engagement_rate: 28.3,
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
  {
    post_id: "IG-2025-0406-012",
    date_posted: "2025-04-06T14:20:00Z",
    image_url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    caption: "Sunday brunch perfection! Homemade avocado toast with poached eggs and microgreens. Simple ingredients, extraordinary flavor. #BrunchGoals #AvocadoToast #FoodiesOfInsta",
    location: {
      name: "Home Kitchen, Seattle",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321
      }
    },
    likes: 5423,
    saves: 1827,
    hashtags: ["#BrunchGoals", "#AvocadoToast", "#FoodiesOfInsta", "#HomeCooking"],
    tagged_users: ["@brunch_club", "@avocado_daily"],
    filter_used: "Ludwig",
    engagement_rate: 25.7,
    user: users[1]
  },
  {
    post_id: "IG-2025-0402-013",
    date_posted: "2025-04-02T20:15:00Z",
    image_url: "https://images.unsplash.com/photo-1543353071-10c8ba85a904",
    caption: "Discovered this amazing little pasta shop in the heart of Florence. The owner has been making pasta by hand for over 50 years! #ItalianFood #Pasta #FoodTour #TravelingFoodie",
    location: {
      name: "Florence, Italy",
      coordinates: {
        latitude: 43.7696,
        longitude: 11.2558
      }
    },
    likes: 9267,
    saves: 2143,
    hashtags: ["#ItalianFood", "#Pasta", "#FoodTour", "#TravelingFoodie"],
    tagged_users: ["@italia_food", "@pasta_lovers"],
    filter_used: "Aden",
    engagement_rate: 31.2,
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
  },
  {
    post_id: "IG-2025-0330-014",
    date_posted: "2025-03-30T11:25:00Z",
    image_url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
    caption: "Testing out the latest VR headset. The immersion level is incredible - gaming will never be the same! #VirtualReality #GamingTech #TechReview",
    likes: 6573,
    saves: 1245,
    hashtags: ["#VirtualReality", "#GamingTech", "#TechReview", "#VRgaming"],
    tagged_users: ["@vr_enthusiasts", "@gaming_future"],
    filter_used: "Moon",
    engagement_rate: 24.8,
    user: users[2]
  },
  {
    post_id: "IG-2025-0325-015",
    date_posted: "2025-03-25T17:40:00Z",
    image_url: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    caption: "Just unboxed this sleek new laptop. The design is minimalist perfection and the performance is off the charts. Full review coming soon! #TechUnboxing #LaptopReview #WorkStation",
    likes: 7362,
    saves: 1532,
    hashtags: ["#TechUnboxing", "#LaptopReview", "#WorkStation", "#ProductReview"],
    tagged_users: ["@tech_reviews", "@laptop_lovers"],
    filter_used: "Slumber",
    engagement_rate: 26.3,
    user: users[2]
  },
  
  // User 4 posts - Fitness theme
  {
    post_id: "IG-2025-0414-016",
    date_posted: "2025-04-14T06:30:00Z",
    image_url: "https://images.unsplash.com/photo-1540539234-c14a20fb7c7b",
    caption: "5AM workout complete! Starting the day with endorphins is the best way to set yourself up for success. #MorningWorkout #FitnessMotivation #RiseAndGrind",
    location: {
      name: "Elevation Fitness, Denver",
      coordinates: {
        latitude: 39.7392,
        longitude: -104.9903
      }
    },
    likes: 4281,
    saves: 956,
    hashtags: ["#MorningWorkout", "#FitnessMotivation", "#RiseAndGrind", "#GymLife"],
    tagged_users: ["@morning_fitness", "@workout_motivation"],
    filter_used: "Crema",
    engagement_rate: 18.9,
    user: users[3]
  },
  {
    post_id: "IG-2025-0411-017",
    date_posted: "2025-04-11T12:45:00Z",
    image_url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    caption: "Meal prep Sunday! Preparing healthy meals for the week is key to staying on track with your fitness goals. #MealPrep #HealthyEating #FitnessLifestyle",
    likes: 5743,
    saves: 2134,
    hashtags: ["#MealPrep", "#HealthyEating", "#FitnessLifestyle", "#NutritionTips"],
    tagged_users: ["@meal_prep_ideas", "@nutrition_coach"],
    filter_used: "Ginza",
    engagement_rate: 27.4,
    user: users[3]
  },
  {
    post_id: "IG-2025-0407-018",
    date_posted: "2025-04-07T16:20:00Z",
    image_url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    caption: "Training for my third marathon this year. Pushing through the pain because the feeling of crossing that finish line is worth every blister and sore muscle! #MarathonTraining #RunnerLife #Endurance",
    location: {
      name: "City Park Trail, Denver",
      coordinates: {
        latitude: 39.7497,
        longitude: -104.9471
      }
    },
    likes: 3812,
    saves: 732,
    hashtags: ["#MarathonTraining", "#RunnerLife", "#Endurance", "#FitnessGoals"],
    tagged_users: ["@marathon_runners", "@running_community"],
    filter_used: "Ashby",
    engagement_rate: 16.2,
    user: users[3]
  },
  
  // User 5 posts - Art theme
  {
    post_id: "IG-2025-0413-019",
    date_posted: "2025-04-13T14:10:00Z",
    image_url: "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
    caption: "Just finished this commissioned watercolor piece after 30+ hours of work. So pleased with how the light and shadows came together. #WatercolorArt #ArtistLife #CommissionedArt",
    likes: 7621,
    saves: 1843,
    hashtags: ["#WatercolorArt", "#ArtistLife", "#CommissionedArt", "#CreativeProcess"],
    tagged_users: ["@art_collectors", "@watercolor_gallery"],
    filter_used: "Mayfair",
    engagement_rate: 28.9,
    user: users[4]
  },
  {
    post_id: "IG-2025-0409-020",
    date_posted: "2025-04-09T11:30:00Z",
    image_url: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1",
    caption: "My workspace for the day. There's something magical about painting outdoors - the changing light, the sounds, the fresh air... it all becomes part of the artwork. #PleinAirPainting #ArtisticProcess #StudioOutdoors",
    location: {
      name: "Golden Gate Park, San Francisco",
      coordinates: {
        latitude: 37.7694,
        longitude: -122.4862
      }
    },
    likes: 5932,
    saves: 1267,
    hashtags: ["#PleinAirPainting", "#ArtisticProcess", "#StudioOutdoors", "#LandscapeArt"],
    tagged_users: ["@outdoor_artists", "@painting_locations"],
    filter_used: "Inkwell",
    engagement_rate: 23.1,
    user: users[4]
  },
  {
    post_id: "IG-2025-0405-021",
    date_posted: "2025-04-05T09:45:00Z",
    image_url: "https://images.unsplash.com/photo-1452802447250-470a88ac82bc",
    caption: "Experimenting with mixed media today. Combining watercolor, ink, and digital elements to create something entirely new. Art is about pushing boundaries! #MixedMedia #ArtExperiments #CreativeProcess",
    likes: 4765,
    saves: 1053,
    hashtags: ["#MixedMedia", "#ArtExperiments", "#CreativeProcess", "#ContemporaryArt"],
    tagged_users: ["@mixed_media_artists", "@art_techniques"],
    filter_used: "Perpetua",
    engagement_rate: 20.7,
    user: users[4]
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
