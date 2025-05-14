
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircle, ShoppingBag, ArrowRight, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Coupon } from "./ApplyCouponSection";
import { Order } from "../account/orders/OrderHistory";

interface OrderConfirmationProps {
  orderDetails: {
    orderId: string;
    total: number;
    date: Date;
    items: any[];
    paymentMethod: string;
  };
  coupon: Coupon | null;
  onContinueShopping: () => void;
}

const thankYouMessages = [
  "Thank you for your purchase! We appreciate your business.",
  "Your order has been received. Thank you for shopping with us!",
  "Thanks for shopping with us today! We're processing your order.",
  "Order confirmed! Thank you for choosing our store.",
  "We're grateful for your purchase. Thank you!"
];

const getRandomMessage = () => {
  return thankYouMessages[Math.floor(Math.random() * thankYouMessages.length)];
};

// Random coupon generation for next purchase
const generateCoupon = (): Coupon => {
  const discounts = [10, 15, 20, 25];
  const discount = discounts[Math.floor(Math.random() * discounts.length)];
  
  return {
    id: `next-${Math.floor(Math.random() * 1000)}`,
    code: `NEXT${discount}`,
    discount,
    description: `${discount}% off your next purchase`,
    expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] // 30 days from now
  };
};

export const OrderConfirmation = ({ orderDetails, coupon, onContinueShopping }: OrderConfirmationProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [message] = useState(getRandomMessage());
  const [nextCoupon] = useState(generateCoupon());
  
  // Save order to localStorage
  useEffect(() => {
    const order: Order = {
      id: orderDetails.orderId,
      date: orderDetails.date.toISOString().split('T')[0],
      total: orderDetails.total,
      status: "processing",
      items: orderDetails.items,
      paymentMethod: orderDetails.paymentMethod
    };
    
    // Get existing orders or initialize empty array
    const existingOrdersStr = localStorage.getItem('orders');
    const existingOrders: Order[] = existingOrdersStr ? JSON.parse(existingOrdersStr) : [];
    
    // Add new order to the beginning of the array
    const updatedOrders = [order, ...existingOrders];
    
    // Save updated orders to localStorage
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    
    // Save coupon to localStorage if it exists
    if (nextCoupon) {
      const existingCouponsStr = localStorage.getItem('user_coupons');
      const existingCoupons: Coupon[] = existingCouponsStr ? JSON.parse(existingCouponsStr) : [];
      
      // Add new coupon if it doesn't already exist
      const couponExists = existingCoupons.some(c => c.code === nextCoupon.code);
      if (!couponExists) {
        const updatedCoupons = [...existingCoupons, nextCoupon];
        localStorage.setItem('user_coupons', JSON.stringify(updatedCoupons));
      }
    }
    
    // Clear cart
    localStorage.setItem('cart', JSON.stringify([]));
  }, [orderDetails, nextCoupon]);
  
  const handleCopyCoupon = () => {
    navigator.clipboard.writeText(nextCoupon.code);
    toast({
      title: "Coupon code copied",
      description: "Use it on your next purchase!",
    });
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center max-w-lg mx-auto"
    >
      <div className="mb-6">
        <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
        <p className="text-gray-600 dark:text-gray-300">{message}</p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700 w-full mb-8">
        <div className="mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">Order Number</p>
          <p className="font-semibold text-lg">{orderDetails.orderId}</p>
        </div>
        
        <div className="mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">Date</p>
          <p className="font-medium">{orderDetails.date.toLocaleDateString()}</p>
        </div>
        
        <div className="mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">Payment Method</p>
          <p className="font-medium">{orderDetails.paymentMethod}</p>
        </div>
        
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Total</p>
          <p className="font-bold text-lg">${orderDetails.total.toFixed(2)}</p>
        </div>
        
        {coupon && (
          <div className="mt-4 pt-4 border-t dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">Coupon Applied</p>
            <p className="font-medium text-purple-600 dark:text-purple-400">{coupon.code} - {coupon.description}</p>
          </div>
        )}
      </div>
      
      {/* Special coupon for next purchase */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-lg shadow-lg w-full mb-8 text-white">
        <h3 className="text-xl font-bold mb-2">Special Offer</h3>
        <p className="mb-4">Here's a coupon for your next purchase!</p>
        
        <div className="bg-white/20 backdrop-blur-sm p-3 rounded flex items-center justify-between mb-4">
          <span className="font-mono text-lg font-bold">{nextCoupon.code}</span>
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-white/20 hover:bg-white/30 text-white border-white/30"
            onClick={handleCopyCoupon}
          >
            <Copy className="h-4 w-4 mr-1" /> Copy
          </Button>
        </div>
        
        <div className="text-sm opacity-90">
          <p>{nextCoupon.description}</p>
          <p>Expires on {nextCoupon.expiryDate}</p>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <Button onClick={onContinueShopping} className="flex-1" variant="outline">
          Continue Shopping
        </Button>
        <Button onClick={() => navigate("/account/orders")} className="flex-1">
          <ShoppingBag className="mr-2 h-4 w-4" />
          View Order
        </Button>
      </div>
      
      <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
        <p>A confirmation email has been sent to your email address.</p>
        <p className="mt-1">
          Need help? <Link to="/contact" className="text-purple-600 dark:text-purple-400 hover:underline">Contact our support team</Link>
        </p>
      </div>
    </motion.div>
  );
};
