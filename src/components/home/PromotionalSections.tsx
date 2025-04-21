
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const HomeImprovement = () => {
  return (
    <div className="max-w-[1600px] mx-auto py-8 sm:py-12 px-4">
      <div className="relative overflow-hidden rounded-lg">
        <img 
          src="https://images.unsplash.com/photo-1556909114-44e3e9399a2c" 
          alt="Home Improvement" 
          className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1000&h=400";
          }}
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-4">Browse Our Home Improvement Products</h2>
          <p className="text-white text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl">
            Explore our extensive collection of tiles, flooring, cabinets, sinks, vanities, 
            and more for your renovation projects.
          </p>
          <Link to="/home-improvement">
            <Button size="sm" className="px-4 sm:px-8 sm:py-6 text-sm sm:text-base font-medium">Shop Home Improvement</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const SmartHome = () => {
  return (
    <div className="max-w-[1600px] mx-auto py-8 sm:py-12 px-4">
      <div className="relative overflow-hidden rounded-lg">
        <img 
          src="https://images.unsplash.com/photo-1558002038-1055e2dae1d7" 
          alt="Smart Home" 
          className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1000&h=400";
          }}
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-4">Transform Your Home with Smart Technology</h2>
          <p className="text-white text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl">
            Discover our collection of smart home devices that make your life easier, safer, and more comfortable.
          </p>
          <Link to="/products/smart-home">
            <Button size="sm" className="px-4 sm:px-8 sm:py-6 text-sm sm:text-base font-medium">Shop Smart Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
