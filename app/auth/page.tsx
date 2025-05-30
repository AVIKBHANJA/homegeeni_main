"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AuthForms from "@/components/auth/AuthForms";

export default function AuthPage() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  // This is only for mobile view
  useEffect(() => {
    setMounted(true);

    // Check if it's desktop - if so, redirect back to homepage
    // and let the modal handle the auth flow
    const isDesktop = window.innerWidth >= 768;
    if (isDesktop) {
      router.push("/?auth=true");
    }
  }, [router]);

  if (!mounted) {
    return null; // Avoid hydration errors
  }
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <AuthForms />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
