import type { Metadata } from "next";
import {Ovo} from "next/font/google";
import "./globals.css";


const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata: Metadata = {
  title: "Le Kim Oanh's Portfolio website",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${ovo.className} 
        antialiased leading-8 overflow-x-hidden dark:bg-darkTheme
        dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
