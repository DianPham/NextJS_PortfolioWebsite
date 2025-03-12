import type { Metadata } from "next";
import {Lora, Poppins} from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"], weight: ["400", "500", "600"]
});

const lora = Lora({
  subsets: ["latin"], weight: ["400", "500", "600"]
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
        className={`${lora.className} ${poppins.className} 
        antialiased leading-8 overflow-x-hidden dark:bg-darkTheme
        dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
