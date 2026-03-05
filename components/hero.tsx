"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "/assets/hero2.jpg",
      title: "Shailender Sharma & Party",
      subtitle: "With the Blessings of Mata Rani",
    },
    {
      image:
        "/assets/hero3.jpg",
      title: "Divine Spiritual Events",
      subtitle: "Celebrating Devotion & Culture",
    },
    {
      image:
        "/assets/hero4.jpg",
      title: "Professional Jagran Organization",
      subtitle: "Over 51,000 Successful Events",
    },
       {
      image:
        "/assets/hero1.jpg",
      title: "Professional Bhajan Singer",
      subtitle: "Jai mata di",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const whatsappLink = "https://wa.me/8076414767";

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute bg-black/40 inset-0" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-2xl">
        <h1 className="text-3xl md:text-6xl font-bold mb-4 text-yellow-300 drop-shadow-lg">
          {slides[currentSlide].title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-lg">
          {slides[currentSlide].subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-linear-to-r from-red-500 to-pink-400 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors"
          >
            Book Now
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-linear-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-colors"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-colors"
      >
        <ChevronRight size={28} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-yellow-400 w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
