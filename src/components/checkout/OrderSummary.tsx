
import React from "react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Truck } from "lucide-react";
import { CartItemsList } from "./CartItemsList";
import { CartItem } from "@/components/header/CartMenu";
import { ShippingTier } from "@/utils/shippingCalculator";

interface OrderSummaryProps {
  cartItems: CartItem[];
  updateQuantity: (id: number, change: number) => void;
  removeItem: (id: number) => void;
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  selectedShippingTier: ShippingTier | null;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  cartItems,
  updateQuantity,
  removeItem,
  subtotal,
  tax,
  shipping,
  total,
  selectedShippingTier
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-24">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Order Summary</h2>
      
      {cartItems.length > 0 ? (
        <CartItemsList 
          cartItems={cartItems}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
        />
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400 py-6">
          Your cart is empty
        </p>
      )}

      <Separator className="my-4" />

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
          <span className="font-medium dark:text-white">
            ${subtotal.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Shipping</span>
          <span className="font-medium dark:text-white">
            {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Tax</span>
          <span className="font-medium dark:text-white">
            ${tax.toFixed(2)}
          </span>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="flex justify-between text-lg font-bold">
        <span className="dark:text-white">Total</span>
        <span className="dark:text-white">${total.toFixed(2)}</span>
      </div>

      {selectedShippingTier && (
        <div className="mt-6 flex items-center text-sm text-gray-600 dark:text-gray-400">
          <Truck className="h-4 w-4 mr-2" />
          <span>
            {selectedShippingTier.description}
          </span>
        </div>
      )}
      
      <div className="mt-6">
        <Link to="/all-products" className="text-blue-600 hover:underline text-sm flex items-center">
          <ArrowRight className="h-4 w-4 mr-1" /> Continue Shopping
        </Link>
      </div>
    </div>
  );
};
