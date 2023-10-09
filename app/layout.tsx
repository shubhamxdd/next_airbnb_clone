import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import RegisterModal from "@/components/RegisterModal";
import ToastProvider from "@/providers/ToastProvider";
import LoginModal from "@/components/LoginModal";

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
      <body className={nunito.className}>
        <ToastProvider />
        <RegisterModal />
        <LoginModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
