
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ShieldCheck, FileText, Clock, CheckCircle, XCircle, HelpCircle, Mail, Phone } from "lucide-react";

const Warranty = () => {
  // Mock warranty coverage data
  const warrantyCoverage = [
    {
      category: "Electronics",
      period: "1 year standard, extended options available",
      coverage: [
        "Manufacturing defects in materials and workmanship",
        "Electrical component failures",
        "LCD/LED display issues (excluding physical damage)",
        "Battery failures within specified parameters"
      ],
      exclusions: [
        "Physical damage from drops or impacts",
        "Water or liquid damage",
        "Unauthorized repair attempts",
        "Normal wear and tear"
      ]
    },
    {
      category: "Furniture",
      period: "5 years on structural components, 1 year on upholstery",
      coverage: [
        "Structural defects in frames and supports",
        "Faulty mechanical components (recliners, etc.)",
        "Manufacturing defects in materials",
        "Significant color fading under normal use"
      ],
      exclusions: [
        "Fabric tears from improper use",
        "Stains or discoloration from spills",
        "Damage from improper assembly",
        "Changes due to extreme environmental conditions"
      ]
    },
    {
      category: "Home Appliances",
      period: "2 years full coverage, 5 years on motors/compressors",
      coverage: [
        "Mechanical and electrical failures",
        "Motor or compressor failures",
        "Control board and electronic component issues",
        "Defects in materials or workmanship"
      ],
      exclusions: [
        "Installation errors",
        "Damage from power surges",
        "Commercial use of residential products",
        "Cosmetic damage not affecting function"
      ]
    }
  ];
  
  // FAQ data
  const faqs = [
    {
      question: "How do I file a warranty claim?",
      answer: "To file a warranty claim, log into your account and navigate to 'My Orders.' Find the eligible product and select 'File Warranty Claim.' Alternatively, contact our customer service via phone or email with your order number and description of the issue."
    },
    {
      question: "What information do I need to provide for a warranty claim?",
      answer: "You'll need your order number or proof of purchase, product model number, description of the issue with photos if possible, and your contact information. The more details you provide, the faster we can process your claim."
    },
    {
      question: "How long does the warranty claim process take?",
      answer: "Most warranty claims are reviewed within 2-3 business days. Once approved, repairs or replacements are typically processed within 5-7 business days, depending on product availability and shipping locations."
    },
    {
      question: "Do I need to pay for shipping for warranty repairs?",
      answer: "For valid warranty claims within the standard coverage period, we cover shipping costs both ways. For extended warranty claims or special circumstances, shipping arrangements will be explained during the claim process."
    },
    {
      question: "Can I purchase an extended warranty after buying a product?",
      answer: "Yes, extended warranties can be purchased within 30 days of your original purchase date. Visit the product page or contact customer service to explore available extended warranty options for your specific product."
    },
    {
      question: "Are warranties transferable if I give or sell the product to someone else?",
      answer: "Our standard manufacturer warranties are tied to the product and remain valid regardless of ownership changes, provided there's proof of the original purchase date. Extended warranties are typically non-transferable unless specifically noted."
    }
  ];
  
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-[1000px] mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded-full">
                <ShieldCheck className="h-12 w-12 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">Product Warranty Information</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We stand behind the quality of our products with comprehensive warranty coverage.
            </p>
          </div>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Clock className="h-6 w-6 mr-2 text-purple-600" />
                Warranty Coverage Periods
              </h2>
              
              <div className="grid gap-6">
                {warrantyCoverage.map((category, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{category.category}</CardTitle>
                      <CardDescription>Warranty Period: {category.period}</CardDescription>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-green-600 dark:text-green-400 flex items-center mb-3">
                          <CheckCircle className="h-5 w-5 mr-2" />
                          What's Covered
                        </h4>
                        <ul className="space-y-2">
                          {category.coverage.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <div className="h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0">
                                <div className="h-1.5 w-1.5 bg-green-500 rounded-full"></div>
                              </div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-red-600 dark:text-red-400 flex items-center mb-3">
                          <XCircle className="h-5 w-5 mr-2" />
                          What's Not Covered
                        </h4>
                        <ul className="space-y-2">
                          {category.exclusions.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <div className="h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0">
                                <div className="h-1.5 w-1.5 bg-red-500 rounded-full"></div>
                              </div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <FileText className="h-6 w-6 mr-2 text-purple-600" />
                Warranty Claim Process
              </h2>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                      <div className="bg-purple-100 dark:bg-purple-900/20 h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Identify the Issue</h3>
                        <p className="text-gray-600">
                          Document the problem with your product, including when it started and how it affects functionality. 
                          Take clear photos of the issue if applicable.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                      <div className="bg-purple-100 dark:bg-purple-900/20 h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Submit Your Claim</h3>
                        <p className="text-gray-600">
                          File a claim through your account dashboard, or contact our customer service team with your 
                          order details and issue description.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                      <div className="bg-purple-100 dark:bg-purple-900/20 h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Claim Evaluation</h3>
                        <p className="text-gray-600">
                          Our warranty team will review your claim and determine if it's covered under warranty. 
                          We may request additional information or photos during this process.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                      <div className="bg-purple-100 dark:bg-purple-900/20 h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold">4</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Resolution</h3>
                        <p className="text-gray-600">
                          For approved claims, we'll arrange for repair, replacement, or refund as appropriate. You'll 
                          receive detailed instructions on next steps via email.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <HelpCircle className="h-6 w-6 mr-2 text-purple-600" />
                Frequently Asked Questions
              </h2>
              
              <Card>
                <CardContent className="pt-6">
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-6">Need Assistance?</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start">
                      <div className="bg-purple-100 dark:bg-purple-900/20 p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">Email Support</h3>
                        <p className="text-gray-600 mb-2">
                          Our warranty specialists are ready to help with any warranty-related questions.
                        </p>
                        <p className="font-medium">warranty@example.com</p>
                        <p className="text-sm text-gray-500">Response within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start">
                      <div className="bg-purple-100 dark:bg-purple-900/20 p-3 rounded-full mr-4">
                        <Phone className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">Phone Support</h3>
                        <p className="text-gray-600 mb-2">
                          Speak directly with our warranty team for immediate assistance.
                        </p>
                        <p className="font-medium">+1 (800) 123-4567</p>
                        <p className="text-sm text-gray-500">Mon-Fri: 8am-6pm EST</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Warranty;
