import { useState } from "react";
import { Link } from "react-router";
import SearchModal from "../components/modals/SearchModal";
import AuthModal from "../components/modals/AuthModal";
import UserDropdown from "../components/header/UserDropdown";
import { SearchIcon } from "lucide-react";
import { CartIcon } from "../icons";

interface AppHeaderProp {
  openCartSideBar: () => void;
}

const AppHeader: React.FC<AppHeaderProp> = ({ openCartSideBar }) => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");
  const [isAuthenticated] = useState(false); // Replace with actual auth state

  const toggleApplicationMenu = () => {
    setApplicationMenuOpen(!isApplicationMenuOpen);
  };

  return (
    <>
      <TopInfoBar />
      <header
        className="sticky top-0 flex w-full bg-white border-b-2
       border-amber-100 z-50 dark:border-gray-800 dark:bg-gray-900 
       shadow-sm"
      >
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-col items-center justify-between 
          lg:flex-row lg:gap-8"
          >
            {/* Logo Section */}
            <div
              className="flex items-center justify-between w-full gap-2 py-3 
            border-b border-amber-100 dark:border-gray-800 
            sm:gap-4 lg:justify-normal lg:border-b-0 lg:py-4 lg:w-auto"
            >
              <Logo />

              <button
                onClick={toggleApplicationMenu}
                className="flex items-center justify-center w-10 h-10 
                text-amber-900 rounded-lg z-50 hover:bg-amber-50
                 dark:text-amber-100 dark:hover:bg-gray-800 lg:hidden"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            <Navigations
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />

            {/* Right Side Actions */}
            <div
              className={`${
                isApplicationMenuOpen ? "flex" : "hidden"
              } justify-between items-center w-full gap-4 py-4 shadow-lg 
              lg:flex lg:w-auto lg:gap-4 lg:py-0 lg:shadow-none transition-all`}
            >
              {/* Action buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsSearchModalOpen(true)}
                  className="flex items-center justify-center w-10 h-10
                   text-amber-900 dark:text-amber-100 hover:bg-amber-50
                    dark:hover:bg-gray-800 rounded-lg transition-colors"
                  aria-label="Search"
                >
                  <SearchIcon className="w-5 h-5" />
                </button>

                <button
                  className="flex items-center justify-center w-10 h-10
                   text-amber-900 dark:text-amber-100 hover:bg-amber-50
                    dark:hover:bg-gray-800 rounded-lg 
                    transition-colors relative"
                  aria-label="Cart"
                  onClick={openCartSideBar}
                >
                  <CartIcon className="w-5 h-5" />
                  <span
                    className="absolute -top-1 -right-1 bg-amber-900
                   text-white text-xs rounded-full w-5 h-5 flex items-center 
                   justify-center font-bold"
                  >
                    0
                  </span>
                </button>

                {false ? (
                  <UserDropdown />
                ) : (
                  <button
                    onClick={() => setIsAuthModalOpen(true)}
                    className="bg-amber-900 text-white hover:bg-amber-800
                     dark:bg-amber-700 dark:hover:bg-amber-600 rounded-lg
                      px-5 py-2 text-sm font-semibold transition-colors
                       duration-200 shadow-sm"
                  >
                    Sign In
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <NavigationMobile
          isApplicationMenuOpen={isApplicationMenuOpen}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          setApplicationMenuOpen={setApplicationMenuOpen}
        />
      </header>

      <HeaderModals
        isAuthModalOpen={isAuthModalOpen}
        isSearchModalOpen={isSearchModalOpen}
        closeSearchModal={() => setIsSearchModalOpen(false)}
        closeAuthModal={() => setIsAuthModalOpen(false)}
      />
    </>
  );
};

const TopInfoBar = () => {
  return (
    <div className="bg-amber-900 text-amber-50 py-2 text-center text-sm">
      <div
        className="max-w-6xl mx-auto px-4 flex items-center 
      justify-center gap-2"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 
            11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="font-medium">
          🇵🇭 Locally Sourced from the Philippines
        </span>
        <span className="hidden sm:inline">•</span>
        <span className="hidden sm:inline">Farm to Table Quality</span>
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        {/* Molasses Drop Icon */}
        <div
          className="w-10 h-10 bg-gradient-to-br from-amber-700 
        to-amber-900 rounded-full flex items-center justify-center shadow-md"
        >
          <svg
            className="w-6 h-6 text-amber-100"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707
               9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 
               0 00-1.414-1.414L11 10.586V7z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <div
            className="text-xl font-bold text-amber-900 
          dark:text-amber-100"
          >
            PureMolasses
          </div>
          <div
            className="text-xs text-amber-700 
          dark:text-amber-300 -mt-1"
          >
            Traditional Filipino Quality
          </div>
        </div>
      </div>
    </Link>
  );
};

const Navigations = ({
  activeMenu,
  setActiveMenu,
}: {
  activeMenu: string;
  setActiveMenu: (prev: string) => void;
}) => {
  return (
    <>
      <nav className="hidden lg:flex lg:flex-1 lg:justify-center">
        <ul className="flex items-center gap-8">
          <li>
            <Link
              to="/"
              onClick={() => setActiveMenu("home")}
              className={`text-sm font-semibold transition-colors relative 
                pb-1 ${
                  activeMenu === "home"
                    ? "text-amber-900 dark:text-amber-300"
                    : "text-gray-600 hover:text-amber-800 dark:text-gray-400 dark:hover:text-amber-300"
                }`}
            >
              Home
              {activeMenu === "home" && (
                <span
                  className="absolute bottom-0 left-0 w-full h-0.5
                 bg-amber-900 dark:bg-amber-300"
                ></span>
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              onClick={() => setActiveMenu("products")}
              className={`text-sm font-semibold transition-colors relative pb-1 ${
                activeMenu === "products"
                  ? "text-amber-900 dark:text-amber-300"
                  : "text-gray-600 hover:text-amber-800 dark:text-gray-400 dark:hover:text-amber-300"
              }`}
            >
              Products
              {activeMenu === "products" && (
                <span
                  className="absolute bottom-0 left-0 w-full h-0.5
                 bg-amber-900 dark:bg-amber-300"
                ></span>
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setActiveMenu("contact")}
              className={`text-sm font-semibold transition-colors relative pb-1 ${
                activeMenu === "contact"
                  ? "text-amber-900 dark:text-amber-300"
                  : "text-gray-600 hover:text-amber-800 dark:text-gray-400 dark:hover:text-amber-300"
              }`}
            >
              Contact Us
              {activeMenu === "contact" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-900 dark:bg-amber-300"></span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

const NavigationMobile = ({
  isApplicationMenuOpen,
  activeMenu,
  setActiveMenu,
  setApplicationMenuOpen,
}: {
  isApplicationMenuOpen: boolean;
  activeMenu: string;
  setActiveMenu: (param: string) => void;
  setApplicationMenuOpen: (param: boolean) => void;
}) => {
  return (
    <>
      {/* Mobile Menu */}
      {isApplicationMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-b border-amber-100 dark:border-gray-800 shadow-lg">
          <nav className="max-w-6xl mx-auto px-4 py-4">
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    setActiveMenu("home");
                    setApplicationMenuOpen(false);
                  }}
                  className={`block px-4 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                    activeMenu === "home"
                      ? "bg-amber-100 text-amber-900 dark:bg-gray-800 dark:text-amber-300"
                      : "text-gray-700 hover:bg-amber-50 dark:text-gray-300 dark:hover:bg-gray-800"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  onClick={() => {
                    setActiveMenu("products");
                    setApplicationMenuOpen(false);
                  }}
                  className={`block px-4 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                    activeMenu === "products"
                      ? "bg-amber-100 text-amber-900 dark:bg-gray-800 dark:text-amber-300"
                      : "text-gray-700 hover:bg-amber-50 dark:text-gray-300 dark:hover:bg-gray-800"
                  }`}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => {
                    setActiveMenu("contact");
                    setApplicationMenuOpen(false);
                  }}
                  className={`block px-4 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                    activeMenu === "contact"
                      ? "bg-amber-100 text-amber-900 dark:bg-gray-800 dark:text-amber-300"
                      : "text-gray-700 hover:bg-amber-50 dark:text-gray-300 dark:hover:bg-gray-800"
                  }`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

const HeaderModals = ({
  isSearchModalOpen,
  isAuthModalOpen,
  closeAuthModal,
  closeSearchModal,
}: {
  isAuthModalOpen: boolean;
  isSearchModalOpen: boolean;
  closeSearchModal: () => void;
  closeAuthModal: () => void;
}) => {
  return (
    <>
      <SearchModal isOpen={isSearchModalOpen} onClose={closeSearchModal} />
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
    </>
  );
};

export default AppHeader;
