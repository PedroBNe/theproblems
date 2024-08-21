import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/common/Header/page";
import { Aside } from "@/components/common/Aside/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Problems",
  description: "Site de jogos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        <Aside />
        <main className="ml-[192px]">
          {children}
        </main>
      </body>
    </html>
  );
}
