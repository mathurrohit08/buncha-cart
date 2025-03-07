
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
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
            <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">Get in Touch</h2>
                  <p className="text-gray-600">
                    Have a question or feedback? We'd love to hear from you. 
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={4}
                      placeholder="Your message"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Mail className="h-5 w-5 text-gray-600" />
                      <p className="text-gray-600">support@store.com</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="h-5 w-5 text-gray-600" />
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <MapPin className="h-5 w-5 text-gray-600" />
                      <p className="text-gray-600">
                        123 Design Avenue, Suite 100 New York, NY 10001, USA
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-[300px] bg-gray-200 rounded-lg">
                  {/* Map placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    Map View
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

export default Contact;
