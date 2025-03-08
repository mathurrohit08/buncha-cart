
import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, Star, Filter, ChevronDown, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { addToCart } from "@/components/header/CartMenu";
import { addToWishlist, isInWishlist } from "@/components/header/WishlistButton";
import { useToast } from "@/hooks/use-toast";
import { CategoryProduct } from "@/utils/categoryProductsData";
import { useIsMobile } from "@/hooks/use-mobile";

export interface CategoryPageProps {
  categoryName: string;
  products: CategoryProduct[];
  bannerImage: string;
}

const ProductCard = ({ product }: { product: CategoryProduct }) => {
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart({
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleAddToWishlist = () => {
    addToWishlist({
      name: product.name,
      price: `$${product.price.toFixed(2)}`,
      image: product.image
    });
    
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="relative h-48 sm:h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=350";
          }}
        />
        {product.bestSeller && (
          <Badge className="absolute top-2 left-2 bg-amber-500">Best Seller</Badge>
        )}
        {product.new && (
          <Badge className="absolute top-2 left-2 bg-blue-500">New</Badge>
        )}
        {product.sale && (
          <Badge className="absolute top-2 left-2 bg-red-500">Sale {product.discount}%</Badge>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 rounded-full"
          onClick={handleAddToWishlist}
        >
          <Heart
            className={`h-5 w-5 ${
              isInWishlist(product.name) ? 'fill-red-500 text-red-500' : 'text-gray-600 dark:text-gray-300'
            }`}
          />
        </Button>
      </div>
      <div className="p-4">
        <Link to={`#`} className="block">
          <h3 className="font-medium text-lg text-gray-900 dark:text-white mb-1 hover:text-purple-700 dark:hover:text-purple-400 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center my-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : i < product.rating
                    ? 'fill-yellow-400 text-yellow-400 fill-[50%]'
                    : 'text-gray-300 dark:text-gray-600'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
            ({product.reviews})
          </span>
        </div>
        <div className="flex flex-col mt-2 space-y-2">
          <div className="flex items-center justify-between">
            {product.sale ? (
              <div className="flex items-center space-x-2">
                <span className="font-medium text-lg text-gray-900 dark:text-white">
                  ${(product.price * (1 - product.discount! / 100)).toFixed(2)}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="font-medium text-lg text-gray-900 dark:text-white">
                ${product.price.toFixed(2)}
              </span>
            )}
            {product.inStock ? (
              <span className="text-xs text-green-600 dark:text-green-400 flex items-center">
                <Check className="h-3 w-3 mr-1" /> In Stock
              </span>
            ) : (
              <span className="text-xs text-red-600 dark:text-red-400">Out of Stock</span>
            )}
          </div>
          <Button
            onClick={handleAddToCart}
            className="w-full"
            size="sm"
            disabled={!product.inStock}
          >
            <ShoppingCart className="h-4 w-4 mr-1" /> Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export const CategoryPageTemplate = ({ categoryName, products, bannerImage }: CategoryPageProps) => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  // Filter state
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [showInStock, setShowInStock] = useState(false);
  const [showOnSale, setShowOnSale] = useState(false);
  const [sortOption, setSortOption] = useState("featured");

  // Calculate max price for slider
  const maxPrice = Math.max(...products.map(p => p.price)) + 50;
  
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
    setSortOption("featured");
    setFilteredProducts(products);
    
    toast({
      title: "Filters reset",
      description: `Showing all ${products.length} products`
    });
  };

  const FilterPanel = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-3">Price Range</h3>
        <div className="px-2">
          <Slider
            defaultValue={priceRange}
            max={maxPrice}
            step={10}
            value={priceRange}
            onValueChange={setPriceRange}
            className="mb-2"
          />
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-3">Rating</h3>
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
      </div>

      <div className="space-y-2">
        <h3 className="font-medium mb-3">Availability</h3>
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
      </div>

      <div className="pt-4 space-y-2">
        <Button onClick={applyFilters} className="w-full">Apply Filters</Button>
        <Button variant="outline" onClick={resetFilters} className="w-full">Reset</Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="pt-16 pb-16">
        {/* Banner */}
        <div className="relative h-[200px] md:h-[300px]">
          <img
            src={bannerImage}
            alt={categoryName}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=350";
            }}
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
                      <FilterPanel />
                    </div>
                  </SheetContent>
                </Sheet>
              )}
              
              <div className="relative">
                <select
                  value={sortOption}
                  onChange={(e) => {
                    setSortOption(e.target.value);
                    // Apply filter automatically when sort changes
                    setTimeout(() => applyFilters(), 10);
                  }}
                  className="appearance-none pl-3 pr-8 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-sm"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                  <option value="rating">Highest Rated</option>
                  <option value="bestselling">Best Selling</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Filter sidebar for desktop */}
            {!isMobile && (
              <div className="w-full md:w-64 flex-shrink-0">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm sticky top-24">
                  <h2 className="text-lg font-semibold mb-4">Filters</h2>
                  <FilterPanel />
                </div>
              </div>
            )}

            {/* Products grid */}
            <div className="flex-grow">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
