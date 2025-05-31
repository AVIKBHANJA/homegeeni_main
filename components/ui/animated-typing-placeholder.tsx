"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedTypingPlaceholderProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  cursorColor?: string;
  isActive?: boolean; // Stop animation when input is active
}

export default function AnimatedTypingPlaceholder({
  texts,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 1500,
  className = "text-gray-500",
  cursorColor = "text-gray-500",
  isActive = false,
}: AnimatedTypingPlaceholderProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Stop animation when input is active
    if (isActive) return;

    const targetText = texts[currentTextIndex];

    if (isTyping) {
      if (currentText.length < targetText.length) {
        const timeout = setTimeout(() => {
          setCurrentText(targetText.slice(0, currentText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }
  }, [
    currentText,
    isTyping,
    currentTextIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    isActive,
  ]);

  useEffect(() => {
    // Stop cursor blinking when input is active
    if (isActive) {
      setShowCursor(false);
      return;
    }

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, [isActive]);

  return (
    <div className={`inline-flex items-center ${className}`}>
      <motion.span
        key={currentText}
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        className="min-h-[1em]"
      >
        {currentText}
      </motion.span>{" "}
      <motion.span
        animate={{ opacity: showCursor ? 1 : 0 }}
        transition={{ duration: 0.1 }}
        className={`ml-1 ${cursorColor} font-semibold`}
      >
        |
      </motion.span>
    </div>
  );
}
