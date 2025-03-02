
import { useState, useEffect } from "react";
import { ArrowLeftRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";

export type CompareItem = {
  id: number;
  name: string;
  price: number | string;
  image: string;
  specs?: string[];
};

// Get compare from localStorage or use empty array
const getInitialCompare = (): CompareItem[] => {
  const savedCompare = localStorage.getItem('compare');
  return savedCompare ? JSON.parse(savedCompare) : [];
};

// Create a global compare state that can be imported by other components
let globalCompareItems: CompareItem[] = getInitialCompare();
let compareUpdateListeners: Function[] = [];

export const addToCompare = (product: {
  name: string;
  price: number | string;
  image: string;
  specs?: string[];
}) => {
  if (globalCompareItems.length >= 4) {
    // Limit to 4 items for comparison
    return false;
  }
  
  const existingItem = globalCompareItems.find(item => item.name === product.name);
  
  if (!existingItem) {
    const newItem: CompareItem = {
      id: Date.now(),
      name: product.name,
      price: product.price,
      image: product.image,
      specs: product.specs
    };
    globalCompareItems = [...globalCompareItems, newItem];
    
    // Save to localStorage and notify listeners
    localStorage.setItem('compare', JSON.stringify(globalCompareItems));
    compareUpdateListeners.forEach(listener => listener(globalCompareItems));
  }
  
  return true;
};

export const removeFromCompare = (id: number) => {
  globalCompareItems = globalCompareItems.filter(item => item.id !== id);
  localStorage.setItem('compare', JSON.stringify(globalCompareItems));
  compareUpdateListeners.forEach(listener => listener(globalCompareItems));
  return globalCompareItems;
};

export const isInCompare = (productName: string): boolean => {
  return globalCompareItems.some(item => item.name === productName);
};

export const clearCompare = () => {
  globalCompareItems = [];
  localStorage.setItem('compare', JSON.stringify(globalCompareItems));
  compareUpdateListeners.forEach(listener => listener(globalCompareItems));
  return globalCompareItems;
};

export const CompareButton = () => {
  const { toast } = useToast();
  const [compareItems, setCompareItems] = useState<CompareItem[]>(getInitialCompare());
  const compareCount = compareItems.length;

  // Subscribe to compare updates
  useEffect(() => {
    const updateCompare = (newCompare: CompareItem[]) => {
      setCompareItems([...newCompare]);
    };
    
    compareUpdateListeners.push(updateCompare);
    return () => {
      compareUpdateListeners = compareUpdateListeners.filter(listener => listener !== updateCompare);
    };
  }, []);

  const handleRemoveItem = (id: number) => {
    removeFromCompare(id);
    toast({
      title: "Removed from comparison",
      description: "The item has been removed from your comparison list",
      variant: "default",
    });
  };

  // Get all specs from all products
  const allSpecs = compareItems.flatMap(item => item.specs || []);
  const uniqueSpecs = [...new Set(allSpecs)];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative" aria-label="Compare">
          <ArrowLeftRight className="h-5 w-5" />
          {compareCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {compareCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-[800px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="flex justify-between items-center">
            <span>Compare Products</span>
            {compareItems.length > 0 && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-red-500 hover:text-red-700 hover:bg-red-50"
                onClick={() => {
                  clearCompare();
                  toast({
                    title: "Comparison cleared",
                    description: "All items have been removed from your comparison list",
                    variant: "default",
                  });
                }}
              >
                Clear All
              </Button>
            )}
          </SheetTitle>
        </SheetHeader>
        
        {compareItems.length > 0 ? (
          <div className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {compareItems.map((item) => (
                <div key={item.id} className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-0 right-0 text-red-500 hover:text-red-700 hover:bg-red-50 h-6 w-6"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  <div className="text-center">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-32 h-32 object-cover rounded-md mx-auto mb-2"
                    />
                    <h3 className="font-medium text-sm">{item.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {typeof item.price === 'number' ? `$${item.price.toFixed(2)}` : item.price}
                    </p>
                  </div>
                </div>
              ))}
              
              {[...Array(4 - compareItems.length)].map((_, index) => (
                <div key={`empty-${index}`} className="border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-md flex items-center justify-center h-[170px]">
                  <p className="text-gray-400 dark:text-gray-600 text-sm text-center px-4">
                    Add another product to compare
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 space-y-6">
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h4 className="font-semibold mb-4">Specifications</h4>
                
                <table className="w-full border-collapse">
                  <tbody>
                    {uniqueSpecs.map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800/50' : ''}>
                        <td className="py-2 px-4 border border-gray-200 dark:border-gray-700 text-sm font-medium">
                          {spec}
                        </td>
                        {compareItems.map((item) => (
                          <td 
                            key={item.id} 
                            className="py-2 px-4 border border-gray-200 dark:border-gray-700 text-sm text-center"
                          >
                            {item.specs?.includes(spec) ? (
                              <span className="text-green-500">✓</span>
                            ) : (
                              <span className="text-red-500">✗</span>
                            )}
                          </td>
                        ))}
                        {[...Array(4 - compareItems.length)].map((_, i) => (
                          <td 
                            key={`empty-spec-${i}`} 
                            className="py-2 px-4 border border-gray-200 dark:border-gray-700"
                          ></td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[400px]">
            <ArrowLeftRight className="h-16 w-16 text-gray-300 dark:text-gray-600 mb-4" />
            <p className="text-gray-500 dark:text-gray-400 text-center max-w-md">
              Add products to compare their features and specifications side by side.
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
