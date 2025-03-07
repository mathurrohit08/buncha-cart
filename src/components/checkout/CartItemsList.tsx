
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus, Minus, Trash2 } from "lucide-react";
import { CartItem } from "@/components/header/CartMenu";

interface CartItemsListProps {
  cartItems: CartItem[];
  updateQuantity: (id: number, change: number) => void;
  removeItem: (id: number) => void;
}

export const CartItemsList: React.FC<CartItemsListProps> = ({ 
  cartItems,
  updateQuantity,
  removeItem
}) => {
  return (
    <div className="space-y-4 mb-6 max-h-[50vh] overflow-y-auto pr-2 scrollbar-none">
      {cartItems.map((item) => (
        <div key={item.id} className="flex gap-4">
          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-20 object-cover rounded-md"
          />
          <div className="flex-1">
            <h3 className="font-medium dark:text-white">{item.name}</h3>
            <p className="text-gray-500 dark:text-gray-400 flex items-center gap-2 mt-1">
              <Button 
                variant="outline" 
                size="icon" 
                className="h-6 w-6"
                onClick={() => updateQuantity(item.id, -1)}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span>{item.quantity}</span>
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
            </p>
            <p className="font-medium dark:text-white mt-1">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
