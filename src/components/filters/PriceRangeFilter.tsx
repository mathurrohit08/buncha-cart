
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { usePriceRangeSlider } from "./filterUtils";
import { DollarSign } from "lucide-react";

interface PriceRangeFilterProps {
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  maxPrice: number;
}

export const PriceRangeFilter = ({
  priceRange,
  setPriceRange,
  maxPrice
}: PriceRangeFilterProps) => {
  const { priceValues, handlePriceChange, handlePriceChangeEnd } = usePriceRangeSlider({
    initialRange: priceRange,
    onRangeChange: setPriceRange
  });

  return (
    <AccordionItem value="price">
      <AccordionTrigger className="text-base font-medium">
        <div className="flex items-center">
          <DollarSign className="h-4 w-4 mr-2 text-purple-600 dark:text-purple-400" />
          Price Range
        </div>
      </AccordionTrigger>
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
          <div className="flex justify-between">
            <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded px-2 py-1 text-sm text-gray-700 dark:text-gray-300">
              <span>${priceValues[0]}</span>
            </div>
            <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded px-2 py-1 text-sm text-gray-700 dark:text-gray-300">
              <span>${priceValues[1]}</span>
            </div>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
