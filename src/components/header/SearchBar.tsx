
import { Search, X } from "lucide-react";

interface SearchBarProps {
  isOpen: boolean;
}

export const SearchBar = ({ isOpen }: SearchBarProps) => {
  if (!isOpen) return null;

  return (
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
  );
};
