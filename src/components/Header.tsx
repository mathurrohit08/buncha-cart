
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./header/Logo";
import { CategoryMenu } from "./header/CategoryMenu";
import { ProductMenu } from "./header/ProductMenu";
import { UserMenu } from "./header/UserMenu";
import { WishlistButton } from "./header/WishlistButton";
import { CartMenu } from "./header/CartMenu";
import { ThemeToggle } from "./theme/ThemeToggle";
import { Link } from "react-router-dom";

// Import the categories data from CategoryMenu
import { categories } from "./header/CategoryMenu";
// Import the productTypes data from ProductMenu
import { productTypes } from "./header/ProductMenu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Close menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close mobile menu on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="lg:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            <Logo />
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <CategoryMenu />
            <ProductMenu />
            <Link to="/new-arrivals" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              New Arrivals
            </Link>
            <Link to="/best-sellers" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Best Sellers
            </Link>
            <Link to="/deals" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Deals
            </Link>
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <ThemeToggle />
            <UserMenu />
            <WishlistButton />
            <CartMenu />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div 
          ref={menuRef}
          className="lg:hidden fixed inset-0 top-16 bg-white dark:bg-gray-900 z-40 overflow-y-auto"
        >
          <div className="container mx-auto px-4 py-6 space-y-6">
            <div className="border-b dark:border-gray-800 pb-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Categories</h3>
              {categories.map((category) => (
                <div key={category.name} className="mb-4">
                  <Link 
                    to={`/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-lg font-medium dark:text-white mb-2 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                  <div className="grid grid-cols-2 gap-2 pl-2">
                    {category.subcategories.map((sub) => (
                      <Link
                        key={sub}
                        to={`/category/${category.name.toLowerCase().replace(/\s+/g, "-")}/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-sm dark:text-gray-300 py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-b dark:border-gray-800 pb-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Products</h3>
              {productTypes.map((type) => (
                <div key={type.name} className="mb-4">
                  <Link 
                    to={`/products/${type.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-lg font-medium dark:text-white mb-2 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {type.name}
                  </Link>
                  <div className="grid grid-cols-2 gap-2 pl-2">
                    {type.products.slice(0, 4).map((product, index) => (
                      <Link
                        key={index}
                        to={`/products/${type.name.toLowerCase().replace(/\s+/g, "-")}/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-sm dark:text-gray-300 py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col space-y-4">
              <Link 
                to="/about-us" 
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/faq" 
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
