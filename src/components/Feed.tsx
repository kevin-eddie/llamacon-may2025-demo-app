
import React, { useState } from "react";
import Post from "./Post";
import { useAuth } from "../contexts/AuthContext";
import { getAllPosts, getPostsByUser } from "../data/mockData";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const Feed: React.FC = () => {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState("all");
  
  const allPosts = getAllPosts();
  const userPosts = currentUser ? getPostsByUser(currentUser.id) : [];
  
  const displayPosts = activeTab === "all" ? allPosts : userPosts;

  return (
    <div className="container mx-auto py-6 px-4">
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full mb-6">
        <div className="flex justify-center">
          <TabsList>
            <TabsTrigger value="all">All Posts</TabsTrigger>
            <TabsTrigger value="user">My Posts</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="all" className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Latest Posts</h2>
        </TabsContent>
        <TabsContent value="user" className="mt-6">
          <h2 className="text-2xl font-bold mb-4">
            {currentUser?.username}'s Posts
          </h2>
        </TabsContent>
      </Tabs>
      
      <div className="flex flex-col items-center">
        {displayPosts.length > 0 ? (
          displayPosts.map((post) => <Post key={post.post_id} post={post} />)
        ) : (
          <div className="text-center py-10">
            <h3 className="text-xl font-semibold mb-2">No posts found</h3>
            <p className="text-muted-foreground mb-4">
              {activeTab === "user" 
                ? "You haven't created any posts yet." 
                : "There are no posts to display."}
            </p>
            <Button variant="outline">Create a Post</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
