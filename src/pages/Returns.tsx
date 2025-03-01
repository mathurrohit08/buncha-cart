
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Package, CheckCircle, ShieldCheck, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Returns = () => {
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
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4 dark:text-white">Returns</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Hassle-free returns process. We stand behind the quality of our products with our satisfaction guarantee.
              </p>
            </div>
            
            {/* Hero banner */}
            <div className="relative rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&q=80&w=2000" 
                alt="Returns" 
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                <div className="text-white p-8 max-w-lg">
                  <h2 className="text-3xl font-bold mb-4">Easy Returns Process</h2>
                  <p className="text-lg mb-6">Not satisfied with your purchase? Our returns process is simple and customer-friendly.</p>
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white">
                    <CheckCircle className="h-5 w-5" />
                    <span>30-Day Return Policy</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Return Process Steps */}
            <div>
              <h2 className="text-2xl font-bold mb-8 text-center dark:text-white">How to Return Your Items</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 relative">
                  <div className="absolute -top-4 -left-4 bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">
                    1
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Package className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 dark:text-white">Initiate Your Return</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Log in to your account and visit the orders section. Select the item you wish to return and follow the prompts.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 relative">
                  <div className="absolute -top-4 -left-4 bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">
                    2
                  </div>
                  <div className="text-center">
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <ArrowLeft className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 dark:text-white">Ship Your Return</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Print the prepaid return shipping label, pack the item securely, and drop it off at any authorized shipping location.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 relative">
                  <div className="absolute -top-4 -left-4 bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">
                    3
                  </div>
                  <div className="text-center">
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 dark:text-white">Get Your Refund</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Once we receive and inspect your return, we'll process your refund which will be issued to your original payment method.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Separator className="my-8" />
            
            {/* Return Policy Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl font-bold mb-6 dark:text-white">Return Policy Details</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2 dark:text-white">Return Window</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Items may be returned within 30 days of delivery for a full refund. The items must be unused and in their original packaging.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 dark:text-white">Return Shipping</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We provide prepaid return shipping labels for all domestic returns. International customers are responsible for return shipping costs.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 dark:text-white">Refund Processing</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Refunds will be processed within 5-7 business days after we receive and inspect your return. The refund will be issued to your original payment method.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 dark:text-white">Exchanges</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      If you need to exchange an item for a different size or color, please return the original item for a refund and place a new order for the desired item.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6 dark:text-white">Non-Returnable Items</h2>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border border-orange-100 dark:border-orange-800 mb-8">
                  <h3 className="text-xl font-semibold mb-3 dark:text-white">The following items cannot be returned:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                    <li>Personalized items</li>
                    <li>Sale items marked as final sale</li>
                    <li>Intimate apparel</li>
                    <li>Opened beauty products</li>
                    <li>Gift cards</li>
                    <li>Downloadable software products</li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0">
                      <ShieldCheck className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 dark:text-white">Satisfaction Guarantee</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        We stand behind the quality of our products. If you're not completely satisfied with your purchase for any reason, contact our customer service team, and we'll make it right.
                      </p>
                      <div className="flex items-center gap-2 mt-4 text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="h-4 w-4" />
                        <span>Customer service available 24/7</span>
                      </div>
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

export default Returns;
