"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState, useRef } from "react";

export default function ResizeImage() {
  const [file, setFile] = useState<File | null>(null);
  const [width, setWidth] = useState<string | number>("");
  const [height, setHeight] = useState<string | number>("");
  const [downloadUrl, setDownloadUrl] = useState<string>("");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleResize = () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (result) {
          const img = new Image();
          img.onload = () => {
            const canvas = canvasRef.current;
            if (canvas) {
              const ctx = canvas.getContext("2d");
              if (ctx) {
                ctx.imageSmoothingEnabled = true;
                ctx.imageSmoothingQuality = "high";

                const canvasWidth = canvas.width;
                const canvasHeight = canvas.height;
                const imgAspect = img.width / img.height;
                const canvasAspect = canvasWidth / canvasHeight;

                let drawWidth, drawHeight;

                if (canvasAspect > imgAspect) {
                  drawHeight = canvasHeight;
                  drawWidth = drawHeight * imgAspect;
                } else {
                  drawWidth = canvasWidth;
                  drawHeight = drawWidth / imgAspect;
                }

                const offsetX = (canvasWidth - drawWidth) / 2;
                const offsetY = (canvasHeight - drawHeight) / 2;

                canvas.width = canvasWidth;
                canvas.height = canvasHeight;
                ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

                const resizedImageURL = canvas.toDataURL("image/png");
                setDownloadUrl(resizedImageURL);
              } else {
                console.error("Failed to get 2D context from canvas.");
              }
            }
          };
          img.src = result as string;
        } else {
          console.error("FileReader failed to load file.");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!downloadUrl) {
      e.preventDefault();
    }
  };

  return (
    <div className="h-[100vh] w-[80%] text-center">
      <h1 className="font-bold  w-fit mx-auto my-5 uppercase text-[28px]">
        Resize Image
      </h1>
      <div className="grid w-full max-w-sm items-center gap-1.5 mt-3 mx-auto">
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
      </div>

      <div className="flex mt-4 items-center mx-auto w-fit">
        <Input
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          placeholder="Width"
          className="w-[100px]"
        />
        <span className="mx-4">X</span>
        <Input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Height"
          className="w-[100px]"
        />
      </div>

      <Button className="mt-4 mx-auto" onClick={handleResize}>
        Resize
      </Button>

      <canvas
        ref={canvasRef}
        className="w-[500px] h-[300px] border border-blue-400 mx-auto my-5"
      ></canvas>

      <a
        href={downloadUrl}
        download="resized-image.png"
        onClick={handleDownloadClick}
        className={`inline-block px-4 py-2 mt-4 text-white bg-blue-600 rounded ${
          !downloadUrl ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        Download Resized Image
      </a>
    </div>
  );
}
