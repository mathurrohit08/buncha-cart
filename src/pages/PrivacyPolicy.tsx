
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Lock, Server, Eye, Database, FileText, Mail, Phone, MapPin } from "lucide-react";

const PrivacyPolicy = () => {
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
              <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Privacy Policy</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are committed to protecting your privacy and ensuring your data is handled securely and responsibly.
              </p>
            </div>
            
            {/* Visual elements for privacy concepts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-lg text-center shadow-md"
              >
                <div className="bg-blue-100 dark:bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600 dark:text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Data Protection</h3>
                <p className="text-gray-600 dark:text-gray-300">We implement strict security measures to protect your personal information</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 p-8 rounded-lg text-center shadow-md"
              >
                <div className="bg-purple-100 dark:bg-purple-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-purple-600 dark:text-purple-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
                <p className="text-gray-600 dark:text-gray-300">All payment information is encrypted and processed securely</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 p-8 rounded-lg text-center shadow-md"
              >
                <div className="bg-teal-100 dark:bg-teal-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-teal-600 dark:text-teal-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                <p className="text-gray-600 dark:text-gray-300">We are clear about what data we collect and how we use it</p>
              </motion.div>
            </div>
            
            <div className="prose max-w-none text-gray-600 dark:text-gray-300">
              <section className="mb-12">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 dark:bg-blue-800/40 p-2 rounded-md mt-1">
                    <Database className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Information We Collect</h2>
                    <div className="relative">
                      <div className="absolute left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                      <div className="pl-6">
                        <p className="mb-4">
                          We collect information that you provide directly to us, including when you:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                          <li>Create an account</li>
                          <li>Make a purchase</li>
                          <li>Sign up for our newsletter</li>
                          <li>Contact us for support</li>
                          <li>Participate in surveys or promotions</li>
                          <li>Post reviews or comments</li>
                        </ul>
                        
                        <p className="mb-4">
                          We may also automatically collect certain information about your device and how you interact with our services, including:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                          <li>IP address and device identifiers</li>
                          <li>Browser type and operating system</li>
                          <li>Pages you view and links you click</li>
                          <li>Time spent on our services and referring website</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-purple-100 dark:bg-purple-800/40 p-2 rounded-md mt-1">
                    <Server className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">How We Use Your Information</h2>
                    <div className="relative">
                      <div className="absolute left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                      <div className="pl-6">
                        <p className="mb-4">
                          We use the information we collect to:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                          <li>Process your orders and payments</li>
                          <li>Send you order confirmations and updates</li>
                          <li>Respond to your comments and questions</li>
                          <li>Send you marketing communications (with your consent)</li>
                          <li>Improve our website and products</li>
                          <li>Detect and prevent fraud</li>
                          <li>Analyze how users interact with our services</li>
                          <li>Comply with legal obligations</li>
                        </ul>
                        
                        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-100 dark:border-purple-800 mb-4">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Personalized Experience</h4>
                          <p>
                            We use your browsing history and purchase data to provide personalized product recommendations
                            and a tailored shopping experience. You can adjust your preferences in your account settings.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-teal-100 dark:bg-teal-800/40 p-2 rounded-md mt-1">
                    <FileText className="w-6 h-6 text-teal-600 dark:text-teal-300" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Your Rights</h2>
                    <div className="relative">
                      <div className="absolute left-0 w-1 h-full bg-gradient-to-b from-teal-500 to-emerald-500 rounded-full"></div>
                      <div className="pl-6">
                        <p className="mb-4">
                          You have the right to:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg border border-teal-100 dark:border-teal-800">
                            <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">Access Your Data</h4>
                            <p>Request a copy of the personal information we hold about you</p>
                          </div>
                          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg border border-teal-100 dark:border-teal-800">
                            <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">Correct Your Data</h4>
                            <p>Ask us to update or correct inaccurate information</p>
                          </div>
                          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg border border-teal-100 dark:border-teal-800">
                            <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">Delete Your Data</h4>
                            <p>Request deletion of your personal information</p>
                          </div>
                          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg border border-teal-100 dark:border-teal-800">
                            <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">Data Portability</h4>
                            <p>Receive your data in a structured, machine-readable format</p>
                          </div>
                        </div>
                        
                        <p>
                          To exercise these rights, please contact our privacy team at privacy@storex.com. We will respond to your request within 30 days.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-lg border border-blue-100 dark:border-blue-800 shadow-md">
                <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-6 text-center">Contact Us</h3>
                <div className="flex flex-col md:flex-row justify-between gap-8">
                  <div className="flex-1 flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <div className="bg-blue-100 dark:bg-blue-800/50 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white mb-1">Email Us</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">For privacy inquiries:</p>
                      <p className="text-blue-600 dark:text-blue-300 font-medium">privacy@storex.com</p>
                    </div>
                  </div>
                  
                  <div className="flex-1 flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <div className="bg-purple-100 dark:bg-purple-800/50 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white mb-1">Call Us</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">Privacy Team:</p>
                      <p className="text-purple-600 dark:text-purple-300 font-medium">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex-1 flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <div className="bg-teal-100 dark:bg-teal-800/50 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-teal-600 dark:text-teal-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white mb-1">Mail Us</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">Privacy Officer:</p>
                      <address className="not-italic text-teal-600 dark:text-teal-300">
                        StoreX Inc.<br />
                        123 Commerce St<br />
                        San Francisco, CA 94103
                      </address>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-8">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
