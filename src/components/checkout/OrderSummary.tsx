
import { useState } from "react";
import { CartItem } from "@/components/header/CartMenu";
import { ShippingTier } from "@/utils/shippingCalculator";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Coupon } from "./ApplyCouponSection";
import { Plus, Minus, Trash2 } from "lucide-react";

interface OrderSummaryProps {
  cartItems: CartItem[];
  updateQuantity: (id: number, change: number) => void;
  removeItem: (id: number) => void;
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  selectedShippingTier: ShippingTier | null;
  appliedCoupon?: Coupon | null;
  discountAmount?: number;
}

export function OrderSummary({
  cartItems,
  updateQuantity,
  removeItem,
  subtotal,
  tax,
  shipping,
  total,
  selectedShippingTier,
  appliedCoupon,
  discountAmount = 0
}: OrderSummaryProps) {
  const [showItems, setShowItems] = useState(true);
  
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700 sticky top-24">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold dark:text-white">Order Summary</h2>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setShowItems(!showItems)}
          className="text-sm"
        >
          {showItems ? "Hide items" : "Show items"} ({cartItems.length})
        </Button>
      </div>
      
      {showItems && (
        <ScrollArea className="h-[240px] pr-4 mb-6">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-sm line-clamp-2 dark:text-white">{item.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-6 w-6 p-0"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="text-sm w-4 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-6 w-6 p-0"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 p-0 ml-auto text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/30"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      )}
      
      <div className="space-y-3 py-4 border-t dark:border-gray-700">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
          <span className="dark:text-white">${subtotal.toFixed(2)}</span>
        </div>
        
        {appliedCoupon && discountAmount > 0 && (
          <div className="flex justify-between text-green-600 dark:text-green-400">
            <span>Discount ({appliedCoupon.code})</span>
            <span>-${discountAmount.toFixed(2)}</span>
          </div>
        )}
        
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Tax</span>
          <span className="dark:text-white">${tax.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Shipping</span>
          <span className="dark:text-white">
            {selectedShippingTier ? `$${shipping.toFixed(2)}` : 'Calculated at checkout'}
          </span>
        </div>
        
        {selectedShippingTier && (
          <div className="text-sm text-gray-500 dark:text-gray-400 pl-4 -mt-1">
            {selectedShippingTier.name} ({selectedShippingTier.deliveryTime})
          </div>
        )}
      </div>
      
      <div className="flex justify-between pt-4 border-t dark:border-gray-700">
        <span className="font-semibold dark:text-white">Total</span>
        <span className="font-semibold text-xl dark:text-white">${total.toFixed(2)}</span>
      </div>
    </div>
  );
}
