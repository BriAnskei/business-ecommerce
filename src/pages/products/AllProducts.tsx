import { useState } from "react";
import { Filter, ChevronDown } from "lucide-react";

const AllProducts = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const allProducts = [
    {
      id: 1,
      name: "Molasses by 3L Container",
      description:
        "Premium quality molasses in compact 3-liter containers. Perfect for home cooking, baking, and small-scale food preparation. Our molasses is rich in minerals and provides authentic Filipino sweetness.",
      originalPrice: 280,
      salePrice: 220,
      discount: 21,
      isNew: false,
      image: "container",
      unit: "3L Container",
      category: "container",
      inStock: true,
    },
    {
      id: 2,
      name: "Molasses by 5L Container",
      description:
        "Premium quality molasses in convenient 5-liter containers, perfect for small-scale use and home cooking. Ideal for bakers and food enthusiasts who need quality molasses in manageable quantities.",
      originalPrice: 450,
      salePrice: 350,
      discount: 22,
      isNew: true,
      image: "container",
      unit: "5L Container",
      category: "container",
      inStock: true,
    },
    {
      id: 3,
      name: "Molasses by 10L Container",
      description:
        "Large 10-liter container of premium molasses. Excellent value for regular users, small restaurants, and catering businesses. Maintains freshness and quality for extended periods.",
      originalPrice: 850,
      salePrice: 680,
      discount: 20,
      isNew: false,
      image: "container",
      unit: "10L Container",
      category: "container",
      inStock: true,
    },
    {
      id: 4,
      name: "Molasses by Gallon",
      description:
        "Traditional Filipino molasses by the gallon, ideal for baking and authentic recipes. Time-tested quality that brings out the best flavors in your traditional Filipino desserts and dishes.",
      originalPrice: 800,
      salePrice: 650,
      discount: 19,
      isNew: false,
      image: "gallon",
      unit: "1 Gallon",
      category: "gallon",
      inStock: true,
    },
    {
      id: 5,
      name: "Molasses by Drum",
      description:
        "Bulk molasses in 55-gallon drums, perfect for commercial operations and food manufacturers. Industrial-grade quality with consistent sweetness and color. Ideal for large-scale production facilities.",
      originalPrice: 35000,
      salePrice: 28000,
      discount: 20,
      isNew: true,
      image: "drum",
      unit: "55 Gallon Drum",
      category: "drum",
      inStock: true,
    },
    {
      id: 6,
      name: "Molasses by Liter",
      description:
        "Pure molasses sold by the liter, great for precise measurements in professional kitchens. Perfect portion control for chefs and culinary professionals who demand accuracy in their recipes.",
      originalPrice: 180,
      salePrice: 140,
      discount: 22,
      isNew: false,
      image: "liter",
      unit: "1 Liter",
      category: "liter",
      inStock: false,
    },
    {
      id: 7,
      name: "Molasses by Ton",
      description:
        "Industrial-grade molasses by the ton, specially processed for large-scale production needs. Perfect for manufacturing facilities, distilleries, and industrial food processing operations.",
      originalPrice: 75000,
      salePrice: 60000,
      discount: 20,
      isNew: true,
      image: "ton",
      unit: "1 Metric Ton",
      category: "ton",
      inStock: true,
    },
  ];

  type Colors = {
    container: string;
    gallon: string;
    drum: string;
    liter: string;
    ton: string;
  };

  const getProductImage = (type: keyof Colors) => {
    const colors: Colors = {
      container: "from-amber-600 to-amber-800",
      gallon: "from-amber-700 to-amber-900",
      drum: "from-amber-800 to-yellow-900",
      liter: "from-yellow-700 to-amber-800",
      ton: "from-amber-900 to-yellow-950",
    };

    return (
      <div
        className={`w-full h-full bg-gradient-to-br ${colors[type]} flex 
        items-center justify-center relative overflow-hidden`}
      >
        {/* Decorative circles */}
        <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-6 left-6 w-12 h-12 bg-white/10 rounded-full"></div>

        {/* Container/Barrel representation */}
        <div className="relative z-10">
          {type === "container" && (
            <svg
              className="w-24 h-24 text-amber-100"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9v6c0 3.87 3.13 7 7 7s7-3.13 7-7V9c0-3.87-3.13-7-7-7zm0 18c-2.76 0-5-2.24-5-5v-2h10v2c0 2.76-2.24 5-5 5z" />
            </svg>
          )}
          {type === "gallon" && (
            <svg
              className="w-24 h-24 text-amber-100"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18 6h-2V3c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v3H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm8 16H6V8h12v12z" />
            </svg>
          )}
          {type === "drum" && (
            <svg
              className="w-24 h-24 text-amber-100"
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
              className="w-24 h-24 text-amber-100"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7 2v20l5-3 5 3V2H7zm8 16.5l-3-1.8-3 1.8V4h6v14.5z" />
            </svg>
          )}
          {type === "ton" && (
            <svg
              className="w-24 h-24 text-amber-100"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 6h-3V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM9 4h6v2H9V4zm11 15H4V8h16v11z" />
            </svg>
          )}
        </div>

        {/* Product label */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-white/90 px-3 py-1 rounded-full">
          <span className="text-xs font-bold text-amber-900">PureMolasses</span>
        </div>
      </div>
    );
  };

  const filterOptions = [
    { value: "all", label: "All Products" },
    { value: "container", label: "Containers" },
    { value: "gallon", label: "Gallons" },
    { value: "drum", label: "Drums" },
    { value: "liter", label: "Liters" },
    { value: "ton", label: "Tons" },
  ];

  const sortOptions = [
    { value: "featured", label: "Featured" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "name", label: "Name: A to Z" },
    { value: "newest", label: "Newest" },
  ];

  const filteredProducts = allProducts.filter((product) => {
    if (selectedFilter === "all") return true;
    return product.category === selectedFilter;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.salePrice - b.salePrice;
      case "price-high":
        return b.salePrice - a.salePrice;
      case "name":
        return a.name.localeCompare(b.name);
      case "newest":
        return b.isNew === a.isNew ? 0 : b.isNew ? 1 : -1;
      default:
        return 0;
    }
  });

  return (
    <div className="w-full bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <p className="text-amber-700 dark:text-amber-400 text-sm font-semibold uppercase tracking-wide mb-2">
            Our Collection
          </p>
          <h1 className="text-4xl font-bold text-amber-900 dark:text-amber-100">
            All Products
          </h1>
        </div>

        {/* Filter and Sort Bar */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 items-center">
            <Filter className="w-5 h-5 text-amber-900 dark:text-amber-100 mr-1" />
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelectedFilter(option.value)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedFilter === option.value
                    ? "bg-amber-900 text-white dark:bg-amber-700"
                    : "bg-amber-100 text-amber-900 hover:bg-amber-200 dark:bg-gray-700 dark:text-amber-100 dark:hover:bg-gray-600"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              className="flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-gray-700 text-amber-900 dark:text-amber-100 rounded-lg font-medium hover:bg-amber-200 dark:hover:bg-gray-600 transition-colors"
            >
              <span className="text-sm">
                Sort: {sortOptions.find((opt) => opt.value === sortBy)?.label}
              </span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {showSortDropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-20 border border-amber-100 dark:border-gray-700">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSortBy(option.value);
                      setShowSortDropdown(false);
                    }}
                    className={`w-full text-left px-4 py-3 hover:bg-amber-50 dark:hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                      sortBy === option.value
                        ? "bg-amber-100 dark:bg-gray-700 text-amber-900 dark:text-amber-100 font-semibold"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Products List */}
        <div className="space-y-6">
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Section - 30% width on desktop */}
                <div className="w-full md:w-[30%] aspect-square md:aspect-auto">
                  <div className="relative h-full bg-gradient-to-br from-amber-100 to-amber-200 dark:from-gray-700 dark:to-gray-600">
                    {getProductImage(product.image as keyof Colors)}

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.isNew && (
                        <span className="bg-white text-amber-900 px-3 py-1 rounded-full text-xs font-bold uppercase shadow-md">
                          New
                        </span>
                      )}
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                        -{product.discount}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Details Section - 70% width on desktop */}
                <div className="w-full md:w-[70%] p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    {/* Unit Badge and Stock */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-300 px-3 py-1 rounded-full text-xs font-semibold">
                        {product.unit}
                      </span>
                      <span
                        className={`text-sm font-semibold ${
                          product.inStock
                            ? "text-green-600 dark:text-green-400"
                            : "text-red-600 dark:text-red-400"
                        }`}
                      >
                        {product.inStock ? "In Stock" : "Out of Stock"}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-2xl md:text-3xl font-bold text-amber-900 dark:text-amber-100 mb-3">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Price and Buttons */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                    {/* Price Section */}
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-gray-500 dark:text-gray-400 line-through text-sm">
                          ₱{product.originalPrice.toLocaleString()}
                        </span>
                      </div>
                      <div className="text-3xl md:text-4xl font-bold text-amber-900 dark:text-amber-100">
                        ₱{product.salePrice.toLocaleString()}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 w-full sm:w-auto">
                      <button
                        className={`flex-1 sm:flex-none px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md ${
                          product.inStock
                            ? "bg-white dark:bg-gray-700 text-amber-900 dark:text-amber-100 border-2 border-amber-900 dark:border-amber-700 hover:bg-amber-50 dark:hover:bg-gray-600"
                            : "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                        }`}
                        disabled={!product.inStock}
                      >
                        Add to Cart
                      </button>
                      <button
                        className={`flex-1 sm:flex-none px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md ${
                          product.inStock
                            ? "bg-amber-900 hover:bg-amber-800 dark:bg-amber-700 dark:hover:bg-amber-600 text-white"
                            : "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                        }`}
                        disabled={!product.inStock}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Products Found */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
