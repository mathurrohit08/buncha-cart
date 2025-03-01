
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ShieldCheck, AlertCircle, HelpCircle, Mail, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const ReturnPolicy = () => {
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
              <h1 className="text-4xl font-bold mb-4 dark:text-white">Return Policy</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Our comprehensive policy for returns, refunds, and exchanges to ensure your shopping experience is worry-free.
              </p>
            </div>
            
            {/* Hero Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-4 dark:text-white">30-Day Money Back Guarantee</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    We stand behind all our products with a 30-day money-back guarantee. If you're not satisfied with your purchase, you can return it within 30 days for a full refund.
                  </p>
                  <div className="flex gap-3">
                    <Button>Start Return</Button>
                    <Button variant="outline">Contact Support</Button>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=700" 
                    alt="Return Policy" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Policy Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">30-Day Return Window</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Return any product within 30 days of delivery for a full refund or exchange if you're not completely satisfied.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Free Return Shipping</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We provide prepaid return labels for all domestic returns, making the process simple and cost-free.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Dedicated Support</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our customer service team is available to help with any questions or concerns about your return or exchange.
                </p>
              </div>
            </div>
            
            <Separator className="my-8" />
            
            {/* Detailed Policy */}
            <div>
              <h2 className="text-2xl font-bold mb-6 dark:text-white">Return Policy Details</h2>
              
              <div className="space-y-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">Return Window</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Items may be returned within 30 days of delivery for a full refund. The return period begins on the date of delivery as indicated by our shipping carrier's records.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging with all included accessories and documentation.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">Return Process</h3>
                  <ol className="list-decimal list-inside space-y-3 text-gray-600 dark:text-gray-400">
                    <li><span className="font-medium">Initiate return</span>: Log in to your account and visit the orders section to start the return process.</li>
                    <li><span className="font-medium">Print label</span>: Print the prepaid return shipping label that will be provided via email.</li>
                    <li><span className="font-medium">Package item</span>: Securely package the item in its original packaging or a suitable box.</li>
                    <li><span className="font-medium">Drop off</span>: Take the package to any authorized shipping carrier location.</li>
                    <li><span className="font-medium">Refund</span>: Once we receive and inspect the return, we'll process your refund within 5-7 business days.</li>
                  </ol>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">Non-Returnable Items</h3>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Certain items cannot be returned due to health, safety, or customization reasons. These include:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                        <li>Personalized or custom-made items</li>
                        <li>Items marked as "Final Sale" or "Non-Returnable"</li>
                        <li>Intimate apparel and personal care products</li>
                        <li>Opened beauty products</li>
                        <li>Gift cards and downloadable software products</li>
                        <li>Clearance items specifically marked as non-returnable</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">Refund Processing</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Once we receive and inspect your return, we'll process your refund within 5-7 business days. The refund will be issued to your original payment method.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Please note that depending on your payment provider, it may take an additional 2-10 business days for the refund to appear in your account after it has been processed.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">Exchanges</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    If you need to exchange an item for a different size, color, or model, please initiate a return for the original item and place a new order for the desired item.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    If the exchange is due to a defective item or our error, please contact our customer service team for expedited assistance.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Section */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl border border-blue-100 dark:border-blue-800">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <HelpCircle className="h-16 w-16 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2 dark:text-white">Need Help With a Return?</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Our customer service team is available to assist you with any questions or concerns about returns, refunds, or exchanges.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Support
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Call Us: (800) 123-4567
                    </Button>
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

export default ReturnPolicy;
