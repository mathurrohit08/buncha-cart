
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const ReturnPolicy = () => {
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
            <h1 className="text-4xl font-bold text-center mb-12">Return Policy</h1>
            
            <div className="grid gap-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Return Window</h2>
                <p className="text-gray-600">
                  Items may be returned within 30 days of delivery for a full refund. The items must be
                  unused and in their original packaging.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Return Process</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Initiate return through your account</li>
                  <li>Print prepaid return label</li>
                  <li>Package item securely</li>
                  <li>Drop off at shipping location</li>
                  <li>Refund will be processed within 5-7 business days</li>
                </ol>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Non-Returnable Items</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Personalized items</li>
                  <li>Sale items</li>
                  <li>Intimate apparel</li>
                  <li>Opened beauty products</li>
                </ul>
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
