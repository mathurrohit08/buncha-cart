
import { FilterPanel } from "@/components/FilterPanel";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

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
  title?: string;
  activeFiltersCount?: number;
}

export const ProductFiltersSidebar = (props: ProductFiltersSidebarProps) => {
  // Calculate the number of active filters
  const activeFiltersCount = 
    (props.selectedRating !== null ? 1 : 0) +
    (props.showInStock ? 1 : 0) +
    (props.showOnSale ? 1 : 0) +
    (props.showNew ? 1 : 0) +
    (props.showBestSellers ? 1 : 0) +
    (props.selectedBrands?.length || 0) +
    (props.selectedFeatures?.length || 0) +
    (props.priceRange[0] > 0 || props.priceRange[1] < props.maxPrice ? 1 : 0);

  return (
    <div className="relative w-full">
      {activeFiltersCount > 0 && (
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute -top-2 -right-2 z-10"
        >
          <Badge 
            className="bg-purple-600 text-white font-medium"
            variant="secondary"
          >
            {activeFiltersCount} active {activeFiltersCount === 1 ? 'filter' : 'filters'}
          </Badge>
        </motion.div>
      )}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700">
        <FilterPanel 
          {...props} 
          title={props.title || "Refine Results"}
        />
      </div>
    </div>
  );
};
