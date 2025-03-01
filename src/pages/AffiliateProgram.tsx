
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Check, DollarSign, TrendingUp, Users, Share2, Percent, Globe, FileText } from "lucide-react";

const AffiliateProgram = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    website: "",
    socialMedia: "",
    followers: "",
    niche: "",
    experience: "",
    referralSource: "",
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
        title: "Application Submitted",
        description: "Your affiliate application has been received. We'll review and contact you shortly.",
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
            <h1 className="text-3xl font-bold mb-3 dark:text-white">Affiliate Program</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Join our affiliate program and earn commissions by promoting our products. 
              We offer competitive rates, reliable tracking, and timely payments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
                <h2 className="text-xl font-semibold mb-6 dark:text-white">Affiliate Application</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      <Label htmlFor="website">Website URL</Label>
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
                  </div>
                  
                  <div>
                    <Label htmlFor="socialMedia">Social Media Profiles</Label>
                    <Textarea 
                      id="socialMedia" 
                      name="socialMedia" 
                      value={formData.socialMedia} 
                      onChange={handleInputChange} 
                      rows={2} 
                      className="mt-1"
                      placeholder="Instagram: @username, YouTube: channel_name, etc."
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="followers">Total Audience/Followers</Label>
                      <select 
                        id="followers" 
                        name="followers" 
                        value={formData.followers} 
                        onChange={handleInputChange} 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      >
                        <option value="">Select approximate size</option>
                        <option value="Less than 1,000">Less than 1,000</option>
                        <option value="1,000 - 10,000">1,000 - 10,000</option>
                        <option value="10,000 - 50,000">10,000 - 50,000</option>
                        <option value="50,000 - 100,000">50,000 - 100,000</option>
                        <option value="100,000 - 500,000">100,000 - 500,000</option>
                        <option value="500,000+">500,000+</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="niche">Primary Niche/Industry</Label>
                      <Input 
                        id="niche" 
                        name="niche" 
                        value={formData.niche} 
                        onChange={handleInputChange} 
                        className="mt-1"
                        placeholder="Tech, Fashion, Health, etc."
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="experience">Affiliate Marketing Experience</Label>
                    <select 
                      id="experience" 
                      name="experience" 
                      value={formData.experience} 
                      onChange={handleInputChange} 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    >
                      <option value="">Select experience level</option>
                      <option value="Beginner">Beginner (0-1 years)</option>
                      <option value="Intermediate">Intermediate (1-3 years)</option>
                      <option value="Advanced">Advanced (3-5 years)</option>
                      <option value="Expert">Expert (5+ years)</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="referralSource">How did you hear about our affiliate program?</Label>
                    <Input 
                      id="referralSource" 
                      name="referralSource" 
                      value={formData.referralSource} 
                      onChange={handleInputChange} 
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="additionalInfo">How do you plan to promote our products?</Label>
                    <Textarea 
                      id="additionalInfo" 
                      name="additionalInfo" 
                      value={formData.additionalInfo} 
                      onChange={handleInputChange} 
                      rows={3} 
                      className="mt-1"
                      placeholder="Tell us about your marketing strategies and channels"
                    />
                  </div>
                  
                  <div className="flex items-start pt-2">
                    <input 
                      type="checkbox" 
                      id="termsAgreement" 
                      className="mt-1 mr-2" 
                      required 
                    />
                    <Label htmlFor="termsAgreement" className="text-sm">
                      I agree to the affiliate program terms and conditions, and I understand 
                      that all applications are subject to review and approval.
                    </Label>
                  </div>
                  
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
                        Submit Application
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 sticky top-24">
                <h2 className="text-xl font-semibold mb-6 dark:text-white">Program Benefits</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                        <Percent className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium dark:text-white">High Commission Rates</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Earn up to 15% commission on all qualified sales generated through your unique affiliate links.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                        <DollarSign className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium dark:text-white">Timely Payments</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Receive monthly payments via PayPal, direct deposit, or other payment methods with low minimum thresholds.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                        <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium dark:text-white">Performance Bonuses</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Unlock higher commission rates and special bonuses based on your performance and sales volume.
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
                      <h3 className="font-medium dark:text-white">Marketing Resources</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Access professional banners, product images, and customized landing pages to maximize your conversion rates.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                        <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium dark:text-white">Dedicated Support</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Get personal assistance from our affiliate managers to help optimize your campaigns and boost earnings.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Globe className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                    <h3 className="font-medium text-blue-700 dark:text-blue-300">Ready to get started?</h3>
                  </div>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Fill out the application form and our affiliate team will review your submission. 
                    Approved affiliates will receive instant access to our affiliate dashboard with tracking links and marketing materials.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-center mb-8 dark:text-white">How Our Affiliate Program Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">1. Join the Program</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Apply for our affiliate program by filling out the application form with your details.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Share2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">2. Promote Products</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Share your unique affiliate links on your website, blog, social media, or email campaigns.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">3. Earn Commissions</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Get paid for every qualifying purchase made through your affiliate links.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className="text-xl font-semibold mb-6 dark:text-white">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium dark:text-white">How much can I earn as an affiliate?</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  Our base commission rate starts at 10%, with opportunities to earn up to 15% based on performance. There's no cap on how much you can earn, and top-performing affiliates often make thousands of dollars per month.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium dark:text-white">When and how do I get paid?</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  We process payments monthly for all earnings that meet the minimum threshold of $50. You can choose to be paid via PayPal, direct bank transfer, or other available payment methods in your region.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium dark:text-white">How long do cookies last?</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  Our tracking cookies have a 30-day duration, meaning you'll earn commissions on any purchases made within 30 days of a customer clicking your affiliate link.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium dark:text-white">Can I promote products on social media?</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  Yes! You can promote our products across various marketing channels including social media platforms, blogs, YouTube, email newsletters, and more. We provide marketing materials optimized for different platforms.
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

export default AffiliateProgram;
