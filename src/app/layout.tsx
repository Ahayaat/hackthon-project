import Navbar from "@/components/view/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Wrapper from "@/components/shared/Wrapper";
import Footer from "@/components/view/Footer";
import TopLabel from "@/components/view/TopLabel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amala E-commerce",
  description: "Generated by Amala Hayat for practise of hackathon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="overflow-hidden w-screen">
          <TopLabel />
        </div>
        <Wrapper>
          <Navbar />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </Wrapper>
      </body>
    </html>
  );
}
