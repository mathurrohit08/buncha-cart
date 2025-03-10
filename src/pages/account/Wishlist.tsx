
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, ShoppingCart, Trash2, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

// Mock wishlist data
const initialWishlistItems = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: "$129.99",
    originalPrice: "$149.99",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&h=300",
    inStock: true
  },
  {
    id: 2,
    name: "Smart Watch with Health Tracking",
    price: "$89.99",
    originalPrice: "$99.99",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=300&h=300",
    inStock: true
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker",
    price: "$59.99",
    originalPrice: "$79.99",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=300&h=300",
    inStock: false
  }
];

const Wishlist = () => {
  const { toast } = useToast();
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);
  
  const handleRemoveItem = (id: number) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "Item has been removed from your wishlist.",
    });
  };
  
  const handleAddToCart = (item: any) => {
    // In a real app, you would add to cart here
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    });
  };
  
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>My Wishlist</CardTitle>
          <CardDescription>
            {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved for later
          </CardDescription>
        </CardHeader>
        
        {wishlistItems.length === 0 ? (
          <CardContent>
            <div className="text-center py-12">
              <Heart className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium">Your wishlist is empty</h3>
              <p className="text-gray-500 mt-2">Save items you love for later.</p>
              <Button className="mt-6">
                Explore Products
              </Button>
            </div>
          </CardContent>
        ) : (
          <CardContent>
            <div className="space-y-4">
              {wishlistItems.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 relative">
                  <button 
                    className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"
                    onClick={() => handleRemoveItem(item.id)}
                    aria-label="Remove item"
                  >
                    <X className="h-5 w-5" />
                  </button>
                  
                  <div className="flex-shrink-0 w-full sm:w-24 h-24 mb-4 sm:mb-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="h-full w-full object-cover rounded"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&h=300";
                      }}
                    />
                  </div>
                  
                  <div className="flex-1 sm:ml-4 flex flex-col">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <div className="flex items-center mt-1">
                          <span className="font-bold text-lg">{item.price}</span>
                          {item.originalPrice && (
                            <span className="ml-2 text-sm text-gray-500 line-through">{item.originalPrice}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-auto pt-3 flex flex-wrap gap-2">
                      <Button 
                        variant={item.inStock ? "default" : "outline"} 
                        size="sm"
                        disabled={!item.inStock}
                        className="flex-1 sm:flex-none"
                        onClick={() => handleAddToCart(item)}
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        {item.inStock ? "Add to Cart" : "Out of Stock"}
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex-1 sm:flex-none"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default Wishlist;
