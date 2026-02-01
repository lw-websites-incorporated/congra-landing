import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ocFormatSans = localFont({
  src: [
    { path: "./fonts/OCFormatSans-Rg.otf", weight: "400", style: "normal" },
    { path: "./fonts/OCFormatSans-RgObl.otf", weight: "400", style: "italic" },
    { path: "./fonts/OCFormatSans-Md.otf", weight: "500", style: "normal" },
    { path: "./fonts/OCFormatSans-MdObl.otf", weight: "500", style: "italic" },
    { path: "./fonts/OCFormatSans-Dm.otf", weight: "600", style: "normal" },
    { path: "./fonts/OCFormatSans-DmObl.otf", weight: "600", style: "italic" },
    { path: "./fonts/OCFormatSans-Bd.otf", weight: "700", style: "normal" },
    { path: "./fonts/OCFormatSans-BdObl.otf", weight: "700", style: "italic" },
    { path: "./fonts/OCFormatSans-XBd.otf", weight: "800", style: "normal" },
    { path: "./fonts/OCFormatSans-XBdObl.otf", weight: "800", style: "italic" },
    { path: "./fonts/OCFormatSans-Blk.otf", weight: "900", style: "normal" },
    { path: "./fonts/OCFormatSans-BlkObl.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-oc-format-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Congra - Celebrate Life's Moments",
  description: "The social app for celebrating and sharing life's special moments with friends and family.",
  icons: {
    icon: [
      { url: "/images/favicon.ico", sizes: "any" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/images/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ocFormatSans.variable}>
      <body className="bg-white text-gray-900 antialiased font-sans">{children}</body>
    </html>
  );
}
