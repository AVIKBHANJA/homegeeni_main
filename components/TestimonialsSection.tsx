"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Michael Chen",
    role: "First-Time Homebuyer",
    image: "https://avatars.githubusercontent.com/u/1234567?v=4",
    content:
      "HomeGeeni's AI property search helped me find the perfect home in half the time. The automated offer system was incredibly easy to use and saved me so much paperwork.",
  },
  {
    name: "Sarah Johnson",
    role: "Real Estate Agent",
    image: "https://avatars.githubusercontent.com/u/2345678?v=4",
    content:
      "HomeGeeni's platform has transformed how I manage client relationships. The automated valuation tool gives my clients confidence, and document management saves hours of work.",
  },
  {
    name: "David Wilson",
    role: "Property Investor",
    image: "https://avatars.githubusercontent.com/u/3456789?v=4",
    content:
      "As someone who manages multiple properties, HomeGeeni's platform is invaluable. The AI valuations are remarkably accurate, and the document automation has streamlined my entire process.",
  },
  {
    name: "Emily Zhang",
    role: "Home Seller",
    image: "https://avatars.githubusercontent.com/u/4567890?v=4",
    content:
      "Selling my home with HomeGeeni was surprisingly stress-free. The platform handled everything from valuation to document management, and I received multiple offers within days.",
  },
  {
    name: "James Rodriguez",
    role: "Crypto Security Expert",
    image: "https://avatars.githubusercontent.com/u/5678901?v=4",
    content:
      "The security features are robust and the regular updates keep us ahead of emerging threats. It's exactly what the crypto industry needed.",
  },
  {
    name: "Lisa Thompson",
    role: "Portfolio Manager",
    image: "https://avatars.githubusercontent.com/u/6789012?v=4",
    content:
      "The platform's ability to handle complex trading strategies while maintaining simplicity in its interface is remarkable. It's been invaluable for our portfolio management.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 overflow-hidden bg-white">
      <div className="container px-4">
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#FFB800"
                className="mx-0.5"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-500 text-sm mb-6">
            Rated by satisfied customers
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-2 text-center">
            Reviews from our Homebuyers
          </h2>
        </div>{" "}
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0, x: "0%" }}
            animate={{
              opacity: 1,
              x: "-50%",
            }}
            transition={{
              opacity: { duration: 0.5 },
              x: {
                duration: 60,
                repeat: Infinity,
                ease: "linear",
                delay: 0.2,
              },
            }}
            style={{
              width: "fit-content",
              display: "flex",
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => {
              // Get gradient colors based on index
              const gradients = [
                "from-yellow-50 to-yellow-100",
                "from-blue-50 to-blue-100",
                "from-purple-50 to-purple-100",
                "from-green-50 to-green-100",
                "from-orange-50 to-orange-100",
                "from-red-50 to-red-100",
              ];
              const gradient = gradients[index % gradients.length];

              return (
                <motion.div
                  key={`testimonial-${index}`}
                  className="w-[280px] flex-shrink-0"
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                >
                  <Card
                    className={`bg-gradient-to-br ${gradient} border border-gray-100 shadow-sm p-6 h-full`}
                  >
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        {" "}
                        <div
                          className={`w-10 h-10 rounded-md flex items-center justify-center font-bold text-lg ${
                            index % 6 === 0
                              ? "bg-yellow-200 text-yellow-800"
                              : index % 6 === 1
                              ? "bg-blue-200 text-blue-800"
                              : index % 6 === 2
                              ? "bg-purple-200 text-purple-800"
                              : index % 6 === 3
                              ? "bg-green-200 text-green-800"
                              : index % 6 === 4
                              ? "bg-orange-200 text-orange-800"
                              : "bg-red-200 text-red-800"
                          }`}
                        >
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                      </div>
                      <h4 className="font-medium text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed line-clamp-4">
                      {testimonial.content}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
