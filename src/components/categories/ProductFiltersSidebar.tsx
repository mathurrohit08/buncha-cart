
import { FilterPanel } from "@/components/FilterPanel";

interface ProductFiltersSidebarProps {
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  maxPrice: number;
  selectedRating: number | null;
  setSelectedRating: (rating: number | null) => void;
  showInStock: boolean;
  setShowInStock: (show: boolean) => void;
  showOnSale: boolean;
  setShowOnSale: (show: boolean) => void;
  showNew: boolean;
  setShowNew: (show: boolean) => void;
  showBestSellers: boolean;
  setShowBestSellers: (show: boolean) => void;
  applyFilters: () => void;
  resetFilters: () => void;
  // New properties for advanced filtering
  brands?: string[];
  selectedBrands?: string[];
  setSelectedBrands?: (brands: string[]) => void;
  features?: string[];
  selectedFeatures?: string[];
  setSelectedFeatures?: (features: string[]) => void;
}

export const ProductFiltersSidebar = (props: ProductFiltersSidebarProps) => {
  return <FilterPanel {...props} />;
};
