
import { X, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../theme/ThemeToggle";
import { WishlistButton } from "./WishlistButton";
import { CompareButton } from "./CompareButton";
import { CartMenu } from "./CartMenu";
import { UserMenu } from "./UserMenu";
import { categories } from "./data/categoriesData";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
}

export const MobileMenu = ({ isOpen, onClose, onToggle }: MobileMenuProps) => {
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="mr-2 lg:hidden"
        onClick={onToggle}
        aria-label="Toggle mobile menu"
      >
        <Menu className="h-6 w-6" />
      </Button>

      <div 
        className={`fixed inset-0 z-50 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden overflow-y-auto`}
      >
        <div className="max-w-[1400px] mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-6">
            <Link 
              to="/"
              className="text-2xl font-bold"
              onClick={onClose}
            >
              DesignStore
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              aria-label="Close mobile menu"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          
          <nav className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Link 
                to="/all-products"
                className="flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                onClick={onClose}
              >
                <span className="text-lg font-medium">All Products</span>
              </Link>
              <Link 
                to="/new-arrivals"
                className="flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                onClick={onClose}
              >
                <span className="text-lg font-medium">New Arrivals</span>
              </Link>
              <Link 
                to="/best-sellers"
                className="flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                onClick={onClose}
              >
                <span className="text-lg font-medium">Best Sellers</span>
              </Link>
              <Link 
                to="/deals"
                className="flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                onClick={onClose}
              >
                <span className="text-lg font-medium">Deals</span>
              </Link>
            </div>
            
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-medium mb-4">Categories</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {categories.map((category) => (
                  <Link 
                    key={category.name}
                    to={category.path} 
                    className="p-3 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg flex flex-col items-center text-center transition-colors"
                    onClick={onClose}
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 mb-2 overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=150&h=150";
                        }}
                      />
                    </div>
                    <span className="text-sm font-medium">{category.name}</span>
                  </Link>
                ))}
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
    </>
  );
};
