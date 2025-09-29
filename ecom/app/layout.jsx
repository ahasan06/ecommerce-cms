import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/layout/SiteHeader";


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
      </body>
    </html>
  );
}
