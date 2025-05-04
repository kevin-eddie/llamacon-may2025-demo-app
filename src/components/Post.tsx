import React, { useState } from "react";
import { Post as PostType } from "../types/post";
import { formatDistanceToNow } from "date-fns";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, Bookmark, MessageCircle, Share } from "lucide-react";
import { cn } from "@/lib/utils";

interface PostProps {
  post: PostType;
  isAd?: boolean;
}

const Post: React.FC<PostProps> = ({ post, isAd }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [savesCount, setSavesCount] = useState(post.saves);
  
  const handleLike = () => {
    if (liked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setLiked(!liked);
  };
  
  const handleSave = () => {
    if (saved) {
      setSavesCount(savesCount - 1);
    } else {
      setSavesCount(savesCount + 1);
    }
    setSaved(!saved);
  };

  const formatPostedTime = (dateString: string) => {
    return formatDistanceToNow(new Date(dateString), { addSuffix: true });
  };

  if (isAd) {
    return (
      <Card className="w-full max-w-xl mb-6 shadow-md border-2 border-blue-100">
        <CardHeader className="p-4 flex flex-row items-center space-y-0 gap-3 border-b">
          <Avatar>
            <AvatarFallback className="bg-blue-100 text-blue-600">SP</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <div className="font-semibold text-sm text-blue-600">Sponsored</div>
            <div className="text-xs text-muted-foreground">Advertisement</div>
          </div>
        </CardHeader>
        <div className="relative">
          <img 
            src={post.image_url} 
            alt="Advertisement" 
            className="w-full object-cover max-h-[600px]" 
          />
        </div>
        <CardContent className="p-4">
          <div className="text-sm text-muted-foreground">
            Personalized advertisement based on your interests
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-xl mb-6 shadow-md">
      <CardHeader className="p-4 flex flex-row items-center space-y-0 gap-3 border-b">
        <Avatar>
          <AvatarImage src={post.user.avatar_url} />
          <AvatarFallback>{post.user.username.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <div className="font-semibold text-sm">{post.user.username}</div>
          {post.location && (
            <div className="text-xs text-muted-foreground">{post.location.name}</div>
          )}
        </div>
      </CardHeader>
      <div className="relative">
        <img 
          src={post.image_url} 
          alt="Post image" 
          className="w-full object-cover max-h-[600px]" 
          onDoubleClick={handleLike}
        />
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-3">
          <div className="flex gap-3">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleLike}
              className="relative"
            >
              <Heart 
                className={cn(
                  "h-6 w-6", 
                  liked ? "fill-social-red text-social-red" : ""
                )} 
                fill={liked ? "currentColor" : "none"}
              />
              {liked && (
                <span className="absolute top-0 right-0 h-2 w-2 bg-social-red rounded-full animate-ping" />
              )}
            </Button>
            <Button variant="ghost" size="icon">
              <MessageCircle className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon">
              <Share className="h-6 w-6" />
            </Button>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleSave}
          >
            <Bookmark 
              className={cn("h-6 w-6", saved ? "fill-black" : "")} 
              fill={saved ? "currentColor" : "none"} 
            />
          </Button>
        </div>
        <div className="mb-2 font-semibold">{likesCount.toLocaleString()} likes</div>
        <div className="mb-2">
          <span className="font-semibold mr-2">{post.user.username}</span>
          {post.caption}
        </div>
        {post.hashtags.length > 0 && (
          <div className="text-social-blue text-sm mb-2">
            {post.hashtags.join(" ")}
          </div>
        )}
        <div className="text-muted-foreground text-xs">
          {formatPostedTime(post.date_posted)}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="w-full">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{savesCount} saves</span>
            {post.engagement_rate && <span>{post.engagement_rate}% engagement</span>}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Post;
