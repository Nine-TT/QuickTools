"use client";

import { removeBg } from "@/apis/remove-bg";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RemoveBG() {
  const [file, setFile] = useState<File | null>(null);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleRemoveBg = async () => {
    if (file) {
      setLoading(true);
      setError(null);
      try {
        const imageUrl = await removeBg(file);
        setResultUrl(imageUrl);
      } catch (error) {
        console.error("Error processing file:", error);
        setError("Failed to process the image. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      setError("Please upload an image file before processing.");
    }
  };

  return (
    <div className="w-full h-full text-center">
      <h1 className="font-bold mt-10">Remove Background</h1>
      <div className="grid w-full max-w-sm items-center gap-1.5 mt-3 mx-auto">
        <Input
          type="file"
          accept="image/*"
          required
          onChange={(e: any) => {
            setFile(e.target.files?.[0] || null);
            setError(null);
          }}
        />
      </div>
      <Button className="mt-5" onClick={handleRemoveBg} disabled={!file}>
        Remove Background
      </Button>
      {error && <p className="text-red-500 mt-3">{error}</p>}
      <div className="mt-5 border border-blue-400 md:w-[500px] w-[90%] h-[300px] mx-auto flex items-center justify-center bg-gray-100">
        {loading && (
          <div className="w-full h-full flex items-center justify-center">
            <div className="border border-gray-300 rounded-lg p-4 bg-white">
              <span className="text-gray-600">Processing...</span>
            </div>
          </div>
        )}
        {resultUrl && !loading && (
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={resultUrl}
              alt="Processed"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}
      </div>

      <a
        href={resultUrl || "#"}
        download="remove-bg-image.png"
        onClick={(e) => !resultUrl && e.preventDefault()}
      >
        <Button className="mt-5" disabled={!resultUrl}>
          Download Image
        </Button>
      </a>
    </div>
  );
}
