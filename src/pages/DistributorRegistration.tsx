
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Check, Building, MapPin, Globe, Truck, FileText, Users, ChevronRight } from "lucide-react";

const DistributorRegistration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    yearEstablished: "",
    businessType: "",
    taxId: "",
    annualRevenue: "",
    numberOfEmployees: "",
    distributionRegions: [],
    leadFirstName: "",
    leadLastName: "",
    leadTitle: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    existingBrands: "",
    targetMarkets: "",
    salesChannels: "",
    marketingActivities: "",
    additionalInfo: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);
  const totalSteps = 4;

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
        title: "Registration Submitted",
        description: "Your distributor application has been received. We'll review and contact you within 3-5 business days.",
        variant: "default",
      });
    }, 1500);
  };

  const nextStep = () => setStep(Math.min(step + 1, totalSteps));
  const prevStep = () => setStep(Math.max(step - 1, 1));

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
            <h1 className="text-3xl font-bold mb-3 dark:text-white">Distributor Registration</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Join our network of distributors and gain access to our premium products at competitive wholesale prices.
              Complete the application below to begin the registration process.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="mb-8 px-4">
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 dark:bg-blue-900 dark:text-blue-200">
                    Step {step} of {totalSteps}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-blue-600 dark:text-blue-400">
                    {Math.round((step / totalSteps) * 100)}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 dark:bg-gray-700">
                <div 
                  style={{ width: `${(step / totalSteps) * 100}%` }} 
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-500"
                ></div>
              </div>
            </div>
            
            <div className="flex justify-between mt-2">
              <div 
                className={`text-xs ${step >= 1 ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}
              >
                Company Info
              </div>
              <div 
                className={`text-xs ${step >= 2 ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}
              >
                Contact Details
              </div>
              <div 
                className={`text-xs ${step >= 3 ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}
              >
                Distribution Info
              </div>
              <div 
                className={`text-xs ${step >= 4 ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}
              >
                Agreement
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Company Information */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
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
                      <Label htmlFor="website">Company Website</Label>
                      <Input 
                        id="website" 
                        name="website" 
                        type="url" 
                        value={formData.website} 
                        onChange={handleInputChange} 
                        className="mt-1"
                        placeholder="https://www.example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="yearEstablished">Year Established</Label>
                      <Input 
                        id="yearEstablished" 
                        name="yearEstablished" 
                        type="number" 
                        value={formData.yearEstablished} 
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
                        onChange={handleInputChange} 
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
                      <Label htmlFor="taxId">Federal Tax ID / EIN</Label>
                      <Input 
                        id="taxId" 
                        name="taxId" 
                        value={formData.taxId} 
                        onChange={handleInputChange} 
                        required 
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="annualRevenue">Annual Revenue</Label>
                      <select 
                        id="annualRevenue" 
                        name="annualRevenue" 
                        value={formData.annualRevenue} 
                        onChange={handleInputChange} 
                        required 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      >
                        <option value="">Select annual revenue</option>
                        <option value="Less than $500,000">Less than $500,000</option>
                        <option value="$500,000 - $1 million">$500,000 - $1 million</option>
                        <option value="$1 million - $5 million">$1 million - $5 million</option>
                        <option value="$5 million - $10 million">$5 million - $10 million</option>
                        <option value="$10 million - $50 million">$10 million - $50 million</option>
                        <option value="$50 million+">$50 million+</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="numberOfEmployees">Number of Employees</Label>
                      <select 
                        id="numberOfEmployees" 
                        name="numberOfEmployees" 
                        value={formData.numberOfEmployees} 
                        onChange={handleInputChange} 
                        required 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      >
                        <option value="">Select number of employees</option>
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-200">51-200</option>
                        <option value="201-500">201-500</option>
                        <option value="501-1000">501-1000</option>
                        <option value="1000+">1000+</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="flex justify-end pt-6">
                    <Button type="button" onClick={nextStep}>
                      Continue to Contact Details
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: Contact Information */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Users className="h-6 w-6 text-blue-500" />
                    <h2 className="text-xl font-semibold dark:text-white">Contact Information</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="leadFirstName">First Name</Label>
                      <Input 
                        id="leadFirstName" 
                        name="leadFirstName" 
                        value={formData.leadFirstName} 
                        onChange={handleInputChange} 
                        required 
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="leadLastName">Last Name</Label>
                      <Input 
                        id="leadLastName" 
                        name="leadLastName" 
                        value={formData.leadLastName} 
                        onChange={handleInputChange} 
                        required 
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="leadTitle">Title/Position</Label>
                      <Input 
                        id="leadTitle" 
                        name="leadTitle" 
                        value={formData.leadTitle} 
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
                  
                  <div className="flex items-center space-x-3 border-b dark:border-gray-700 pb-4 my-6">
                    <MapPin className="h-6 w-6 text-blue-500" />
                    <h2 className="text-xl font-semibold dark:text-white">Business Address</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <Label htmlFor="addressLine1">Address Line 1</Label>
                      <Input 
                        id="addressLine1" 
                        name="addressLine1" 
                        value={formData.addressLine1} 
                        onChange={handleInputChange} 
                        required 
                        className="mt-1"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="addressLine2">Address Line 2</Label>
                      <Input 
                        id="addressLine2" 
                        name="addressLine2" 
                        value={formData.addressLine2} 
                        onChange={handleInputChange} 
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
                      <Label htmlFor="state">State/Province</Label>
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
                      <Label htmlFor="zipCode">ZIP/Postal Code</Label>
                      <Input 
                        id="zipCode" 
                        name="zipCode" 
                        value={formData.zipCode} 
                        onChange={handleInputChange} 
                        required 
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Input 
                        id="country" 
                        name="country" 
                        value={formData.country} 
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
                      Continue to Distribution Info
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Distribution Information */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Globe className="h-6 w-6 text-blue-500" />
                    <h2 className="text-xl font-semibold dark:text-white">Distribution Information</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="distributionRegions">Regions You Will Distribute To</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                        {['North America', 'South America', 'Europe', 'Asia', 'Africa', 'Australia/Oceania', 'Middle East'].map(region => (
                          <div key={region} className="flex items-center">
                            <input 
                              type="checkbox" 
                              id={`region-${region}`} 
                              className="mr-2" 
                              onChange={() => {
                                const updatedRegions = formData.distributionRegions.includes(region)
                                  ? formData.distributionRegions.filter(r => r !== region)
                                  : [...formData.distributionRegions, region];
                                setFormData(prev => ({ ...prev, distributionRegions: updatedRegions }));
                              }}
                              checked={formData.distributionRegions.includes(region)}
                            />
                            <Label htmlFor={`region-${region}`} className="text-sm cursor-pointer">{region}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="existingBrands">Existing Brands You Distribute</Label>
                      <Textarea 
                        id="existingBrands" 
                        name="existingBrands" 
                        value={formData.existingBrands} 
                        onChange={handleInputChange} 
                        rows={3} 
                        className="mt-1"
                        placeholder="List major brands you currently distribute"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="targetMarkets">Target Markets</Label>
                      <Textarea 
                        id="targetMarkets" 
                        name="targetMarkets" 
                        value={formData.targetMarkets} 
                        onChange={handleInputChange} 
                        rows={2} 
                        className="mt-1"
                        placeholder="Describe your target customer demographics"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="salesChannels">Sales Channels</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                        {['Retail Stores', 'E-commerce', 'Wholesale', 'Dropshipping', 'Marketplaces', 'Other'].map(channel => (
                          <div key={channel} className="flex items-center">
                            <input 
                              type="checkbox" 
                              id={`channel-${channel}`} 
                              className="mr-2" 
                            />
                            <Label htmlFor={`channel-${channel}`} className="text-sm cursor-pointer">{channel}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="marketingActivities">Marketing Activities</Label>
                      <Textarea 
                        id="marketingActivities" 
                        name="marketingActivities" 
                        value={formData.marketingActivities} 
                        onChange={handleInputChange} 
                        rows={2} 
                        className="mt-1"
                        placeholder="Describe how you market products and brands"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="additionalInfo">Additional Information</Label>
                      <Textarea 
                        id="additionalInfo" 
                        name="additionalInfo" 
                        value={formData.additionalInfo} 
                        onChange={handleInputChange} 
                        rows={3} 
                        className="mt-1"
                        placeholder="Any other information you'd like to share"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-between pt-6">
                    <Button type="button" variant="outline" onClick={prevStep}>
                      Back
                    </Button>
                    <Button type="button" onClick={nextStep}>
                      Continue to Agreement
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 4: Agreements and Submit */}
              {step === 4 && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <FileText className="h-6 w-6 text-blue-500" />
                    <h2 className="text-xl font-semibold dark:text-white">Distributor Agreement</h2>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md border border-gray-200 dark:border-gray-600">
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      By submitting this form, I confirm that all information provided is accurate and complete. 
                      I understand that becoming an authorized distributor is subject to approval by the company 
                      and may require additional verification and documentation. If approved, I agree to comply 
                      with all distributor policies, minimum order requirements, and terms of service. I also 
                      understand that the company reserves the right to terminate the distributor relationship 
                      at its discretion if terms are not met.
                    </p>
                  </div>
                  
                  <div className="pt-4">
                    <div className="flex items-start">
                      <input 
                        type="checkbox" 
                        id="agreement1" 
                        className="mt-1 mr-2" 
                        required 
                      />
                      <Label htmlFor="agreement1" className="text-sm">
                        I agree to the distributor terms and conditions outlined above.
                      </Label>
                    </div>
                    
                    <div className="flex items-start mt-3">
                      <input 
                        type="checkbox" 
                        id="agreement2" 
                        className="mt-1 mr-2" 
                        required 
                      />
                      <Label htmlFor="agreement2" className="text-sm">
                        I confirm that I have the authority to enter into this agreement on behalf of my company.
                      </Label>
                    </div>
                    
                    <div className="flex items-start mt-3">
                      <input 
                        type="checkbox" 
                        id="agreement3" 
                        className="mt-1 mr-2" 
                      />
                      <Label htmlFor="agreement3" className="text-sm">
                        I would like to receive emails about product updates, promotional offers, and distributor news.
                      </Label>
                    </div>
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
                      ) : "Submit Registration"}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>

          <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded-full">
                <Truck className="h-6 w-6 text-blue-500 dark:text-blue-300" />
              </div>
              <div>
                <h3 className="font-semibold text-lg dark:text-white">Why Become Our Distributor?</h3>
                <ul className="mt-2 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Exclusive access to premium products with competitive margins</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Dedicated support from our distributor success team</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Marketing materials and product training resources</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Volume-based incentives and growth opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>First access to new product launches and innovations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default DistributorRegistration;
