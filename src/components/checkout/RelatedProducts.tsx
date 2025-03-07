
import React from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface RelatedProduct {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface RelatedProductsProps {
  products: RelatedProduct[];
  handleAddToCart: (product: RelatedProduct) => void;
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ({ products, handleAddToCart }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-md p-3 flex flex-col items-center">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-24 h-24 object-cover rounded mb-2"
            />
            <h3 className="font-medium text-sm mb-1 dark:text-white">{product.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">${product.price.toFixed(2)}</p>
            <Button 
              size="sm" 
              variant="outline" 
              className="w-full"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
