"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

type User = {
  id: string;
  name: string;
  email: string;
  // Add other user properties as needed
};

type AuthContextType = {
  isAuthModalOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // Check for stored auth on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("homegeeni_user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Failed to parse stored user:", error);
        localStorage.removeItem("homegeeni_user");
      }
    }
  }, []);

  // Handle auth query parameter
  useEffect(() => {
    if (searchParams?.get("auth") === "true") {
      setIsAuthModalOpen(true);
    }
  }, [searchParams]);

  // Close modal when navigating to a different page
  useEffect(() => {
    setIsAuthModalOpen(false);
  }, [pathname]);

  const openAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const login = async (email: string, password: string) => {
    // This would be replaced with an actual API call in a real application
    try {
      // Simulating API call delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Mock user for demo purposes
      const mockUser = {
        id: "user-123",
        name: email.split("@")[0], // Using part of email as name
        email,
      };

      setUser(mockUser);
      setIsAuthenticated(true);
      localStorage.setItem("homegeeni_user", JSON.stringify(mockUser));
      closeAuthModal();
    } catch (error) {
      console.error("Login failed:", error);
      throw new Error(
        "Login failed. Please check your credentials and try again."
      );
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    // This would be replaced with an actual API call in a real application
    try {
      // Simulating API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock user for demo purposes
      const mockUser = {
        id: "user-" + Date.now().toString(),
        name,
        email,
      };

      setUser(mockUser);
      setIsAuthenticated(true);
      localStorage.setItem("homegeeni_user", JSON.stringify(mockUser));
      closeAuthModal();
    } catch (error) {
      console.error("Signup failed:", error);
      throw new Error("Signup failed. Please try again later.");
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("homegeeni_user");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthModalOpen,
        openAuthModal,
        closeAuthModal,
        user,
        isAuthenticated,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
