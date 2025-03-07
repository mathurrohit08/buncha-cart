
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ArrowRight } from "lucide-react";

export const EmptyCart = () => {
  return (
    <div className="text-center p-8 max-w-md mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <ShoppingBag className="h-16 w-16 mx-auto text-gray-400 mb-4" />
        <h1 className="text-2xl font-bold mb-2 dark:text-white">Your cart is empty</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Link to="/all-products">
          <Button className="w-full">
            <ArrowRight className="mr-2 h-4 w-4" />
            Browse Products
          </Button>
        </Link>
      </div>
    </div>
  );
};
