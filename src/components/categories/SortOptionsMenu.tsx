
import { 
  ArrowDownAZ, 
  ArrowUpAZ, 
  ArrowDownUp, 
  ArrowUpDown,
  Sparkles,
  Star,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface SortOptionsMenuProps {
  sortOption: string;
  setSortOption: (option: string) => void;
}

export const SortOptionsMenu = ({ sortOption, setSortOption }: SortOptionsMenuProps) => {
  const getSortIcon = (option: string) => {
    switch (option) {
      case "price-low":
        return <ArrowUpDown className="h-4 w-4" />;
      case "price-high":
        return <ArrowDownUp className="h-4 w-4" />;
      case "newest":
        return <ArrowDownAZ className="h-4 w-4" />;
      case "rating":
        return <Star className="h-4 w-4" />;
      case "bestselling":
        return <TrendingUp className="h-4 w-4" />;
      default: // featured
        return <Sparkles className="h-4 w-4" />;
    }
  };
  
  const getSortLabel = (option: string) => {
    switch (option) {
      case "price-low":
        return "Price: Low to High";
      case "price-high":
        return "Price: High to Low";
      case "newest":
        return "Newest First";
      case "rating":
        return "Highest Rated";
      case "bestselling":
        return "Best Selling";
      default:
        return "Featured";
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 flex items-center">
          {getSortIcon(sortOption)}
          <span className="ml-2">{getSortLabel(sortOption)}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
        <DropdownMenuItem onClick={() => setSortOption("featured")} className="flex items-center cursor-pointer">
          <Sparkles className="h-4 w-4 mr-2" />
          <span>Featured</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setSortOption("price-low")} className="flex items-center cursor-pointer">
          <ArrowUpDown className="h-4 w-4 mr-2" />
          <span>Price: Low to High</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setSortOption("price-high")} className="flex items-center cursor-pointer">
          <ArrowDownUp className="h-4 w-4 mr-2" />
          <span>Price: High to Low</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setSortOption("newest")} className="flex items-center cursor-pointer">
          <ArrowDownAZ className="h-4 w-4 mr-2" />
          <span>Newest First</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setSortOption("rating")} className="flex items-center cursor-pointer">
          <Star className="h-4 w-4 mr-2" />
          <span>Highest Rated</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setSortOption("bestselling")} className="flex items-center cursor-pointer">
          <TrendingUp className="h-4 w-4 mr-2" />
          <span>Best Selling</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
