
import { useState, useEffect } from "react";
import { Menu, Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "./header/Logo";
import { ThemeToggle } from "./theme/ThemeToggle";
import { Button } from "@/components/ui/button";
import { ProductMenu } from "./header/ProductMenu";
import { CategoryMenu } from "./header/CategoryMenu";
import { UserMenu } from "./header/UserMenu";
import { WishlistButton } from "./header/WishlistButton";
import { CartMenu } from "./header/CartMenu";
import { CompareButton } from "./header/CompareButton";
import { useIsMobile } from "@/hooks/use-mobile";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm" : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2 lg:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <Logo />
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <ProductMenu />
            <CategoryMenu />
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

          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              {searchOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Search className="h-5 w-5" />
              )}
            </Button>
            <ThemeToggle />
            <div className="hidden md:flex items-center space-x-1">
              <WishlistButton />
              <CompareButton />
              <CartMenu />
              <UserMenu />
            </div>
          </div>
        </div>

        {searchOpen && (
          <div className="py-3 border-t border-gray-200 dark:border-gray-700">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        )}
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-gray-900 overflow-y-auto">
          <div className="max-w-[1600px] mx-auto px-4 py-4">
            <div className="flex items-center justify-between mb-6">
              <Logo />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <nav className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Link 
                  to="/all-products"
                  className="flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-lg font-medium">All Products</span>
                </Link>
                <Link 
                  to="/new-arrivals"
                  className="flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-lg font-medium">New Arrivals</span>
                </Link>
                <Link 
                  to="/best-sellers"
                  className="flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-lg font-medium">Best Sellers</span>
                </Link>
                <Link 
                  to="/deals"
                  className="flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-lg font-medium">Deals</span>
                </Link>
              </div>
              
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium mb-2">Categories</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Link 
                    to="/category/furniture" 
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Furniture
                  </Link>
                  <Link 
                    to="/category/electronics" 
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Electronics
                  </Link>
                  <Link 
                    to="/category/kitchen" 
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Kitchen
                  </Link>
                  <Link 
                    to="/category/bathroom" 
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Bathroom
                  </Link>
                </div>
              </div>

              <div className="flex justify-around border-t border-b border-gray-200 dark:border-gray-700 py-4">
                <WishlistButton />
                <CompareButton />
                <CartMenu />
                <UserMenu />
                <ThemeToggle />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
