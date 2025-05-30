import {
  Brain,
  BarChart3,
  FileText,
  Home,
  Calculator,
  Zap,
} from "lucide-react";

export const features = [
  {
    title: "AI-Powered Insights",
    description:
      "Get intelligent market analysis and property recommendations tailored to your needs.",
    icon: <Brain className="w-6 h-6" />,
    image: "/globe.svg",
  },
  {
    title: "Market Intelligence",
    description:
      "Real-time market trends and investment opportunities powered by advanced algorithms.",
    icon: <BarChart3 className="w-6 h-6" />,
    image: "/window.svg",
  },
  {
    title: "Smart Valuations",
    description:
      "Accurate property valuations using AI analysis of comparable sales and market data.",
    icon: <Calculator className="w-6 h-6" />,
    image: "/file.svg",
  },
  {
    title: "Document Management",
    description:
      "Streamlined document handling and contract management with AI assistance.",
    icon: <FileText className="w-6 h-6" />,
    image: "/globe.svg",
  },
  {
    title: "Property Matching",
    description:
      "Find your perfect property with AI-driven matching based on your preferences.",
    icon: <Home className="w-6 h-6" />,
    image: "/window.svg",
  },
  {
    title: "Instant Offers",
    description:
      "Generate and submit competitive offers instantly with AI-powered pricing strategies.",
    icon: <Zap className="w-6 h-6" />,
    image: "/file.svg",
  },
];
