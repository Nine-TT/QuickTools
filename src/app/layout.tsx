import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { SideBar } from "@/components/side-bar";
import { playlists } from "@/data/menuLists";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

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
          <div className="flex h-[100vh] ">
            <div className="w-[20%] md:block hidden">
              <SideBar />
            </div>
            <div className="md:w-[80%] w-[100%]">{children}</div>
          </div>
          <div className="fixed bottom-4 right-4">
            <ModeToggle />
          </div>
          <div className="grid grid-cols-2 gap-2 fixed top-4 left-4 md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <HamburgerMenuIcon />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SideBar />
              </SheetContent>
            </Sheet>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
