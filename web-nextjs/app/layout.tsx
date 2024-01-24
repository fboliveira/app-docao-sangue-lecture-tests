import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Menu from "./components/menu/Menu";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({weight: "400", subsets: ['latin']})

export const metadata: Metadata = {
  title: "SCDS",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Menu />
        {children}
        
        </body>
    </html>
  );
}