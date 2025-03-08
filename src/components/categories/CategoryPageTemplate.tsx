
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Filter, ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";
import { CategoryProduct } from "@/utils/categoryProductsData";
import { useIsMobile } from "@/hooks/use-mobile";
import { ProductCard } from "./ProductCard";
import { ViewOptionsMenu } from "./ViewOptionsMenu";
import { SortOptionsMenu } from "./SortOptionsMenu";
import { ProductFiltersSidebar } from "./ProductFiltersSidebar";
import { useProductImage } from "@/hooks/use-product-image";

export interface CategoryPageProps {
  categoryName: string;
  products: CategoryProduct[];
  bannerImage: string;
}

export const CategoryPageTemplate = ({ categoryName, products, bannerImage }: CategoryPageProps) => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const { imgSrc: bannerSrc } = useProductImage(bannerImage);
  
  // Filter state
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [showInStock, setShowInStock] = useState(false);
  const [showOnSale, setShowOnSale] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showBestSellers, setShowBestSellers] = useState(false);
  const [sortOption, setSortOption] = useState("featured");
  const [viewMode, setViewMode] = useState(isMobile ? 2 : 4);

  // Calculate max price for slider
  const maxPrice = Math.max(...products.map(p => p.price)) + 50;
  
  useEffect(() => {
    if (products.length > 0) {
      setPriceRange([0, maxPrice]);
    }
  }, [products, maxPrice]);
  
  const applyFilters = () => {
    let result = [...products];
    
    // Filter by price range
    result = result.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Filter by rating
    if (selectedRating !== null) {
      result = result.filter((product) => product.rating >= selectedRating);
    }
    
    // Filter by stock
    if (showInStock) {
      result = result.filter((product) => product.inStock);
    }
    
    // Filter by sale
    if (showOnSale) {
      result = result.filter((product) => product.sale);
    }
    
    // Filter by new
    if (showNew) {
      result = result.filter((product) => product.new);
    }
    
    // Filter by best sellers
    if (showBestSellers) {
      result = result.filter((product) => product.bestSeller);
    }
    
    // Apply sorting
    switch (sortOption) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.sort((a, b) => (a.new === b.new ? 0 : a.new ? -1 : 1));
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "bestselling":
        result.sort((a, b) => (a.bestSeller === b.bestSeller ? 0 : a.bestSeller ? -1 : 1));
        break;
      default: // featured - no need to sort
        break;
    }
    
    setFilteredProducts(result);
    
    if (isMobile) {
      // Close sheet on mobile after applying filters
      const closeButton = document.querySelector('[data-sheet-close]') as HTMLElement;
      if (closeButton) closeButton.click();
    }
    
    toast({
      title: "Filters applied",
      description: `Showing ${result.length} of ${products.length} products`
    });
  };
  
  const resetFilters = () => {
    setPriceRange([0, maxPrice]);
    setSelectedRating(null);
    setShowInStock(false);
    setShowOnSale(false);
    setShowNew(false);
    setShowBestSellers(false);
    setSortOption("featured");
    setFilteredProducts(products);
    
    toast({
      title: "Filters reset",
      description: `Showing all ${products.length} products`
    });
  };

  // Function to determine grid columns based on view mode
  const getGridCols = () => {
    if (isMobile) {
      return viewMode === 1 ? "grid-cols-1" : "grid-cols-2";
    }
    
    switch (viewMode) {
      case 1: return "grid-cols-1";
      case 2: return "sm:grid-cols-2";
      case 3: return "sm:grid-cols-2 lg:grid-cols-3";
      case 4: return "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
      case 5: return "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5";
      default: return "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="pt-16 pb-16">
        {/* Banner */}
        <div className="relative h-[200px] md:h-[300px]">
          <img
            src={bannerSrc}
            alt={categoryName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white">{categoryName}</h1>
              <p className="text-white/80 mt-2 max-w-lg mx-auto px-4">
                Explore our curated collection of premium {categoryName.toLowerCase()} products designed to enhance your lifestyle.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Sorting and filtering controls */}
          <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
            <div className="flex items-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mr-2">
                Showing <span className="font-medium">{filteredProducts.length}</span> products
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              {isMobile && (
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Filter className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Filter Products</SheetTitle>
                      <SheetDescription>
                        Narrow down your search with these filters
                      </SheetDescription>
                    </SheetHeader>
                    <div className="py-4">
                      <ProductFiltersSidebar
                        priceRange={priceRange}
                        setPriceRange={setPriceRange}
                        maxPrice={maxPrice}
                        selectedRating={selectedRating}
                        setSelectedRating={setSelectedRating}
                        showInStock={showInStock}
                        setShowInStock={setShowInStock}
                        showOnSale={showOnSale}
                        setShowOnSale={setShowOnSale}
                        showNew={showNew}
                        setShowNew={setShowNew}
                        showBestSellers={showBestSellers}
                        setShowBestSellers={setShowBestSellers}
                        applyFilters={applyFilters}
                        resetFilters={resetFilters}
                      />
                    </div>
                  </SheetContent>
                </Sheet>
              )}
              
              <ViewOptionsMenu viewMode={viewMode} setViewMode={setViewMode} />
              <SortOptionsMenu sortOption={sortOption} setSortOption={(option) => {
                setSortOption(option);
                // Apply filter automatically when sort changes
                setTimeout(() => applyFilters(), 10);
              }} />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Filter sidebar for desktop */}
            {!isMobile && (
              <div className="w-full md:w-64 flex-shrink-0">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm sticky top-24">
                  <h2 className="text-lg font-semibold mb-4">Filters</h2>
                  <ProductFiltersSidebar
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    maxPrice={maxPrice}
                    selectedRating={selectedRating}
                    setSelectedRating={setSelectedRating}
                    showInStock={showInStock}
                    setShowInStock={setShowInStock}
                    showOnSale={showOnSale}
                    setShowOnSale={setShowOnSale}
                    showNew={showNew}
                    setShowNew={setShowNew}
                    showBestSellers={showBestSellers}
                    setShowBestSellers={setShowBestSellers}
                    applyFilters={applyFilters}
                    resetFilters={resetFilters}
                  />
                </div>
              </div>
            )}

            {/* Products grid */}
            <div className="flex-grow">
              {filteredProducts.length > 0 ? (
                <div className={`grid ${getGridCols()} gap-6`}>
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
                  <X className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No products found</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Try adjusting your filters or search criteria.
                  </p>
                  <Button variant="outline" onClick={resetFilters}>
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
