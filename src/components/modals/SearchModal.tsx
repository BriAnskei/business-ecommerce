import React, { useState } from "react";
import { Search, X } from "lucide-react";
import { Modal } from "../ui/modal";

// Mock product data
const mockProducts = [
  {
    id: 1,
    name: "Pure Sugarcane Molasses",
    price: 299.99,
    category: "Premium",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Organic Black Molasses",
    price: 349.99,
    category: "Organic",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Traditional Molasses Syrup",
    price: 199.99,
    category: "Traditional",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop",
  },
  {
    id: 4,
    name: "Light Molasses",
    price: 249.99,
    category: "Premium",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100&h=100&fit=crop",
  },
  {
    id: 5,
    name: "Blackstrap Molasses",
    price: 279.99,
    category: "Premium",
    image:
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=100&h=100&fit=crop",
  },
  {
    id: 6,
    name: "Golden Molasses",
    price: 229.99,
    category: "Traditional",
    image:
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=100&h=100&fit=crop",
  },
  {
    id: 7,
    name: "Cooking Molasses",
    price: 189.99,
    category: "Cooking",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=100&h=100&fit=crop",
  },
  {
    id: 8,
    name: "Baking Molasses",
    price: 219.99,
    category: "Baking",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=100&h=100&fit=crop",
  },
];

interface SearchModalProp {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProp) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts =
    searchQuery.trim() === ""
      ? []
      : mockProducts.filter(
          (product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase())
        );

  const handleProductClick = (product: any) => {
    console.log("Selected product:", product);
    // Handle product selection here
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="max-w-[700px] m-4 w-full"
      showCloseButton={false}
    >
      <div className="relative w-full max-w-[700px] rounded-lg bg-white dark:bg-gray-900 shadow-lg">
        {/* Header with Search Input */}
        <div className="border-b border-amber-100 dark:border-gray-800 p-4 lg:p-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-amber-700 dark:text-amber-300" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              className="w-full rounded-lg border border-amber-100 bg-white py-3 pl-12 pr-12 text-amber-900 placeholder-gray-400 focus:border-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-900/20 dark:border-gray-800 dark:bg-gray-800 dark:text-amber-100 dark:placeholder-gray-500 dark:focus:border-amber-300 dark:focus:ring-amber-300/20"
            />
            <button
              onClick={onClose}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-700 hover:text-amber-900 dark:text-amber-300 dark:hover:text-amber-100 p-1"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="custom-scrollbar max-h-[500px] overflow-y-auto p-4 lg:p-6">
          {searchQuery.trim() === "" ? (
            <div className="py-12 text-center">
              <Search className="mx-auto mb-3 h-12 w-12 text-amber-200 dark:text-gray-700" />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Start typing to search products
              </p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                No products found for "{searchQuery}"
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
                {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "result" : "results"} found
              </p>
              {filteredProducts.map((product) => (
                <button
                  key={product.id}
                  onClick={() => handleProductClick(product)}
                  className="flex w-full items-center gap-4 rounded-lg border border-amber-100 bg-white p-3 transition-all hover:border-amber-900 hover:bg-amber-50 hover:shadow-md dark:border-gray-800 dark:bg-gray-800 dark:hover:border-amber-300 dark:hover:bg-gray-700"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-16 w-16 rounded-lg object-cover"
                  />
                  <div className="flex-1 text-left">
                    <h6 className="font-medium text-amber-900 dark:text-amber-100">
                      {product.name}
                    </h6>
                    <p className="text-sm text-amber-700 dark:text-amber-300">
                      {product.category}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-amber-900 dark:text-amber-100">
                      ₱{product.price}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default SearchModal;
