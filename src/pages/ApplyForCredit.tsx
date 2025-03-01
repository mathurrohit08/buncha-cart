
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { CreditCard, ShieldCheck, FileText, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ApplyForCredit = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application Received",
        description: "Your credit application has been successfully submitted.",
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
              <h1 className="text-4xl font-bold mb-4 dark:text-white">Apply for Credit</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Flexible financing options to help you complete your home improvement projects.
              </p>
            </div>
            
            {/* Hero Banner */}
            <div className="relative rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?auto=format&fit=crop&q=80&w=2000" 
                alt="Credit Application" 
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                <div className="text-white p-8 max-w-lg">
                  <h2 className="text-3xl font-bold mb-4">Buy Now, Pay Later</h2>
                  <p className="text-lg mb-6">Get approved for credit in minutes with competitive rates and flexible payment options.</p>
                  <div className="flex items-center gap-2 text-white/90">
                    <ShieldCheck className="h-5 w-5" />
                    <span>Fast approval process • No hidden fees</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Credit Line up to $25,000</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Qualifying customers can receive a credit line of up to $25,000 to finance their home improvement projects.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Calculator className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Competitive Interest Rates</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our financing partners offer competitive interest rates starting as low as 5.99% APR for qualified applicants.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Flexible Payment Terms</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Choose from various payment terms ranging from 6 to 60 months to fit your budget and financial goals.
                </p>
              </div>
            </div>
            
            <Separator className="my-8" />
            
            {/* Application Form */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6 dark:text-white">Credit Application</h2>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Complete the form to apply for credit. All information is secure and confidential. Applications are typically processed within 24-48 hours.
                  </p>
                  
                  <h3 className="font-semibold text-lg mb-4 dark:text-white">What You'll Need:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full p-1 mt-0.5">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">Valid government-issued ID</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full p-1 mt-0.5">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">Proof of income (last 2 pay stubs)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full p-1 mt-0.5">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">Social Security Number</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full p-1 mt-0.5">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">Banking information</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="lg:col-span-3">
                <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-6 dark:text-white">Personal Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" name="email" type="email" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input id="dob" name="dob" type="date" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="ssn">Social Security Number</Label>
                      <Input id="ssn" name="ssn" required className="mt-1" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-6 dark:text-white">Address</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="md:col-span-2">
                      <Label htmlFor="address">Street Address</Label>
                      <Input id="address" name="address" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" name="city" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input id="state" name="state" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input id="zipCode" name="zipCode" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="timeAtAddress">Time at Current Address</Label>
                      <Input id="timeAtAddress" name="timeAtAddress" placeholder="e.g., 3 years" required className="mt-1" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-6 dark:text-white">Employment & Income</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <Label htmlFor="employer">Current Employer</Label>
                      <Input id="employer" name="employer" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="jobTitle">Job Title</Label>
                      <Input id="jobTitle" name="jobTitle" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="employmentLength">Length of Employment</Label>
                      <Input id="employmentLength" name="employmentLength" placeholder="e.g., 2 years" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="annualIncome">Annual Income</Label>
                      <Input id="annualIncome" name="annualIncome" placeholder="$" required className="mt-1" />
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                    By submitting this application, you authorize us to obtain your credit report and verify the information provided.
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApplyForCredit;
