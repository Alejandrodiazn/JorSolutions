import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

const exo2 = Exo_2({ subsets: ["latin"], weights: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], styles: ["normal", "italic"] });

export const metadata: Metadata = {
  title: "JorSolutions",
  description: "Landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={exo2.className}>{children}</body>
    </html>
  );
}
