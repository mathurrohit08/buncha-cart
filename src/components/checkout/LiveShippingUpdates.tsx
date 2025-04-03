
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Truck, Package, MapPin } from 'lucide-react';
import { calculateShippingCost, estimateDistanceByZipCode, STORE_ZIP_CODE } from '@/utils/shippingCalculator';

interface LiveShippingUpdatesProps {
  zipCode: string;
}

export const LiveShippingUpdates: React.FC<LiveShippingUpdatesProps> = ({ zipCode }) => {
  const [distance, setDistance] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [estimatedDelivery, setEstimatedDelivery] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  
  useEffect(() => {
    if (zipCode && zipCode.length >= 5) {
      setIsCalculating(true);
      
      // Simulate calculation delay for UX
      const timer = setTimeout(() => {
        const calculatedDistance = estimateDistanceByZipCode(STORE_ZIP_CODE, zipCode);
        setDistance(calculatedDistance);
        
        const { cost } = calculateShippingCost(calculatedDistance);
        setShippingCost(cost / 100); // Convert cents to dollars
        
        // Calculate estimated delivery date based on distance
        const today = new Date();
        const deliveryDays = calculatedDistance < 100 ? 1 : 
                            calculatedDistance < 300 ? 2 : 
                            calculatedDistance < 500 ? 3 : 5;
                            
        const deliveryDate = new Date(today);
        deliveryDate.setDate(today.getDate() + deliveryDays);
        
        // Format the date
        const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
        setEstimatedDelivery(deliveryDate.toLocaleDateString('en-US', options));
        
        setIsCalculating(false);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [zipCode]);
  
  if (!zipCode || zipCode.length < 5) {
    return (
      <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
        <div className="flex items-center text-gray-500 dark:text-gray-400">
          <Truck className="h-5 w-5 mr-2" />
          <p>Enter your ZIP code to calculate shipping</p>
        </div>
      </div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
    >
      <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3">
        <h3 className="font-medium text-gray-900 dark:text-white flex items-center">
          <Truck className="h-5 w-5 mr-2" />
          Shipping Information
        </h3>
      </div>
      
      <div className="p-4 bg-white dark:bg-gray-900">
        {isCalculating ? (
          <div className="flex flex-col items-center py-6">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 dark:border-purple-400 mb-2"></div>
            <p className="text-gray-600 dark:text-gray-400">Calculating shipping options...</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-gray-500 dark:text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <p className="text-gray-900 dark:text-white font-medium">Delivery to {zipCode}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Approximately {Math.round(distance)} miles from our facility
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Package className="h-5 w-5 text-gray-500 dark:text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <p className="text-gray-900 dark:text-white font-medium">
                  {shippingCost === 0 ? 'Free Shipping' : `$${shippingCost.toFixed(2)} Shipping`}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Estimated delivery: {estimatedDelivery}
                </p>
              </div>
            </div>
            
            <div className="pt-3 mt-3 border-t border-gray-100 dark:border-gray-800">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Shipping Method</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {distance < 100 ? 'Express Delivery' : 
                   distance < 300 ? 'Standard Shipping' : 
                   distance < 500 ? 'Ground Shipping' : 'Economy Shipping'}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};
