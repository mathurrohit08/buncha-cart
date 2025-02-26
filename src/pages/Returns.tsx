
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Returns = () => {
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
            <h1 className="text-4xl font-bold text-center mb-12">Returns</h1>
            
            <div className="grid gap-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Return Policy</h2>
                <p className="text-gray-600">
                  We want you to be completely satisfied with your purchase. If you're not 
                  happy with your order, we accept returns within 30 days of delivery.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">How to Return</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Login to your account and visit the orders section</li>
                  <li>Select the item you wish to return</li>
                  <li>Print the prepaid return shipping label</li>
                  <li>Pack the item securely</li>
                  <li>Drop off at any authorized shipping location</li>
                </ol>
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
