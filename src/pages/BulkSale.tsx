
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Check, Percent, Package2, ShoppingCart, Calculator, Building, Phone, FileText } from "lucide-react";

const BulkSale = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    industry: "",
    productInterest: "",
    quantity: "",
    orderFrequency: "One-time",
    customizationNeeded: "No",
    additionalInfo: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Inquiry Submitted",
        description: "Your bulk sale inquiry has been received. Our team will contact you within 24 hours.",
        variant: "default",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-3 dark:text-white">Bulk Sale Inquiry</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Get volume discounts and special pricing when you order in bulk. Fill out the form below
              and our wholesale team will get back to you with custom pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center space-x-3 border-b dark:border-gray-700 pb-4 mb-6">
                    <Building className="h-6 w-6 text-blue-500" />
                    <h2 className="text-xl font-semibold dark:text-white">Company Information</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input 
                        id="companyName" 
                        name="companyName" 
                        value={formData.companyName} 
                        onChange={handleInputChange} 
                        required 
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="industry">Industry</Label>
                      <select 
                        id="industry" 
                        name="industry" 
                        value={formData.industry} 
                        onChange={handleInputChange} 
                        required 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      >
                        <option value="">Select your industry</option>
                        <option value="Retail">Retail</option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="Education">Education</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Technology">Technology</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 border-b dark:border-gray-700 pb-4 mb-6 mt-10">
                    <Phone className="h-6 w-6 text-blue-500" />
                    <h2 className="text-xl font-semibold dark:text-white">Contact Information</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="contactName">Contact Name</Label>
                      <Input 
                        id="contactName" 
                        name="contactName" 
                        value={formData.contactName} 
                        onChange={handleInputChange} 
                        required 
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        required 
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleInputChange} 
                        required 
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 border-b dark:border-gray-700 pb-4 mb-6 mt-10">
                    <Package2 className="h-6 w-6 text-blue-500" />
                    <h2 className="text-xl font-semibold dark:text-white">Order Details</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="productInterest">Products of Interest</Label>
                      <Input 
                        id="productInterest" 
                        name="productInterest" 
                        value={formData.productInterest} 
                        onChange={handleInputChange} 
                        required 
                        className="mt-1"
                        placeholder="Product names or categories"
                      />
                    </div>
                    <div>
                      <Label htmlFor="quantity">Estimated Quantity</Label>
                      <Input 
                        id="quantity" 
                        name="quantity" 
                        type="number" 
                        min="1" 
                        value={formData.quantity} 
                        onChange={handleInputChange} 
                        required 
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="orderFrequency">Order Frequency</Label>
                      <select 
                        id="orderFrequency" 
                        name="orderFrequency" 
                        value={formData.orderFrequency} 
                        onChange={handleInputChange} 
                        required 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      >
                        <option value="One-time">One-time</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Quarterly">Quarterly</option>
                        <option value="Annually">Annually</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="customizationNeeded">Need Customization?</Label>
                      <select 
                        id="customizationNeeded" 
                        name="customizationNeeded" 
                        value={formData.customizationNeeded} 
                        onChange={handleInputChange} 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      >
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="additionalInfo">Additional Information</Label>
                    <Textarea 
                      id="additionalInfo" 
                      name="additionalInfo" 
                      value={formData.additionalInfo} 
                      onChange={handleInputChange} 
                      rows={4} 
                      className="mt-1"
                      placeholder="Any specific requirements, delivery timeframe, or questions?"
                    />
                  </div>
                  
                  <div className="pt-6">
                    <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Submit Inquiry
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            
            <div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 sticky top-24">
                <h2 className="text-xl font-semibold mb-6 dark:text-white">Bulk Order Benefits</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                        <Percent className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium dark:text-white">Volume Discounts</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Save up to 30% when ordering in bulk compared to regular retail prices.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                        <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium dark:text-white">Dedicated Account Manager</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Get personalized support from a dedicated account manager for all your orders.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                        <Package2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium dark:text-white">Custom Packaging</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Options for custom packaging and branding available for bulk orders.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                        <Calculator className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium dark:text-white">Flexible Payment Terms</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Access to flexible payment terms and financing options for qualified businesses.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    <strong>Need immediate assistance?</strong><br />
                    Contact our wholesale team directly at:
                  </p>
                  <p className="text-sm font-medium mt-2 dark:text-white">
                    <Phone className="h-4 w-4 inline mr-2" />
                    (800) 555-BULK
                  </p>
                  <p className="text-sm font-medium mt-1 dark:text-white">
                    <svg className="h-4 w-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    wholesale@example.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default BulkSale;
