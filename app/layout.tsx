import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import RegisterModal from "@/components/RegisterModal";
import ToastProvider from "@/providers/ToastProvider";
import LoginModal from "@/components/LoginModal";
import getCurrentUser from "@/actions/getCurrentUser";
import RentModal from "@/components/RentModal";
import SearchModal from "@/components/SearchModal";

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone built with Next.js and Tailwind CSS 🏡",
};

const nunito = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ToastProvider />
        <RegisterModal />
        <LoginModal />
        <RentModal />
        <SearchModal />
        <Navbar currentUser={currentUser} />
        <div className="pb-20 pt-28 ">{children}</div>
      </body>
    </html>
  );
}
