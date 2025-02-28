
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { FileCheck, Scale, AlertCircle, ShieldCheck, Clock, FileText, Mail, Phone, MapPin } from "lucide-react";

const TermsOfService = () => {
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
              <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Terms of Service</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Please read these terms carefully before using our services. By accessing our website, you agree to be bound by these terms.
              </p>
            </div>
            
            {/* Banner image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-xl overflow-hidden h-[300px] shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c" 
                alt="Legal document signing" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/70 to-purple-900/70 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h2 className="text-3xl font-bold mb-4">Our Commitment To You</h2>
                  <p className="max-w-2xl mx-auto text-lg">
                    We're dedicated to providing a secure, reliable, and fair shopping experience for all our customers.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Key terms highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-8 rounded-lg text-center shadow-md"
              >
                <div className="bg-indigo-100 dark:bg-indigo-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="w-8 h-8 text-indigo-600 dark:text-indigo-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Clear Agreements</h3>
                <p className="text-gray-600 dark:text-gray-300">Transparent terms that protect both our customers and business</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 p-8 rounded-lg text-center shadow-md"
              >
                <div className="bg-purple-100 dark:bg-purple-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-8 h-8 text-purple-600 dark:text-purple-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fair Policies</h3>
                <p className="text-gray-600 dark:text-gray-300">Balanced approach to dispute resolution and customer satisfaction</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-lg text-center shadow-md"
              >
                <div className="bg-blue-100 dark:bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-8 h-8 text-blue-600 dark:text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Legal Compliance</h3>
                <p className="text-gray-600 dark:text-gray-300">We adhere to all applicable e-commerce and consumer protection laws</p>
              </motion.div>
            </div>
            
            <div className="prose max-w-none text-gray-600 dark:text-gray-300">
              <section className="mb-12">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-indigo-100 dark:bg-indigo-800/40 p-2 rounded-md mt-1">
                    <FileText className="w-6 h-6 text-indigo-600 dark:text-indigo-300" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Agreement to Terms</h2>
                    <div className="relative">
                      <div className="absolute left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-blue-500 rounded-full"></div>
                      <div className="pl-6">
                        <p className="mb-4">
                          By accessing and using our website and services, you agree to be bound by these Terms of Service
                          and all applicable laws and regulations. If you do not agree with any of these terms, you are
                          prohibited from using or accessing this site.
                        </p>
                        
                        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-100 dark:border-indigo-800 mb-4">
                          <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Important:</h4>
                          <p>
                            These terms constitute a legally binding agreement between you and StoreX Inc. 
                            They govern your use of our website, mobile applications, and all related services.
                          </p>
                        </div>
                        
                        <p>
                          We reserve the right to modify these terms at any time. Changes will be effective immediately upon 
                          posting on our website. Your continued use of our services after any changes indicates your acceptance 
                          of the modified terms.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-purple-100 dark:bg-purple-800/40 p-2 rounded-md mt-1">
                    <AlertCircle className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Use License</h2>
                    <div className="relative">
                      <div className="absolute left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-violet-500 rounded-full"></div>
                      <div className="pl-6">
                        <p className="mb-4">
                          Permission is granted to temporarily download one copy of the materials (information or software)
                          on our website for personal, non-commercial transitory viewing only.
                        </p>
                        
                        <p className="mb-4">This license does not include:</p>
                        
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-100 dark:border-purple-800">
                            <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Prohibited Actions:</h4>
                            <ul className="list-disc pl-4 space-y-1">
                              <li>Modifying or copying the materials</li>
                              <li>Using the materials for commercial purposes</li>
                              <li>Attempting to decompile or reverse engineer any software</li>
                              <li>Removing copyright or proprietary notations</li>
                              <li>Transferring the materials to another person</li>
                            </ul>
                          </div>
                          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-100 dark:border-purple-800">
                            <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Termination:</h4>
                            <p className="mb-2">
                              This license shall automatically terminate if you violate any of these restrictions. Upon termination, you must:
                            </p>
                            <ul className="list-disc pl-4 space-y-1">
                              <li>Destroy any downloaded materials</li>
                              <li>Cease using our website and services</li>
                              <li>Notify all parties who received materials from you</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 dark:bg-blue-800/40 p-2 rounded-md mt-1">
                    <Clock className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. Disclaimer</h2>
                    <div className="relative">
                      <div className="absolute left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
                      <div className="pl-6">
                        <p className="mb-4">
                          The materials on our website are provided on an 'as is' basis. We make no warranties, expressed
                          or implied, and hereby disclaim and negate all other warranties including, without limitation,
                          implied warranties or conditions of merchantability, fitness for a particular purpose, or
                          non-infringement of intellectual property or other violation of rights.
                        </p>
                        
                        <div className="relative border-l-4 border-blue-500 pl-4 py-2 mb-4 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg">
                          <p className="italic text-blue-800 dark:text-blue-300">
                            "We strive for accuracy and quality, but cannot guarantee that our website will be error-free or uninterrupted."
                          </p>
                        </div>
                        
                        <p className="mb-4">
                          Further, we do not warrant or make any representations concerning the accuracy, likely results, or reliability of
                          the use of the materials on our website or otherwise relating to such materials or on any sites linked to this site.
                        </p>
                        
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Product Information:</h4>
                          <p>
                            We make every effort to display as accurately as possible the colors, features, specifications, and details of the
                            products available on our website. However, we cannot guarantee that your computer's display of any color will be accurate,
                            and product images are for illustrative purposes only.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-lg border border-indigo-100 dark:border-indigo-800 shadow-md mb-8">
                <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-300 mb-6 text-center">Contact Information</h3>
                <div className="flex flex-col md:flex-row justify-between gap-8">
                  <div className="flex-1 flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <div className="bg-indigo-100 dark:bg-indigo-800/50 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white mb-1">Email Us</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">For legal inquiries:</p>
                      <p className="text-indigo-600 dark:text-indigo-300 font-medium">legal@storex.com</p>
                    </div>
                  </div>
                  
                  <div className="flex-1 flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <div className="bg-purple-100 dark:bg-purple-800/50 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white mb-1">Call Us</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">Legal Department:</p>
                      <p className="text-purple-600 dark:text-purple-300 font-medium">+1 (555) 987-6543</p>
                    </div>
                  </div>
                  
                  <div className="flex-1 flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <div className="bg-blue-100 dark:bg-blue-800/50 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white mb-1">Mail Us</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">Legal Department:</p>
                      <address className="not-italic text-blue-600 dark:text-blue-300">
                        StoreX Inc.<br />
                        123 Commerce St<br />
                        San Francisco, CA 94103
                      </address>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
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

export default TermsOfService;
