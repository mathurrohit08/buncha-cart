
import { ShoppingCart } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";

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
  const cartCount = cartItems.length;
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <HoverCard openDelay={0} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80" align="end">
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h4 className="text-sm font-medium">{item.name}</h4>
                <p className="text-sm text-gray-500">${item.price}</p>
              </div>
            </div>
          ))}
          <div className="border-t pt-4">
            <div className="flex justify-between mb-4">
              <span className="font-medium">Total</span>
              <span className="font-medium">${cartTotal.toFixed(2)}</span>
            </div>
            <Button className="w-full">Checkout</Button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
