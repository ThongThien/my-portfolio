import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar"; 
export const metadata: Metadata = {
  title: "Thong Thien | Portfolio",
  description: "Personal portfolio website built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
