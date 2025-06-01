"use client";

import { motion } from "framer-motion";

interface AnimatedCircularLogoProps {
  className?: string;
  size?: number;
}

export default function AnimatedCircularLogo({
  className = "",
  size = 24,
}: AnimatedCircularLogoProps) {
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      {" "}
      <motion.div
        className="relative"
        style={{ width: size, height: size }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className="drop-shadow-sm"
          style={{ filter: "drop-shadow(0 0 6px rgba(139, 92, 246, 0.2))" }}
        >
          <defs>
            <linearGradient
              id={`gradient-ring-${size}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="1" />
              <stop offset="25%" stopColor="#A855F7" stopOpacity="1" />
              <stop offset="50%" stopColor="#EC4899" stopOpacity="1" />
              <stop offset="75%" stopColor="#F97316" stopOpacity="1" />
              <stop offset="100%" stopColor="#EAB308" stopOpacity="1" />
            </linearGradient>
          </defs>
          <circle
            cx="12"
            cy="12"
            r="7"
            stroke={`url(#gradient-ring-${size})`}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            className="filter drop-shadow-sm"
          />
        </svg>
      </motion.div>
    </div>
  );
}
