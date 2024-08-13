"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function () {
  return (
    <div className="w-full h-full text-center">
      <h1>AI generator </h1>
      <div className="flex border  border-red-500 ">
        <Textarea
          placeholder="Type your message here."
          className="w-[500px] h-[100px]"
        />
        <Button className="ml-5">Generate</Button>
      </div>
      <div className="w-[900px] h-[500px] border border-blue-400 mx-auto"></div>
    </div>
  );
}
