import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "../components/common/Header/page";
import SessionProvider from "@/utils/SessionProvider";
import { Aside } from "@/components/common/Aside/page";
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Problems",
  description: "Site de jogos",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="pt-br">
      <body className={`${inter.className} ${nunito.className}`}>
        <SessionProvider session={session}>
          <Header />
          <Aside />
          {/* ml-[208px] */}
          <main className="flex flex-col ml-[208px] mt-[var(--header-height)]">
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
