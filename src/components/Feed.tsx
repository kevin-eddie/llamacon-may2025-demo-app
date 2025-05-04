import React, { useState, useEffect } from "react";
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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { generateAdvertisementImage } from "../lib/imageGenerator";
import { Post as PostType } from "../types/post";

const POSTS_PER_PAGE = 5;

const Feed: React.FC = () => {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [adImageUrl, setAdImageUrl] = useState<string | null>(null);
  const [isLoadingAd, setIsLoadingAd] = useState(true);
  
  const allPosts = getAllPosts();
  const userPosts = currentUser ? getPostsByUser(currentUser.id) : [];
  
  const displayPosts = activeTab === "all" ? allPosts : userPosts;
  
  // Calculate pagination
  const totalPages = Math.ceil(displayPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = displayPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  
  useEffect(() => {
    const generateAd = async () => {
      try {
        const imageUrl = await generateAdvertisementImage();
        setAdImageUrl(imageUrl);
      } catch (error) {
        console.error('Failed to generate advertisement:', error);
      } finally {
        setIsLoadingAd(false);
      }
    };

    generateAd();
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Reset to page 1 when changing tabs
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setCurrentPage(1);
  };

  // Create a post object for the advertisement
  const adPost: PostType = {
    post_id: 'ad-' + currentPage,
    date_posted: new Date().toISOString(),
    image_url: adImageUrl || '',
    caption: 'Personalized advertisement based on your interests',
    likes: 0,
    saves: 0,
    hashtags: [],
    tagged_users: [],
    user: {
      id: 'system',
      username: 'Sponsored',
      display_name: 'Sponsored Content',
      avatar_url: '',
    },
    is_ad: true,
    comments: []
  };

  // Add the ad post to the end of the current page's posts
  const postsWithAd = [...paginatedPosts];
  if (adImageUrl && !isLoadingAd) {
    postsWithAd.push(adPost);
  }

  return (
    <div className="container mx-auto py-6 px-4">
      <Tabs defaultValue="all" value={activeTab} onValueChange={handleTabChange} className="w-full mb-6">
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
        {postsWithAd.length > 0 ? (
          <>
            {postsWithAd.map((post) => (
              <Post 
                key={post.post_id} 
                post={post} 
                isAd={post.is_ad}
              />
            ))}
            
            {totalPages > 1 && (
              <Pagination className="mt-6">
                <PaginationContent>
                  {currentPage > 1 && (
                    <PaginationItem>
                      <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
                    </PaginationItem>
                  )}
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter(page => {
                      // Show first page, last page, current page, and pages around current page
                      return page === 1 || 
                             page === totalPages || 
                             (page >= currentPage - 1 && page <= currentPage + 1);
                    })
                    .map((page, index, array) => {
                      // If there's a gap in the sequence, show ellipsis
                      if (index > 0 && page > array[index - 1] + 1) {
                        return (
                          <React.Fragment key={`ellipsis-${page}`}>
                            <PaginationItem>
                              <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem key={page}>
                              <PaginationLink 
                                isActive={page === currentPage}
                                onClick={() => handlePageChange(page)}
                              >
                                {page}
                              </PaginationLink>
                            </PaginationItem>
                          </React.Fragment>
                        );
                      }
                      
                      return (
                        <PaginationItem key={page}>
                          <PaginationLink 
                            isActive={page === currentPage}
                            onClick={() => handlePageChange(page)}
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    })}
                  
                  {currentPage < totalPages && (
                    <PaginationItem>
                      <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            )}
          </>
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
