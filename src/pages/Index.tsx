import React from "react";
import Header from "../components/Header";
import Feed from "../components/Feed";
import LoginForm from "../components/LoginForm";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const Index: React.FC = () => {
  const { isAuthenticated, currentUser } = useAuth();

  // If user is an advertiser, redirect to advertiser dashboard
  if (isAuthenticated && currentUser?.is_advertiser) {
    return <Navigate to="/advertiser" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-4 pb-10">
        {isAuthenticated ? (
          <div className="max-w-6xl mx-auto">
            <Feed />
          </div>
        ) : (
          <LoginForm />
        )}
      </main>
    </div>
  );
};

export default Index;
