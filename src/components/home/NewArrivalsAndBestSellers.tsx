
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const NewArrivalsAndBestSellers = () => {
  return (
    <div className="max-w-[1600px] mx-auto py-8 sm:py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      {/* New Arrivals */}
      <div className="rounded-lg overflow-hidden shadow-md">
        <Link to="/new-arrivals">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" 
              alt="New Arrivals" 
              className="w-full h-56 sm:h-64 object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=350";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/70 to-transparent flex flex-col justify-end p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">New Arrivals</h3>
              <p className="text-white text-xs sm:text-sm mb-3 sm:mb-4">Check out our latest products and be the first to get them</p>
              <Button size="sm" variant="secondary" className="self-start">
                View New Arrivals
              </Button>
            </div>
          </div>
        </Link>
      </div>
      
      {/* Best Sellers */}
      <div className="rounded-lg overflow-hidden shadow-md">
        <Link to="/best-sellers">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560769629-975ec94e6a86" 
              alt="Best Sellers" 
              className="w-full h-56 sm:h-64 object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=350";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/70 to-transparent flex flex-col justify-end p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Best Sellers</h3>
              <p className="text-white text-xs sm:text-sm mb-3 sm:mb-4">Discover our most popular products that customers love</p>
              <Button size="sm" variant="secondary" className="self-start">
                View Best Sellers
              </Button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
