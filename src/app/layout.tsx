import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { SideBar } from "@/components/side-bar";
import { playlists } from "@/data/menuLists";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quick Tools",
  description: "Quick Tools for any",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex">
            <SideBar playlists={playlists} className="w-[20%]" />
            {children}
          </div>
          <div className="fixed bottom-4 right-4">
            <ModeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
