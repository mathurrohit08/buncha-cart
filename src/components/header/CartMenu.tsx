
import { ShoppingCart } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const cartItems = [
  {
    id: 1,
    name: "Premium Headphones",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 2,
    name: "Wireless Speaker",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
];

export const CartMenu = () => {
  const navigate = useNavigate();
  const cartCount = cartItems.length;
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    navigate("/checkout");
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
      >
        <div className="space-y-4">
          <h3 className="font-semibold dark:text-white">Your Cart</h3>
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium dark:text-white">{item.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">${item.price}</p>
                  </div>
                </div>
              ))}
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
