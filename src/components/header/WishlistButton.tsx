
import { useState, useEffect } from "react";
import { Heart, X } from "lucide-react";
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

export type WishlistItem = {
  id: number;
  name: string;
  price: number | string;
  image: string;
  type?: string; // Make type optional
};

const defaultWishlistItems: WishlistItem[] = [
  {
    id: 1,
    name: "Premium Headphones",
    price: "$299.99",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
];

// Get wishlist from localStorage or use default
const getInitialWishlist = (): WishlistItem[] => {
  const savedWishlist = localStorage.getItem('wishlist');
  return savedWishlist ? JSON.parse(savedWishlist) : defaultWishlistItems;
};

// Create a global wishlist state that can be imported by other components
let globalWishlistItems: WishlistItem[] = getInitialWishlist();
let wishlistUpdateListeners: Function[] = [];

export const addToWishlist = (product: {
  name: string;
  price: number | string;
  image: string;
  type?: string; // Make type optional
}) => {
  const existingItem = globalWishlistItems.find(item => item.name === product.name);
  
  if (!existingItem) {
    const newItem: WishlistItem = {
      id: Date.now(),
      name: product.name,
      price: product.price,
      image: product.image,
      type: product.type
    };
    globalWishlistItems = [...globalWishlistItems, newItem];
    
    // Save to localStorage and notify listeners
    localStorage.setItem('wishlist', JSON.stringify(globalWishlistItems));
    wishlistUpdateListeners.forEach(listener => listener(globalWishlistItems));
  }
  
  return globalWishlistItems;
};

export const removeFromWishlist = (id: number) => {
  globalWishlistItems = globalWishlistItems.filter(item => item.id !== id);
  localStorage.setItem('wishlist', JSON.stringify(globalWishlistItems));
  wishlistUpdateListeners.forEach(listener => listener(globalWishlistItems));
  return globalWishlistItems;
};

export const isInWishlist = (productName: string): boolean => {
  return globalWishlistItems.some(item => item.name === productName);
};

export const WishlistButton = () => {
  const { toast } = useToast();
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(getInitialWishlist());
  const wishlistCount = wishlistItems.length;

  // Subscribe to wishlist updates
  useEffect(() => {
    const updateWishlist = (newWishlist: WishlistItem[]) => {
      setWishlistItems([...newWishlist]);
    };
    
    wishlistUpdateListeners.push(updateWishlist);
    return () => {
      wishlistUpdateListeners = wishlistUpdateListeners.filter(listener => listener !== updateWishlist);
    };
  }, []);

  const handleRemoveItem = (id: number) => {
    removeFromWishlist(id);
    toast({
      title: "Removed from wishlist",
      description: "The item has been removed from your wishlist",
      variant: "default",
    });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative" aria-label="Wishlist">
          <Heart className="h-5 w-5" />
          {wishlistCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {wishlistCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Wishlist</SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-6">
          {wishlistItems.length > 0 ? (
            wishlistItems.map((item) => (
              <div key={item.id} className="flex gap-4 items-start">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{typeof item.price === 'number' ? `$${item.price.toFixed(2)}` : item.price}</p>
                  <div className="flex gap-2 mt-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        const product = {
                          name: item.name,
                          price: typeof item.price === 'string' ? parseFloat(item.price.replace('$', '')) : item.price,
                          image: item.image,
                          quantity: 1
                        };
                        
                        import("./CartMenu").then(({ addToCart }) => {
                          addToCart(product);
                          toast({
                            title: "Added to cart",
                            description: `${item.name} has been added to your cart.`,
                          });
                        });
                      }}
                    >
                      Add to Cart
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/30"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <X className="h-4 w-4 mr-1" />
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 dark:text-gray-400 py-8">
              <Heart className="h-12 w-12 mx-auto mb-4 opacity-20" />
              <p>Your wishlist is empty</p>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
