
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Check, CreditCard, FileText, Upload, Building2 } from "lucide-react";

const ApplyForCredit = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    yearsInBusiness: "",
    federalTaxId: "",
    annualRevenue: "",
    creditAmount: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    businessDescription: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        title: "Application Submitted",
        description: "Your credit application has been received. We'll contact you shortly.",
        variant: "default",
      });
    }, 1500);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-3 dark:text-white">Apply for Business Credit</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Get access to our flexible payment terms and credit lines tailored for your business needs.
              Complete the application below to get started.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-10">
            <div className="flex items-center justify-center">
              <div className="flex items-center w-full max-w-3xl mx-auto">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="relative flex-1">
                    <div 
                      className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center border-2 ${
                        step >= i 
                          ? "bg-blue-500 border-blue-500 text-white" 
                          : "border-gray-300 text-gray-500 dark:border-gray-700 dark:text-gray-400"
                      }`}
                    >
                      {step > i ? <Check className="w-5 h-5" /> : i}
                    </div>
                    <div className="text-xs text-center mt-2 dark:text-gray-400">
                      {i === 1 ? "Business Information" : i === 2 ? "Contact Details" : "Financial Information"}
                    </div>
                    {i < 3 && (
                      <div className={`absolute top-5 left-0 right-0 h-0.5 -z-10 ${
                        step > i ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-700"
                      }`}>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Business Information */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Building2 className="h-8 w-8 text-blue-500" />
                    <h2 className="text-xl font-semibold dark:text-white">Business Information</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="businessName">Business Name</Label>
                      <Input 
                        id="businessName" 
                        name="businessName" 
                        value={formData.businessName} 
                        onChange={handleInputChange} 
                        required 
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="businessType">Business Type</Label>
                      <select 
                        id="businessType" 
                        name="businessType" 
                        value={formData.businessType} 
                        onChange={handleInputChange as any} 
                        required 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      >
                        <option value="">Select business type</option>
                        <option value="Sole Proprietorship">Sole Proprietorship</option>
                        <option value="Partnership">Partnership</option>
                        <option value="LLC">LLC</option>
                        <option value="Corporation">Corporation</option>
                        <option value="Non-profit">Non-profit</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="yearsInBusiness">Years in Business</Label>
                      <Input 
                        id="yearsInBusiness" 
                        name="yearsInBusiness" 
                        type="number" 
                        min="0" 
                        value={formData.yearsInBusiness} 
                        onChange={handleInputChange} 
                        required 
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="federalTaxId">Federal Tax ID / EIN</Label>
                      <Input 
                        id="federalTaxId" 
                        name="federalTaxId" 
                        value={formData.federalTaxId} 
                        onChange={handleInputChange} 
                        required 
                        className="mt-1" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="businessDescription">Business Description</Label>
                    <Textarea 
                      id="businessDescription" 
                      name="businessDescription" 
                      value={formData.businessDescription} 
                      onChange={handleInputChange} 
                      rows={4} 
                      className="mt-1"
                    />
                  </div>
                  
                  <div className="flex justify-end pt-6">
                    <Button type="button" onClick={nextStep}>
                      Continue to Contact Details
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: Contact Details */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <CreditCard className="h-8 w-8 text-blue-500" />
                    <h2 className="text-xl font-semibold dark:text-white">Contact Details</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        name="firstName" 
                        value={formData.firstName} 
                        onChange={handleInputChange} 
                        required 
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        name="lastName" 
                        value={formData.lastName} 
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <Label htmlFor="address">Street Address</Label>
                      <Input 
                        id="address" 
                        name="address" 
                        value={formData.address} 
                        onChange={handleInputChange} 
                        required 
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input 
                        id="city" 
                        name="city" 
                        value={formData.city} 
                        onChange={handleInputChange} 
                        required 
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input 
                        id="state" 
                        name="state" 
                        value={formData.state} 
                        onChange={handleInputChange} 
                        required 
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input 
                        id="zipCode" 
                        name="zipCode" 
                        value={formData.zipCode} 
                        onChange={handleInputChange} 
                        required 
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-between pt-6">
                    <Button type="button" variant="outline" onClick={prevStep}>
                      Back
                    </Button>
                    <Button type="button" onClick={nextStep}>
                      Continue to Financial Information
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Financial Information */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <FileText className="h-8 w-8 text-blue-500" />
                    <h2 className="text-xl font-semibold dark:text-white">Financial Information</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="annualRevenue">Annual Business Revenue</Label>
                      <div className="relative mt-1">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                        <Input 
                          id="annualRevenue" 
                          name="annualRevenue" 
                          type="number" 
                          min="0" 
                          value={formData.annualRevenue} 
                          onChange={handleInputChange} 
                          required 
                          className="pl-7"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="creditAmount">Requested Credit Amount</Label>
                      <div className="relative mt-1">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                        <Input 
                          id="creditAmount" 
                          name="creditAmount" 
                          type="number" 
                          min="0" 
                          value={formData.creditAmount} 
                          onChange={handleInputChange} 
                          required 
                          className="pl-7"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 space-y-3">
                    <div className="flex items-center space-x-3">
                      <Upload className="h-5 w-5 text-blue-500" />
                      <h3 className="font-medium dark:text-white">Upload Supporting Documents</h3>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Please upload copies of your business license, tax returns, and bank statements from the last 3 months.
                    </p>
                    <div className="mt-2">
                      <Input 
                        id="documents" 
                        type="file" 
                        className="cursor-pointer" 
                        multiple 
                      />
                    </div>
                  </div>
                  
                  <div className="pt-4 dark:text-gray-300">
                    <p className="flex items-start">
                      <input 
                        type="checkbox" 
                        id="terms" 
                        required 
                        className="mt-1 mr-2" 
                      />
                      <label htmlFor="terms" className="text-sm">
                        By submitting this form, I authorize your company to make inquiries into my banking and business credit history. I understand that this application does not guarantee approval for credit.
                      </label>
                    </p>
                  </div>
                  
                  <div className="flex justify-between pt-6">
                    <Button type="button" variant="outline" onClick={prevStep}>
                      Back
                    </Button>
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : "Submit Application"}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>

          <div className="mt-10 bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium dark:text-white">What are the credit requirements?</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  We evaluate applications based on business longevity, revenue history, and credit background. Most approved businesses have been operating for at least 1 year with minimum monthly revenues of $10,000.
                </p>
              </div>
              <div>
                <h3 className="font-medium dark:text-white">How long does the approval process take?</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  Most applications are reviewed within 2-3 business days. Once approved, your credit line will be available immediately.
                </p>
              </div>
              <div>
                <h3 className="font-medium dark:text-white">What documents will I need to provide?</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  Required documents typically include business license, recent bank statements, tax returns, and financial statements. Our team may request additional documentation during the review process.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default ApplyForCredit;
