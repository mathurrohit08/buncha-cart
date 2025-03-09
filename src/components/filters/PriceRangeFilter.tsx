
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { usePriceRangeSlider } from "./filterUtils";

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
  );
};
