"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "/assets/gallary3.jpg",
      alt: "Mata Darbar Decoration",
    },
    {
      src: "/assets/gallary2.jpg",
      alt: "Event Decoration",
    },
    {
      src: "/assets/about3.png",
      alt: "Event Collage",
    },
    {
      src: "/assets/gallary1.jpg",
      alt: "Portrait",
    },
    {
      src: "/assets/gallary4.jpg",
      alt: "Darbar Event",
    },
    {
      src: "/assets/gallary5.jpg",
      alt: "Vintage Performance",
    },
    {
      src: "/assets/about1.jpg",
      alt: "Portrait",
    },
    {
      src: "/assets/gallary8.jpg",
      alt: "Darbar Event",
    },
    {
      src: "/assets/gallary9.jpg",
      alt: "Vintage Performance",
    },
    {
      src: "/assets/gallary10.jpg",
      alt: "Portrait",
    },
    {
      src: "/assets/gallary13.png",
      alt: "Darbar Event",
    },
    {
      src: "/assets/collage.png",
      alt: "Vintage Performance",
    },
    {
      src: "assets/gallary15.jpeg",
      alt: "Vintage Performance",
    },
    {
      src: "/assets/gallary16.jpeg",
      alt: "Portrait",
    },
    {
      src: "/assets/gallary7.JPG",
      alt: "Darbar Event",
    },
  ];

  const displayedImages = showAll ? galleryImages : galleryImages.slice(0, 6);

  return (
    <section id="gallery" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-amber-900">
          Gallery
        </h2>
        <div className="h-1 w-24 bg-amber-600 mx-auto mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedImages.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain z-20 relative group-hover:scale-105 transition-transform duration-300"
              />
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover blur-md absolute inset-0"
              />
            </div>
          ))}
        </div>

        {!showAll && galleryImages.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors"
            >
              Show More
            </button>
          </div>
        )}

        {showAll && galleryImages.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(false)}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors"
            >
              Show Less
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full aspect-video">
            <Image
              src={selectedImage}
              alt="Full view"
              fill
              className="object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white hover:bg-gray-200 p-2 rounded-full"
            >
              <X size={24} className="text-black" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
