
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Truck, Clock, Package, DollarSign, ShieldCheck } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Shipping = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 dark:text-white">Shipping Policy</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Fast, reliable shipping on all orders. We partner with leading carriers to ensure your products arrive safely and on time.
              </p>
            </div>
            
            {/* Hero banner */}
            <div className="relative rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&q=80&w=2000" 
                alt="Shipping" 
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                <div className="text-white p-8 max-w-lg">
                  <h2 className="text-3xl font-bold mb-4">We Ship Nationwide</h2>
                  <p className="text-lg mb-6">Quality products delivered to your doorstep with care and precision.</p>
                  <div className="flex items-center gap-2 text-white/90">
                    <ShieldCheck className="h-5 w-5" />
                    <span>All shipments are insured and tracked</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Shipping Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Standard Shipping</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Reliable shipping for standard orders. Delivered within 5-7 business days.
                </p>
                <div className="flex justify-between items-center pt-3 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="inline h-4 w-4 mr-1" /> 5-7 days
                  </span>
                  <span className="font-medium text-blue-600 dark:text-blue-400">$5.99</span>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 relative">
                <div className="absolute -top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Popular
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Express Shipping</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Faster delivery for when you need your order sooner. Delivered within 2-3 business days.
                </p>
                <div className="flex justify-between items-center pt-3 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="inline h-4 w-4 mr-1" /> 2-3 days
                  </span>
                  <span className="font-medium text-indigo-600 dark:text-indigo-400">$12.99</span>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Next Day Delivery</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Premium service for urgent orders. Order by 2 PM for delivery the next business day.
                </p>
                <div className="flex justify-between items-center pt-3 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="inline h-4 w-4 mr-1" /> 1 day
                  </span>
                  <span className="font-medium text-green-600 dark:text-green-400">$19.99</span>
                </div>
              </div>
            </div>
            
            <Separator className="my-8" />
            
            {/* Shipping Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl font-bold mb-6 dark:text-white">Shipping FAQs</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2 dark:text-white">When will my order ship?</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Orders are typically processed and shipped within 1-2 business days. You'll receive a confirmation email with tracking information once your order ships.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 dark:text-white">Do you offer international shipping?</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Yes, we offer international shipping to most countries. International shipping rates and delivery times vary by location.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 dark:text-white">How do I track my order?</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Once your order ships, you'll receive a confirmation email with tracking information. You can also track your order in your account dashboard.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 dark:text-white">What if my package is damaged or lost?</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      All shipments are insured. If your package is damaged or lost during transit, please contact our customer support team immediately for assistance.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6 dark:text-white">Free Shipping Policy</h2>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-800 flex gap-4">
                  <div className="flex-shrink-0">
                    <DollarSign className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">Free Shipping on Orders Over $50</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      We offer free standard shipping on all orders over $50 within the continental United States. Some exclusions may apply for oversized or heavy items.
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Note: Alaska, Hawaii, and international orders may incur additional shipping charges.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">Shipping Partners</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-100 dark:border-gray-700 flex items-center justify-center">
                      <img src="https://www.fedex.com/content/dam/fedex-com/logos/FedEx-Logo.png" alt="FedEx" className="h-8 object-contain" />
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-100 dark:border-gray-700 flex items-center justify-center">
                      <img src="https://www.ups.com/assets/resources/media/UPS_logo.svg" alt="UPS" className="h-8 object-contain" />
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-100 dark:border-gray-700 flex items-center justify-center">
                      <img src="https://about.usps.com/who/profile/images/postal-logo-2021.svg" alt="USPS" className="h-8 object-contain" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shipping;
