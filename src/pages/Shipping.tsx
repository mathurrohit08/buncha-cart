
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Shipping = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-[1600px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h1 className="text-4xl font-bold text-center mb-12">Shipping Information</h1>
            
            <div className="grid gap-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Delivery Options</h2>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex gap-2">
                    <span className="font-semibold">Standard Shipping:</span> 
                    5-7 business days
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold">Express Shipping:</span> 
                    2-3 business days
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold">Next Day Delivery:</span> 
                    Order by 2 PM for next day delivery
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Shipping Rates</h2>
                <div className="space-y-2 text-gray-600">
                  <p>Standard Shipping: $5.99</p>
                  <p>Express Shipping: $12.99</p>
                  <p>Next Day Delivery: $19.99</p>
                  <p>Free shipping on orders over $50</p>
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
