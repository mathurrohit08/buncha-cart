
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
            className="space-y-8"
          >
            <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Our Story</h2>
                <p className="text-gray-600 leading-relaxed">
                  Founded in 2020, our store has grown from a small local shop to 
                  a leading online destination for premium products. We believe in 
                  quality, innovation, and exceptional customer service.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our mission is to provide our customers with the highest quality 
                  products while maintaining affordable prices and excellent service.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1460574283810-2aab119d8511"
                  alt="Our Store Building"
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold">Our Vision</h3>
                <p className="text-gray-600">
                  To become the most trusted and innovative online retail 
                  destination globally.
                </p>
              </div>
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold">Our Values</h3>
                <p className="text-gray-600">
                  Quality, Integrity, Innovation, and Customer Satisfaction are 
                  at the heart of everything we do.
                </p>
              </div>
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold">Our Promise</h3>
                <p className="text-gray-600">
                  We stand behind every product we sell with our satisfaction 
                  guarantee.
                </p>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-semibold text-center mb-8">Our Team</h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                    alt="Team Member"
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                  <h3 className="font-semibold">Sarah Johnson</h3>
                  <p className="text-gray-600">CEO & Founder</p>
                </div>
                {/* Add more team members as needed */}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
