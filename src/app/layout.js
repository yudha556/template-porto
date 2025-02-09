import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Portofolio",
  description: "Ini adalah portofolio saya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden overflow-y-auto hide-scrollbar`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
