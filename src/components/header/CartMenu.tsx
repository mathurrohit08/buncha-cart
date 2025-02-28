
import { useState } from "react";
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

// Mock cart data - in a real app, this would come from a state management solution
const initialCartItems = [
  {
    id: 1,
    name: "Premium Headphones",
    price: 299.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 2,
    name: "Wireless Speaker",
    price: 199.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
];

export const CartMenu = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState(initialCartItems);
  
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const updateQuantity = (id: number, change: number) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === id 
          ? { 
              ...item, 
              quantity: Math.max(1, item.quantity + change) // Ensure quantity doesn't go below 1
            } 
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart",
      variant: "default",
    });
  };

  return (
    <HoverCard openDelay={0} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Button variant="ghost" size="icon" className="relative" aria-label="Cart">
          <ShoppingCart className="h-5 w-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent 
        className="w-80 p-4 bg-white dark:bg-gray-800 border dark:border-gray-700" 
        align="end"
        sideOffset={8}
      >
        <div className="space-y-4">
          <h3 className="font-semibold dark:text-white">Your Cart</h3>
          {cartItems.length > 0 ? (
            <>
              <div className="max-h-[240px] overflow-y-auto space-y-4 pr-1">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium dark:text-white truncate">{item.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">${(item.price * item.quantity).toFixed(2)}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-6 w-6"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm">{item.quantity}</span>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-6 w-6"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-6 w-6 ml-auto text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/30"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t dark:border-gray-700 pt-4">
                <div className="flex justify-between mb-4">
                  <span className="font-medium dark:text-white">Total</span>
                  <span className="font-medium dark:text-white">${cartTotal.toFixed(2)}</span>
                </div>
                <Button className="w-full" onClick={handleCheckout}>Checkout</Button>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400 py-4">
              Your cart is empty
            </p>
          )}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
