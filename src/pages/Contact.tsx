
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-gray-600 dark:text-gray-300">
                Have a question or feedback? We're here to help! Choose the best way to reach us below.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">Get in Touch</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:border-gray-600"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:border-gray-600"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:border-gray-600"
                      rows={4}
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                    Send Message
                  </Button>
                </form>
              </motion.div>

              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold">Contact Information</h2>
                  <div className="space-y-6">
                    <motion.div 
                      className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Mail className="h-6 w-6 text-purple-600" />
                      <div>
                        <h3 className="font-medium">Email Us</h3>
                        <p className="text-gray-600 dark:text-gray-300">support@store.com</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Phone className="h-6 w-6 text-purple-600" />
                      <div>
                        <h3 className="font-medium">Call Us</h3>
                        <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                        <p className="text-sm text-gray-500">Mon-Fri: 9:00 AM - 6:00 PM EST</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MapPin className="h-6 w-6 text-purple-600" />
                      <div>
                        <h3 className="font-medium">Visit Us</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          123 Design Avenue, Suite 100<br />
                          New York, NY 10001, USA
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    title="Office Location"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280917036!2d-74.11976341082841!3d40.697403441901946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1695157651869!5m2!1sen!2s"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="mt-16 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium mb-2">What are your business hours?</h3>
                  <p className="text-gray-600 dark:text-gray-300">We're open Monday through Friday, 9:00 AM to 6:00 PM EST.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">How quickly do you respond to inquiries?</h3>
                  <p className="text-gray-600 dark:text-gray-300">We aim to respond to all inquiries within 24 hours during business days.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
