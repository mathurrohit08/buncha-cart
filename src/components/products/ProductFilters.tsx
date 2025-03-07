
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Filter, X, LayoutGrid, Columns, Rows, LayoutList } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-mobile";

// Define types
export interface FilterOptions {
  priceRange: [number, number];
  categories: string[];
  productTypes: string[];
  viewMode: number; // 1-5 products per row
}

interface ProductFiltersProps {
  availableCategories: { id: string | number; name: string }[];
  availableProductTypes: { name: string }[];
  filterOptions: FilterOptions;
  setFilterOptions: React.Dispatch<React.SetStateAction<FilterOptions>>;
  minPrice: number;
  maxPrice: number;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  availableCategories,
  availableProductTypes,
  filterOptions,
  setFilterOptions,
  minPrice,
  maxPrice,
}) => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handlePriceChange = (value: number[]) => {
    setFilterOptions(prev => ({
      ...prev,
      priceRange: [value[0], value[1]] as [number, number]
    }));
  };

  const toggleCategory = (category: string) => {
    setFilterOptions(prev => {
      const currentCategories = [...prev.categories];
      if (currentCategories.includes(category)) {
        return {
          ...prev,
          categories: currentCategories.filter(c => c !== category)
        };
      } else {
        return {
          ...prev,
          categories: [...currentCategories, category]
        };
      }
    });
  };

  const toggleProductType = (type: string) => {
    setFilterOptions(prev => {
      const currentTypes = [...prev.productTypes];
      if (currentTypes.includes(type)) {
        return {
          ...prev,
          productTypes: currentTypes.filter(t => t !== type)
        };
      } else {
        return {
          ...prev,
          productTypes: [...currentTypes, type]
        };
      }
    });
  };

  const setViewMode = (mode: number) => {
    setFilterOptions(prev => ({
      ...prev,
      viewMode: mode
    }));
  };

  const clearFilters = () => {
    setFilterOptions({
      priceRange: [minPrice, maxPrice],
      categories: [],
      productTypes: [],
      viewMode: filterOptions.viewMode
    });
  };

  const filterContent = (
    <div className="space-y-6">
      {/* Price Range Filter */}
      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium dark:text-white">Price Range</h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            ${filterOptions.priceRange[0].toFixed(0)} - ${filterOptions.priceRange[1].toFixed(0)}
          </span>
        </div>
        <div className="mt-4 px-2">
          <Slider
            defaultValue={[filterOptions.priceRange[0], filterOptions.priceRange[1]]}
            max={maxPrice}
            min={minPrice}
            step={10}
            value={[filterOptions.priceRange[0], filterOptions.priceRange[1]]}
            onValueChange={handlePriceChange}
            className="mt-2"
          />
          <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
            <span>${minPrice}</span>
            <span>${maxPrice}</span>
          </div>
        </div>
      </div>

      <Separator />

      {/* Categories Filter */}
      <div>
        <h3 className="text-lg font-medium mb-3 dark:text-white">Categories</h3>
        <div className="space-y-2">
          {availableCategories.map((category) => (
            <div key={category.id} className="flex items-center">
              <Checkbox
                id={`category-${category.id}`}
                checked={filterOptions.categories.includes(category.name)}
                onCheckedChange={() => toggleCategory(category.name)}
                className="mr-2"
              />
              <Label htmlFor={`category-${category.id}`} className="text-sm cursor-pointer">
                {category.name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Product Types Filter */}
      <div>
        <h3 className="text-lg font-medium mb-3 dark:text-white">Product Types</h3>
        <div className="space-y-2">
          {availableProductTypes.map((type, index) => (
            <div key={index} className="flex items-center">
              <Checkbox
                id={`type-${index}`}
                checked={filterOptions.productTypes.includes(type.name)}
                onCheckedChange={() => toggleProductType(type.name)}
                className="mr-2"
              />
              <Label htmlFor={`type-${index}`} className="text-sm cursor-pointer">
                {type.name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Clear Filters */}
      <Button variant="outline" size="sm" onClick={clearFilters} className="w-full">
        Clear All Filters
      </Button>
    </div>
  );

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          {isMobile && (
            <Button
              variant="outline"
              size="sm"
              className="mr-3"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
            >
              {showMobileFilters ? <X className="h-4 w-4 mr-2" /> : <Filter className="h-4 w-4 mr-2" />}
              {showMobileFilters ? "Close" : "Filters"}
            </Button>
          )}
          <h2 className="text-xl font-bold dark:text-white">Products</h2>
        </div>

        {/* View Mode Controls */}
        <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 p-1 rounded-lg border border-gray-200 dark:border-gray-700">
          <Button
            variant={filterOptions.viewMode === 1 ? "default" : "ghost"}
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => setViewMode(1)}
            aria-label="1 product per row"
          >
            <Rows className="h-4 w-4" />
          </Button>
          <Button
            variant={filterOptions.viewMode === 2 ? "default" : "ghost"}
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => setViewMode(2)}
            aria-label="2 products per row"
          >
            <Columns className="h-4 w-4" />
          </Button>
          <Button
            variant={filterOptions.viewMode === 3 ? "default" : "ghost"}
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => setViewMode(3)}
            aria-label="3 products per row"
          >
            <LayoutList className="h-4 w-4" />
          </Button>
          <Button
            variant={filterOptions.viewMode === 4 ? "default" : "ghost"}
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => setViewMode(4)}
            aria-label="4 products per row"
          >
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button
            variant={filterOptions.viewMode === 5 ? "default" : "ghost"}
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => setViewMode(5)}
            aria-label="5 products per row"
          >
            <LayoutGrid className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile Filters */}
        {isMobile && showMobileFilters && (
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 mb-4">
            {filterContent}
          </div>
        )}

        {/* Desktop Filters */}
        {!isMobile && (
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 sticky top-24">
              {filterContent}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
