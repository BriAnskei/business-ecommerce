import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Pure Molasses",

      description:
        "Taste the natural sweetness of premium molasses sourced from local farms.",
      image: "./images/carousel/first_window_image.png",
      cta: "Shop Now",
      bg: "from-amber-900/40 to-yellow-800/40",
    },
    {
      id: 2,
      title: "Premium Molasses Drums",
      description: "High-grade molasses packed fresh in durable drums.",
      image: "./images/carousel/second_window_image.png",
      cta: "Order Now",
      bg: "from-amber-900/40 to-yellow-800/40",
    },
    {
      id: 3,
      title: "Export-Ready Containers",
      description: "Bulk molasses containers for industrial use.",
      image: "./images/carousel/third_window_image.png",
      cta: "View Details",
      bg: "from-yellow-900/40 to-amber-700/40",
    },
    {
      id: 4,
      title: "Wholesale DDR Molasses",
      description: "Reliable supply of rich, natural molasses in DDRs.",
      image: "./images/carousel/forth_window_image.png",
      cta: "Inquire Now",
      bg: "from-amber-800/40 to-orange-700/40",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: any) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying]);

  return (
    <div
      className="relative m-5 w-screen left-1/2 right-1/2 -ml-[50vw]
     -mr-[50vw] -mt-4 md:-mt-6"
    >
      {/* Slides Container */}
      <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? "opacity-100 translate-x-0"
                : index < currentSlide
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-r ${slide.bg}`}
              ></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl">
                <div className="space-y-4 md:space-y-6">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl text-white/90 mx-auto max-w-2xl">
                    {slide.description}
                  </p>
                  <div className="pt-2">
                    <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg">
                      {slide.cta}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-all duration-200 hover:scale-110 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-all duration-200 hover:scale-110 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1 md:h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 md:w-12 bg-white"
                : "w-8 md:w-8 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
