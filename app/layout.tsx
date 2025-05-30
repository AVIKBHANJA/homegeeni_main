import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HomeGeeni - AI-Powered Real Estate Platform",
  description:
    "HomeGeeni is an AI-powered real estate platform that simplifies home buying, selling, and investing by automating listings, offers, and insights—all in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white text-gray-900">{children}</div>
      </body>
    </html>
  );
}
