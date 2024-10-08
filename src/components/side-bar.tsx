import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  TransformIcon,
  TransparencyGridIcon,
  CubeIcon,
} from "@radix-ui/react-icons";

import { Playlist } from "@/data/menuLists";
import Link from "next/link";

export function SideBar({ className }: any) {
  return (
    <ScrollArea className="h-full w-full">
      <div className={cn("pb-12 ", className)}>
        <div className="space-y-4 py-4 border-r-2 h-[100vh] md:border-gray-400 ">
          <div>
            <Link href={"/"}>
              <h2 className="mb-2 px-4 leading-10 text-lg font-semibold bg-[#46A758] rounded-lg tracking-widest w-[91%] mx-auto">
                Quick Tools
              </h2>
            </Link>
          </div>
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Image
            </h2>
            <div className="space-y-1">
              <Link href="/image-tools/resize">
                <Button variant="ghost" className="w-full justify-start">
                  <TransformIcon className="mr-2 h-4 w-4" />
                  Resize image
                </Button>
              </Link>
              <Link href={"/image-tools/remove-bg"}>
                <Button variant="ghost" className="w-full justify-start">
                  <TransparencyGridIcon className="mr-2 h-4 w-4" />
                  Remove background
                </Button>
              </Link>
              <Link href={"/image-tools/ai-generator"}>
                <Button variant="ghost" className="w-full justify-start">
                  <CubeIcon className="mr-2 h-4 w-4" />
                  AI image generator
                </Button>
              </Link>
              <Link href={"/image-tools/image"}>
                <Button variant="ghost" className="w-full justify-start">
                  <CubeIcon className="mr-2 h-4 w-4" />
                  Image free
                </Button>
              </Link>
            </div>
          </div>
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Text
            </h2>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="M21 15V6" />
                  <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  <path d="M12 12H3" />
                  <path d="M16 6H3" />
                  <path d="M12 18H3" />
                </svg>
                Text to speech
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <circle cx="8" cy="18" r="4" />
                  <path d="M12 18V2l7 4" />
                </svg>
                Speech to text
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Made for You
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                  <circle cx="17" cy="7" r="5" />
                </svg>
                Artists
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="m16 6 4 14" />
                  <path d="M12 6v14" />
                  <path d="M8 8v12" />
                  <path d="M4 4v16" />
                </svg>
                Albums
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
