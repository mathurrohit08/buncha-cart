
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Package, Users, TrendingUp, BarChart3, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const BulkSale = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Inquiry Received",
        description: "We'll be in touch about your bulk purchase inquiry shortly.",
        variant: "default",
      });
    }, 1500);
  };

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
              <h1 className="text-4xl font-bold mb-4 dark:text-white">Bulk Sale Inquiry</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Special pricing and support for large-volume purchases. Perfect for contractors, designers, and developers.
              </p>
            </div>
            
            {/* Hero Banner */}
            <div className="relative rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=2000" 
                alt="Bulk Sales" 
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                <div className="text-white p-8 max-w-lg">
                  <h2 className="text-3xl font-bold mb-4">Volume Discounts</h2>
                  <p className="text-lg mb-6">Save more when you buy more. Our bulk pricing is designed to help your business grow while keeping costs down.</p>
                  <div className="flex items-center gap-2 text-white/90">
                    <TrendingUp className="h-5 w-5" />
                    <span>Competitive pricing • Dedicated support</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Volume Discounts</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Tiered pricing structure with significant discounts based on order quantity. The more you buy, the more you save.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Dedicated Account Manager</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Each bulk buyer receives a dedicated account manager to assist with orders, provide product information, and ensure satisfaction.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Custom Shipping Solutions</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Flexible shipping options including direct-to-job-site delivery, scheduled deliveries, and pallet shipping for large orders.
                </p>
              </div>
            </div>
            
            <Separator className="my-8" />
            
            {/* Bulk Pricing Table */}
            <div>
              <h2 className="text-2xl font-bold mb-6 dark:text-white">Bulk Pricing Tiers</h2>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-900">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Order Quantity
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Discount
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Benefits
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium dark:text-white">
                          10-49 units
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                          5% off retail
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                          Free shipping on orders over $1,000
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium dark:text-white">
                          50-99 units
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                          10% off retail
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                          Free shipping + Priority processing
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium dark:text-white">
                          100-499 units
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                          15% off retail
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                          Free shipping + Priority processing + Dedicated support
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium dark:text-white">
                          500+ units
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                          20%+ off retail
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                          Custom pricing + All benefits + Custom delivery schedule
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 italic">
                * Discounts apply to eligible products only. Some restrictions may apply.
              </p>
            </div>
            
            {/* Inquiry Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-2xl font-bold mb-6 dark:text-white">Submit Your Inquiry</h2>
                <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" name="firstName" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" name="lastName" required className="mt-1" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" name="company" required className="mt-1" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" name="email" type="email" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" name="phone" required className="mt-1" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="industry">Industry</Label>
                      <Input id="industry" name="industry" placeholder="e.g., Construction, Interior Design" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="products">Products of Interest</Label>
                      <Input id="products" name="products" placeholder="e.g., Cabinets, Flooring, Tiles" required className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="quantity">Estimated Quantity</Label>
                      <Input id="quantity" name="quantity" placeholder="e.g., 50 units, 1000 sq ft" required className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="timeline">Project Timeline</Label>
                      <Input id="timeline" name="timeline" placeholder="e.g., Q1 2023, Ongoing" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Additional Information</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        rows={4}
                        className="mt-1" 
                        placeholder="Tell us more about your project and requirements"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        "Submit Inquiry"
                      )}
                    </Button>
                  </div>
                </form>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6 dark:text-white">Why Choose Our Bulk Program</h2>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 mb-6">
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">For Contractors & Builders</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full p-1 mt-0.5">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">Consistent pricing for accurate project bidding</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full p-1 mt-0.5">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">Direct-to-job-site delivery options</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full p-1 mt-0.5">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">Flexible project-based billing options</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">For Designers & Architects</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full p-1 mt-0.5">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">Access to exclusive product lines</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full p-1 mt-0.5">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">Sample programs for client presentations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full p-1 mt-0.5">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">Designer referral program with commission opportunities</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">For Property Developers</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full p-1 mt-0.5">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">Multi-project agreements with locked-in pricing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full p-1 mt-0.5">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">Phased delivery scheduling for multi-unit developments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full p-1 mt-0.5">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">Extended warranty options for development projects</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-800 flex gap-4">
                  <div className="flex-shrink-0">
                    <Mail className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">Contact Us Directly</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      For immediate assistance with bulk orders or to speak with a bulk sales specialist, please contact us directly.
                    </p>
                    <p className="text-gray-800 dark:text-gray-200 font-medium">
                      bulksales@store.com | (800) 123-4567
                    </p>
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

export default BulkSale;
