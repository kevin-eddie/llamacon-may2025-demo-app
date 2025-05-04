import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { users } from "../data/mockData";

const LoginForm: React.FC = () => {
  const { login } = useAuth();
  const { toast } = useToast();
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      const success = login(username);
      if (!success) {
        toast({
          title: "Error",
          description: "User not found. Please try one of the available accounts.",
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Error",
        description: "Please enter a username",
        variant: "destructive",
      });
    }
  };

  const handleQuickLogin = (username: string) => {
    setUsername(username);
    login(username);
  };

  const regularUsers = users.filter(user => !user.is_advertiser);
  const advertiserUsers = users.filter(user => user.is_advertiser);

  return (
    <div className="max-w-md mx-auto px-4">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to Trsh</CardTitle>
          <CardDescription>Enter your username to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>

          <div className="mt-8 space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-sm">Regular User Accounts:</h3>
              <div className="space-y-2">
                {regularUsers.map((user) => (
                  <Button
                    key={user.id}
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => handleQuickLogin(user.username)}
                  >
                    {user.display_name} (@{user.username})
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-sm">Advertiser Accounts:</h3>
              <div className="space-y-2">
                {advertiserUsers.map((user) => (
                  <Button
                    key={user.id}
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => handleQuickLogin(user.username)}
                  >
                    {user.display_name} (@{user.username})
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
