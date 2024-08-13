"use client";

import { generateImageFromText } from "@/apis/openai";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function () {
  const [text, setText] = useState("");

  const handleGenerateImage = async () => {
    let data = await generateImageFromText(text);
  };

  return (
    <div className="w-full h-full text-center">
      <h1>AI generator </h1>
      <div className="flex border  border-red-500 ">
        <Textarea
          placeholder="Type your message here."
          className="w-[500px] h-[100px]"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setText(e.target.value);
          }}
        />
        <Button className="ml-5" onClick={handleGenerateImage}>
          Generate
        </Button>
      </div>
      <div className="w-[900px] h-[500px] border border-blue-400 mx-auto"></div>
      <iframe id="your-iframe-id" src="about:empty"></iframe>
      <input type="file" id="your-file-input-id" />
    </div>
  );
}
