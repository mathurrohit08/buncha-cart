
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X, Plus, Truck } from 'lucide-react';

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface LiveOrderUpdatesProps {
  items: OrderItem[];
  onRemoveItem: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

export const LiveOrderUpdates: React.FC<LiveOrderUpdatesProps> = ({
  items,
  onRemoveItem,
  onUpdateQuantity,
}) => {
  const [animatedItems, setAnimatedItems] = useState<Record<string, 'added' | 'normal' | 'removed'>>({});
  const [estimatedDelivery, setEstimatedDelivery] = useState<string>('');
  
  // Calculate estimated delivery date (3-5 business days from now)
  useEffect(() => {
    const today = new Date();
    const deliveryDate = new Date(today);
    deliveryDate.setDate(today.getDate() + 3 + Math.floor(Math.random() * 3));
    
    // Format the date
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
    setEstimatedDelivery(deliveryDate.toLocaleDateString('en-US', options));
  }, [items]);
  
  // Handle animation states for items
  useEffect(() => {
    const newAnimatedItems: Record<string, 'added' | 'normal' | 'removed'> = {};
    
    // Mark all current items as 'normal' initially
    items.forEach(item => {
      newAnimatedItems[item.id] = animatedItems[item.id] || 'normal';
    });
    
    // Apply animations
    setAnimatedItems(newAnimatedItems);
  }, [items]);
  
  // Function to animate item addition
  const animateAddItem = (id: string) => {
    setAnimatedItems(prev => ({ ...prev, [id]: 'added' }));
    setTimeout(() => {
      setAnimatedItems(prev => ({ ...prev, [id]: 'normal' }));
    }, 1500);
  };
  
  // Function to animate item removal
  const animateRemoveItem = (id: string) => {
    setAnimatedItems(prev => ({ ...prev, [id]: 'removed' }));
    setTimeout(() => {
      onRemoveItem(id);
    }, 500);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <ShoppingCart className="h-5 w-5 text-gray-600 dark:text-gray-300 mr-2" />
          <h3 className="font-medium text-gray-900 dark:text-white">
            Your Order <span className="text-sm text-gray-500 dark:text-gray-400">({totalItems} items)</span>
          </h3>
        </div>
        {estimatedDelivery && (
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Truck className="h-4 w-4 mr-1" />
            <span>Est. Delivery: {estimatedDelivery}</span>
          </div>
        )}
      </div>
      
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <AnimatePresence>
          {items.map(item => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`p-4 flex items-center justify-between live-update-item ${
                animatedItems[item.id] === 'added' ? 'added' : 
                animatedItems[item.id] === 'removed' ? 'removed' : ''
              }`}
            >
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=150&h=150";
                    }}
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">{item.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    ${item.price.toFixed(2)} × {item.quantity}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-md">
                  <button
                    className="w-8 h-8 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => {
                      if (item.quantity > 1) {
                        onUpdateQuantity(item.id, item.quantity - 1);
                      } else {
                        animateRemoveItem(item.id);
                      }
                    }}
                  >
                    -
                  </button>
                  <span className="w-8 h-8 flex items-center justify-center text-gray-900 dark:text-white">
                    {item.quantity}
                  </span>
                  <button
                    className="w-8 h-8 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => {
                      onUpdateQuantity(item.id, item.quantity + 1);
                      animateAddItem(item.id);
                    }}
                  >
                    +
                  </button>
                </div>
                <button
                  className="w-8 h-8 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                  onClick={() => animateRemoveItem(item.id)}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
          <span className="font-medium text-gray-900 dark:text-white">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600 dark:text-gray-400">Shipping</span>
          <span className="font-medium text-gray-900 dark:text-white">Calculated at next step</span>
        </div>
        <div className="flex justify-between text-sm font-medium mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <span className="text-gray-900 dark:text-white">Estimated Total</span>
          <span className="text-gray-900 dark:text-white">${subtotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};
