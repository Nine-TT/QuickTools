"use client";

import { useState, useEffect, useRef } from "react";
import { getAllImage } from "@/apis/Pexels";
import Image from "next/image";

interface Image {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  liked: false;
  alt: string;
}

interface PexelsResponse {
  photos: Image[];
}

export default function ImageFree() {
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      if (!hasMore) return;

      setIsLoading(true);
      try {
        const data: PexelsResponse = await getAllImage(page);
        console.log("Fetched data for page:", page, data.photos);

        if (data.photos.length === 0) {
          setHasMore(false); // Không còn ảnh để tải thêm
        } else {
          setImages((prevImages) => [...prevImages, ...data.photos]);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [page]);

  useEffect(() => {
    if (isLoading || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("Loading more, current page:", page);
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 0.5 } // Chỉnh threshold để quan sát tốt hơn
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [isLoading, hasMore]);

  return (
    <div className="h-[100vh] overflow-y-auto md:w-full md:px-10 px-5 mx-auto">
      <h1 className="mt-10">Image</h1>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {images.map((image) => (
          <Image
            key={image.id}
            src={image.src.large2x}
            alt={image.alt || "Image"}
            className="rounded-lg shadow-lg"
            width={image.width / 4}
            height={image.height / 4}
            quality={100}
            layout="responsive"
          />
        ))}
      </div>

      <div ref={observerRef} className="h-10"></div>

      {isLoading && <p>Loading more images...</p>}
      {!hasMore && <p>No more images to load.</p>}
    </div>
  );
}
