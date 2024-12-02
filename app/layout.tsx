import type { Metadata } from "next";
import "./globals.css";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "normal",
  display: "swap", // Improves loading behavior
  fallback: ["sans-serif"], // Fallback fonts
});

export const metadata: Metadata = {
  title: "Jay Mark Nicolas",
  description: "A web portfolio of Jay Mark Nicolas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-black antialiased`}>
        {children}
      </body>
    </html>
  );
}
