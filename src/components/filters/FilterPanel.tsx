
import { Accordion } from "@/components/ui/accordion";
import { 
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { PriceRangeFilter } from "./PriceRangeFilter";
import { RatingFilter } from "./RatingFilter";
import { AvailabilityFilter } from "./AvailabilityFilter";
import { AttributeFilter } from "./AttributeFilter";
import { ActionButtons } from "./ActionButtons";

interface FilterPanelProps {
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
  brands?: string[];
  selectedBrands?: string[];
  setSelectedBrands?: (brands: string[]) => void;
  features?: string[];
  selectedFeatures?: string[];
  setSelectedFeatures?: (features: string[]) => void;
  title?: string;
}

export const FilterPanel = ({
  priceRange,
  setPriceRange,
  maxPrice,
  selectedRating,
  setSelectedRating,
  showInStock,
  setShowInStock,
  showOnSale,
  setShowOnSale,
  showNew,
  setShowNew,
  showBestSellers,
  setShowBestSellers,
  applyFilters,
  resetFilters,
  brands = [],
  selectedBrands = [],
  setSelectedBrands = () => {},
  features = [],
  selectedFeatures = [],
  setSelectedFeatures = () => {},
  title = "Filters"
}: FilterPanelProps) => {
  const isMobile = useIsMobile();

  const FilterContent = () => (
    <div className="space-y-6">
      <Accordion type="multiple" className="w-full" defaultValue={["price", "rating"]}>
        <PriceRangeFilter 
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          maxPrice={maxPrice}
        />
        
        <RatingFilter 
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
        />
        
        <AvailabilityFilter 
          showInStock={showInStock}
          setShowInStock={setShowInStock}
          showOnSale={showOnSale}
          setShowOnSale={setShowOnSale}
          showNew={showNew}
          setShowNew={setShowNew}
          showBestSellers={showBestSellers}
          setShowBestSellers={setShowBestSellers}
        />
        
        <AttributeFilter 
          title="Brands"
          accordionValue="brands"
          items={brands}
          selectedItems={selectedBrands}
          setSelectedItems={setSelectedBrands}
        />
        
        <AttributeFilter 
          title="Features"
          accordionValue="features"
          items={features}
          selectedItems={selectedFeatures}
          setSelectedItems={setSelectedFeatures}
        />
      </Accordion>

      <ActionButtons 
        applyFilters={applyFilters}
        resetFilters={resetFilters}
      />
    </div>
  );

  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="sm" className="flex items-center">
            <Filter className="h-4 w-4 mr-2" />
            {title}
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{title}</SheetTitle>
            <SheetDescription>
              Fine-tune your product search
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <FilterContent />
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  // Desktop view
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm sticky top-24">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <FilterContent />
    </div>
  );
};
