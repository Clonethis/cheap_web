'use client'
import { Inter } from "next/font/google";
import "./globals.css";

import CustomHeader from "./Components/customHeader";
import CustomFooter from "./Components/CustomFooter";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
    <CustomHeader/>
      {children}
      <CustomFooter/>
      </body>

    </html>
  );
}

