
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 hover:opacity-80 transition-opacity"
    >
      <img 
        src="/lovable-uploads/d0289308-98a6-4913-b7cd-73b0278e8893.png" 
        alt="DesignStore Logo" 
        className="h-10 w-auto" 
      />
      <div className="flex flex-col">
        <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          DesignStore
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400 -mt-1">Premium Home Solutions</span>
      </div>
    </Link>
  );
};
