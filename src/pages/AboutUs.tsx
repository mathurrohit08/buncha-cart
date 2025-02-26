
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-[1600px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-6">About Us</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're passionate about bringing you the best products with an exceptional shopping experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Our Team"
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-semibold">Our Story</h2>
                <p className="text-gray-600">
                  Founded with a vision to revolutionize online shopping, we've grown from a small startup
                  to a trusted e-commerce destination. Our journey has been driven by our commitment to
                  quality, innovation, and customer satisfaction.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-600">1M+</h3>
                    <p className="text-gray-600">Happy Customers</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-purple-600">50K+</h3>
                    <p className="text-gray-600">Products</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="p-6 bg-white rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide accessible, high-quality products while maintaining exceptional customer service
                  and fostering sustainable practices.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="p-6 bg-white rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To become the most trusted and innovative e-commerce platform, setting new standards for
                  online shopping experiences.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="p-6 bg-white rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                <p className="text-gray-600">
                  Built on integrity, innovation, sustainability, and an unwavering commitment to customer
                  satisfaction.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
