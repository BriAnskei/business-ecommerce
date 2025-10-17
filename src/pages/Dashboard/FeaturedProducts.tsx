import { useState } from "react";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";

const FeaturedProducts = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const products = [
    {
      id: 1,
      name: "Molasses by Container",
      description:
        "Premium quality molasses in convenient containers, perfect for small-scale use and home cooking.",
      originalPrice: 450,
      salePrice: 350,
      discount: 22,
      isNew: true,
      image: "container",
      unit: "5L Container",
    },
    {
      id: 2,
      name: "Molasses by Gallon",
      description:
        "Traditional Filipino molasses by the gallon, ideal for baking and authentic recipes.",
      originalPrice: 800,
      salePrice: 650,
      discount: 19,
      isNew: false,
      image: "gallon",
      unit: "1 Gallon",
    },
    {
      id: 3,
      name: "Molasses by Drum",
      description:
        "Bulk molasses in 55-gallon drums, perfect for commercial operations and food manufacturers.",
      originalPrice: 35000,
      salePrice: 28000,
      discount: 20,
      isNew: true,
      image: "drum",
      unit: "55 Gallon Drum",
    },
    {
      id: 4,
      name: "Molasses by Liter",
      description:
        "Pure molasses sold by the liter, great for precise measurements in professional kitchens.",
      originalPrice: 180,
      salePrice: 140,
      discount: 22,
      isNew: false,
      image: "liter",
      unit: "1 Liter",
    },
    {
      id: 5,
      name: "Molasses by Ton",
      description:
        "Industrial-grade molasses by the ton, specially processed for large-scale production needs.",
      originalPrice: 75000,
      salePrice: 60000,
      discount: 20,
      isNew: true,
      image: "ton",
      unit: "1 Metric Ton",
    },
  ];

  const scroll = (direction: any) => {
    const container = document.getElementById("products-container");
    const scrollAmount = 320;

    if (direction === "left") {
      container?.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      setScrollPosition(Math.max(0, scrollPosition - scrollAmount));
    } else {
      container?.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setScrollPosition(scrollPosition + scrollAmount);
    }
  };

  const getProductImage = (type: any) => {
    const colors = {
      container: "from-amber-600 to-amber-800",
      gallon: "from-amber-700 to-amber-900",
      drum: "from-amber-800 to-yellow-900",
      liter: "from-yellow-700 to-amber-800",
      ton: "from-amber-900 to-yellow-950",
    };

    return (
      <div
        className={`w-full h-full bg-gradient-to-br ${colors[type]} flex items-center justify-center relative overflow-hidden`}
      >
        {/* Decorative circles */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 bg-white/10 rounded-full"></div>

        {/* Container/Barrel representation */}
        <div className="relative z-10">
          {type === "container" && (
            <svg
              className="w-32 h-32 text-amber-100"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9v6c0 3.87 3.13 7 7 7s7-3.13 7-7V9c0-3.87-3.13-7-7-7zm0 18c-2.76 0-5-2.24-5-5v-2h10v2c0 2.76-2.24 5-5 5z" />
            </svg>
          )}
          {type === "gallon" && (
            <svg
              className="w-32 h-32 text-amber-100"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18 6h-2V3c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v3H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm8 16H6V8h12v12z" />
            </svg>
          )}
          {type === "drum" && (
            <svg
              className="w-32 h-32 text-amber-100"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 2v20h12V2H6zm10 18H8V4h8v16z" />
              <rect x="9" y="6" width="6" height="2" />
              <rect x="9" y="10" width="6" height="2" />
              <rect x="9" y="14" width="6" height="2" />
            </svg>
          )}
          {type === "liter" && (
            <svg
              className="w-32 h-32 text-amber-100"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7 2v20l5-3 5 3V2H7zm8 16.5l-3-1.8-3 1.8V4h6v14.5z" />
            </svg>
          )}
          {type === "ton" && (
            <svg
              className="w-32 h-32 text-amber-100"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 6h-3V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM9 4h6v2H9V4zm11 15H4V8h16v11z" />
            </svg>
          )}
        </div>

        {/* Product label */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 px-4 py-1 rounded-full">
          <span className="text-xs font-bold text-amber-900">PureMolasses</span>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <p className="text-amber-700 dark:text-amber-400 text-sm font-semibold uppercase tracking-wide mb-2">
            Premium Selection
          </p>
          <h2 className="text-4xl font-bold text-amber-900 dark:text-amber-100">
            Featured Products
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:bg-amber-50 dark:hover:bg-gray-700 transition-colors hidden md:block"
            aria-label="Previous products"
          >
            <ChevronLeft className="w-6 h-6 text-amber-900 dark:text-amber-100" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:bg-amber-50 dark:hover:bg-gray-700 transition-colors hidden md:block"
            aria-label="Next products"
          >
            <ChevronRight className="w-6 h-6 text-amber-900 dark:text-amber-100" />
          </button>

          {/* Products Container */}
          <div
            id="products-container"
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-[75%] sm:w-[45%] md:w-[280px] lg:w-[300px] snap-center"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-72 bg-gradient-to-br from-amber-100 to-amber-200 dark:from-gray-700 dark:to-gray-600">
                    {getProductImage(product.image)}

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {product.isNew && (
                        <span className="bg-white text-amber-900 px-3 py-1 rounded-full text-xs font-bold uppercase shadow-md">
                          New
                        </span>
                      )}
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                        -{product.discount}%
                      </span>
                    </div>

                    {/* Quick View Button */}
                    <button className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center group">
                      <span className="bg-white text-amber-900 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-transform">
                        <Eye className="w-5 h-5" />
                        Quick View
                      </span>
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Unit Badge */}
                    <div className="mb-3">
                      <span className="inline-block bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-300 px-3 py-1 rounded-full text-xs font-semibold">
                        {product.unit}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-2">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow line-clamp-2">
                      {product.description}
                    </p>

                    {/* Price Section */}
                    <div className="flex items-end justify-between mt-auto">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-gray-500 dark:text-gray-400 line-through text-sm">
                            ₱{product.originalPrice.toLocaleString()}
                          </span>
                        </div>
                        <div className="text-3xl font-bold text-amber-900 dark:text-amber-100">
                          ₱{product.salePrice.toLocaleString()}
                        </div>
                      </div>

                      <button className="bg-amber-900 hover:bg-amber-800 dark:bg-amber-700 dark:hover:bg-amber-600 text-white px-5 py-2 rounded-lg font-semibold transition-colors duration-200 shadow-md">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {products.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-amber-300 dark:bg-amber-700"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
