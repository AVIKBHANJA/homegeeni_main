"use client";

import React from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "./AuthContext";
import AuthForms from "./AuthForms";

export default function AuthModal() {
  const { isAuthModalOpen, closeAuthModal } = useAuth();

  if (!isAuthModalOpen) return null;

  return (
    <AnimatePresence mode="wait">
      {isAuthModalOpen && (
        <>
          {" "}
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={closeAuthModal}
          />{" "}
          {/* Modal */}{" "}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 400 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {" "}
            <div className="w-full max-w-md mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="absolute right-4 top-4 z-10">
                  <button
                    onClick={closeAuthModal}
                    className="h-9 w-9 rounded-full bg-white shadow-md flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <AuthForms inModal={true} />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
