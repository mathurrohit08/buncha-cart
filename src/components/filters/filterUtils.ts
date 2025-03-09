
import { useState } from "react";

export interface PriceRangeHookProps {
  initialRange: [number, number];
  onRangeChange: (range: [number, number]) => void;
}

export const usePriceRangeSlider = ({ initialRange, onRangeChange }: PriceRangeHookProps) => {
  const [priceValues, setPriceValues] = useState<[number, number]>(initialRange);

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
    onRangeChange(priceValues);
  };

  return {
    priceValues,
    handlePriceChange,
    handlePriceChangeEnd,
  };
};
