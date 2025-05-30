"use client";

import { AuthProvider } from "@/components/auth/AuthContext";
import AuthModal from "@/components/auth/AuthModal";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      {children}
      <AuthModal />
    </AuthProvider>
  );
}
