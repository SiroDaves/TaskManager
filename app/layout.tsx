import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google"; //added

import "./globals.css";

// ✅ Importing TaskProvider
import { TaskProvider } from "@/app/context/TaskContext";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] }); //added

/*

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
*/

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        //className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${inter.className} antialiased`}
      >
        <main>
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
