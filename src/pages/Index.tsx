
import React from "react";
import Header from "../components/Header";
import Feed from "../components/Feed";
import LoginForm from "../components/LoginForm";
import { useAuth } from "../contexts/AuthContext";

const Index: React.FC = () => {
  const { isAuthenticated } = useAuth();

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
