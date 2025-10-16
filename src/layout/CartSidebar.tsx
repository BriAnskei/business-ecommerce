import { useState } from "react";
import { X, Trash2, ShoppingBag, Minus, Plus } from "lucide-react";

// Mock cart data - replace with your actual cart state management
const mockCartItems = [
  {
    id: 1,
    name: "Pure Sugarcane Molasses",
    price: 350,
    quantity: 2,
    image: "🍯",
    size: "500ml",
  },
  {
    id: 2,
    name: "Organic Blackstrap Molasses",
    price: 450,
    quantity: 1,
    image: "🍯",
    size: "750ml",
  },
];

interface CartSidebarProp {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar = ({ isOpen, onClose }: CartSidebarProp) => {
  const [cartItems, setCartItems] = useState(mockCartItems);

  const updateQuantity = (id: any, delta: any) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: any) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 50;
  const total = subtotal + shipping;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[50] transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white dark:bg-gray-900 shadow-2xl z-[60] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-amber-100 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-900 dark:text-amber-300" />
              <h2 className="text-lg font-bold text-amber-900 dark:text-amber-100">
                Shopping Cart
              </h2>
              <span className="bg-amber-900 text-white text-xs rounded-full px-2 py-0.5 font-semibold">
                {cartItems.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-amber-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-16 h-16 text-gray-300 dark:text-gray-600 mb-4" />
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  Your cart is empty
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                  Add some delicious molasses to get started!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 p-3 bg-amber-50 dark:bg-gray-800 rounded-lg"
                  >
                    {/* Product Image */}
                    <div className="w-20 h-20 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
                      {item.image}
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100 truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                        {item.size}
                      </p>
                      <p className="text-amber-900 dark:text-amber-300 font-bold mt-1">
                        ₱{item.price}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-6 h-6 rounded bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center justify-center transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3 text-gray-700 dark:text-gray-300" />
                        </button>
                        <span className="w-8 text-center font-semibold text-sm text-gray-900 dark:text-gray-100">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-6 h-6 rounded bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center justify-center transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3 text-gray-700 dark:text-gray-300" />
                        </button>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors self-start"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4 text-red-600 dark:text-red-400" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-amber-100 dark:border-gray-800 p-4 space-y-4">
              {/* Price Summary */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">
                    Subtotal
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    ₱{subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">
                    Shipping
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    ₱{shipping.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-base pt-2 border-t border-amber-100 dark:border-gray-700">
                  <span className="font-bold text-gray-900 dark:text-gray-100">
                    Total
                  </span>
                  <span className="font-bold text-amber-900 dark:text-amber-300">
                    ₱{total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <button className="w-full bg-amber-900 hover:bg-amber-800 dark:bg-amber-700 dark:hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition-colors shadow-sm">
                  Proceed to Checkout
                </button>
                <button
                  onClick={clearCart}
                  className="w-full bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
