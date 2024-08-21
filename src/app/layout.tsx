import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "../components/common/Header/page";
import { Aside } from "@/components/common/Aside/page";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

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
      <body className={`${inter.className} ${nunito.className}`}>
        <Header />
        <Aside />
        <main className="flex flex-col ml-[208px] mt-[var(--header-height)]">
          {children}
        </main>
      </body>
    </html>
  );
}
