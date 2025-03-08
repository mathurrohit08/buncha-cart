
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Star, ChevronDown } from "lucide-react";

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

export const ProductFiltersSidebar = ({
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
}: ProductFiltersSidebarProps) => {
  const [priceValues, setPriceValues] = useState<[number, number]>(priceRange);

  // Handle price change with smoother update
  const handlePriceChange = (value: number[]) => {
    // Ensure we always have exactly two values
    const newPriceRange: [number, number] = [
      value[0] ?? priceValues[0], 
      value[1] ?? priceValues[1]
    ];
    setPriceValues(newPriceRange);
  };

  // Only update the parent state when slider interaction ends
  const handlePriceChangeEnd = () => {
    setPriceRange(priceValues);
  };

  return (
    <div className="space-y-6">
      <Accordion type="multiple" className="w-full" defaultValue={["price", "rating"]}>
        <AccordionItem value="price">
          <AccordionTrigger className="text-base font-medium">Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="px-2 pt-2">
              <Slider
                defaultValue={priceRange}
                max={maxPrice}
                step={10}
                value={priceValues}
                onValueChange={handlePriceChange}
                onValueCommit={handlePriceChangeEnd}
                className="mb-4"
              />
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                <span>${priceValues[0]}</span>
                <span>${priceValues[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="rating">
          <AccordionTrigger className="text-base font-medium">Rating</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-1">
              {[4, 3, 2, 1].map((rating) => (
                <div 
                  key={rating} 
                  className={`flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    selectedRating === rating ? 'bg-gray-100 dark:bg-gray-700' : ''
                  }`}
                  onClick={() => setSelectedRating(selectedRating === rating ? null : rating)}
                >
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 dark:text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm">{rating}+ stars</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="availability">
          <AccordionTrigger className="text-base font-medium">Availability</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="in-stock" 
                  checked={showInStock} 
                  onCheckedChange={(checked) => setShowInStock(checked as boolean)} 
                />
                <label htmlFor="in-stock" className="text-sm cursor-pointer">In Stock Only</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="on-sale" 
                  checked={showOnSale} 
                  onCheckedChange={(checked) => setShowOnSale(checked as boolean)} 
                />
                <label htmlFor="on-sale" className="text-sm cursor-pointer">On Sale</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="new-arrivals" 
                  checked={showNew} 
                  onCheckedChange={(checked) => setShowNew(checked as boolean)} 
                />
                <label htmlFor="new-arrivals" className="text-sm cursor-pointer">New Arrivals</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="best-sellers" 
                  checked={showBestSellers} 
                  onCheckedChange={(checked) => setShowBestSellers(checked as boolean)} 
                />
                <label htmlFor="best-sellers" className="text-sm cursor-pointer">Best Sellers</label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {brands.length > 0 && (
          <AccordionItem value="brands">
            <AccordionTrigger className="text-base font-medium">Brands</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-2 scrollbar-thin">
                {brands.map((brand) => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`brand-${brand}`} 
                      checked={selectedBrands.includes(brand)} 
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedBrands([...selectedBrands, brand]);
                        } else {
                          setSelectedBrands(selectedBrands.filter(b => b !== brand));
                        }
                      }} 
                    />
                    <label htmlFor={`brand-${brand}`} className="text-sm cursor-pointer">{brand}</label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        )}

        {features.length > 0 && (
          <AccordionItem value="features">
            <AccordionTrigger className="text-base font-medium">Features</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-2 scrollbar-thin">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`feature-${feature}`} 
                      checked={selectedFeatures.includes(feature)} 
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedFeatures([...selectedFeatures, feature]);
                        } else {
                          setSelectedFeatures(selectedFeatures.filter(f => f !== feature));
                        }
                      }} 
                    />
                    <label htmlFor={`feature-${feature}`} className="text-sm cursor-pointer">{feature}</label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        )}
      </Accordion>

      <div className="pt-4 space-y-2">
        <Button onClick={applyFilters} className="w-full">Apply Filters</Button>
        <Button variant="outline" onClick={resetFilters} className="w-full">Reset</Button>
      </div>
    </div>
  );
};
