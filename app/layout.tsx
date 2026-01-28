import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Congra - Celebrate Life's Moments",
  description: "The social app for celebrating and sharing life's special moments with friends and family.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
