import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone built with Next.js and Tailwind CSS 🏡",
};

const nunito = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
