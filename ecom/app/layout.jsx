import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/layout/SiteHeader";
import Footer from "./components/layout/Footer";


export const metadata = {
  title: "Clicks",
  description: "Premium phone cases with real buttons",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` text-white`}
      >
        {/* Fixed Header */}
        <SiteHeader />

        {/* Push content below fixed header */}
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
