
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, MapPin, Mail, Phone, CreditCard, Users, Package, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const Footer = () => {
  const links = {
    company: [
      { name: "About Us", path: "/about-us" },
      { name: "Contact", path: "/contact" },
      { name: "Careers", path: "/careers" },
      { name: "Blog", path: "/blog" },
    ],
    support: [
      { name: "Shipping Policy", path: "/shipping" },
      { name: "Returns", path: "/returns" },
      { name: "Return Policy", path: "/return-policy" },
      { name: "FAQ", path: "/faq" },
    ],
    programs: [
      { name: "Apply For Credit", path: "/apply-for-credit" },
      { name: "Bulk Sale Inquiry", path: "/bulk-sale" },
      { name: "Distributor Registration", path: "/distributor-registration" },
      { name: "Affiliate Program", path: "/affiliate-program" },
    ],
    legal: [
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms of Service", path: "/terms-of-service" },
      { name: "Accessibility", path: "/accessibility" },
      { name: "Warranty", path: "/warranty" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "Youtube" },
  ];

  const faqItems = [
    {
      question: "How do shipping costs work?",
      answer: "Shipping costs are calculated based on distance from our warehouse. We offer free shipping for orders within 50 miles, and tiered pricing for further distances.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=300&h=200"
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day money-back guarantee on all products. Items must be returned in their original packaging for a full refund.",
      image: "https://images.unsplash.com/photo-1580745294621-58c9c5d2a4e5?auto=format&fit=crop&w=300&h=200"
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship worldwide! International shipping costs vary by country and are calculated at checkout.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=300&h=200"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="py-10 sm:py-12 border-b border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Subscribe to our newsletter</h3>
              <p className="text-gray-300 mb-4">
                Get the latest updates, exclusive offers, and design tips straight to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Email address"
              />
              <Button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition-colors rounded-md font-medium whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="py-10 border-b border-gray-800">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqItems.map((item, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.question}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&h=200";
                    }}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link to="/faq" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors">
              View all FAQs
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>

        <div className="py-10 sm:py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block text-white">
              Company
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-indigo-600"></span>
            </h3>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block text-white">
              Support
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-indigo-600"></span>
            </h3>
            <ul className="space-y-3">
              {links.support.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block text-white">
              Programs
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-indigo-600"></span>
            </h3>
            <ul className="space-y-3">
              {links.programs.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block text-white">
              Legal
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-indigo-600"></span>
            </h3>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-900/50 p-3 rounded-full flex-shrink-0">
                <MapPin className="h-5 w-5 text-indigo-400" />
              </div>
              <div>
                <h4 className="font-medium mb-2 text-white">Our Location</h4>
                <p className="text-gray-300">123 Design Avenue, Suite 100</p>
                <p className="text-gray-300">New York, NY 10001, USA</p>
                <img 
                  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=300&h=200" 
                  alt="Store location" 
                  className="mt-2 rounded-lg h-24 w-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&h=200";
                  }}
                />
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-indigo-900/50 p-3 rounded-full flex-shrink-0">
                <Phone className="h-5 w-5 text-indigo-400" />
              </div>
              <div>
                <h4 className="font-medium mb-2 text-white">Call Us</h4>
                <p className="text-gray-300">+1 (800) 123-4567</p>
                <p className="text-gray-300">Mon-Fri: 9am - 6pm EST</p>
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300&h=200" 
                  alt="Customer support" 
                  className="mt-2 rounded-lg h-24 w-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&h=200";
                  }}
                />
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-indigo-900/50 p-3 rounded-full flex-shrink-0">
                <Mail className="h-5 w-5 text-indigo-400" />
              </div>
              <div>
                <h4 className="font-medium mb-2 text-white">Email Us</h4>
                <p className="text-gray-300">info@designstore.com</p>
                <p className="text-gray-300">support@designstore.com</p>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&h=200" 
                  alt="Contact us" 
                  className="mt-2 rounded-lg h-24 w-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&h=200";
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-gray-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800 transition-colors">
              <div className="bg-indigo-900/50 p-3 rounded-full">
                <Package className="h-6 w-6 text-indigo-400" />
              </div>
              <div>
                <h4 className="font-medium text-white">Free Shipping</h4>
                <p className="text-sm text-gray-300">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800 transition-colors">
              <div className="bg-indigo-900/50 p-3 rounded-full">
                <CreditCard className="h-6 w-6 text-indigo-400" />
              </div>
              <div>
                <h4 className="font-medium text-white">Secure Payment</h4>
                <p className="text-sm text-gray-300">100% secure checkout</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800 transition-colors">
              <div className="bg-indigo-900/50 p-3 rounded-full">
                <Users className="h-6 w-6 text-indigo-400" />
              </div>
              <div>
                <h4 className="font-medium text-white">24/7 Support</h4>
                <p className="text-sm text-gray-300">Dedicated assistance</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800 transition-colors">
              <div className="bg-indigo-900/50 p-3 rounded-full">
                <Heart className="h-6 w-6 text-indigo-400" />
              </div>
              <div>
                <h4 className="font-medium text-white">Satisfaction Guarantee</h4>
                <p className="text-sm text-gray-300">30-day money back</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-800" />

        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <Link to="/" className="flex items-center justify-center md:justify-start gap-2">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=40&h=40" 
                  alt="Logo" 
                  className="h-10 w-10 rounded-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=40&h=40";
                  }}
                />
                <span className="text-xl font-bold text-white">DesignStore</span>
              </Link>
            </div>
            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-indigo-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            <p className="text-gray-300 text-sm text-center md:text-right">
              © {new Date().getFullYear()} DesignStore. All rights reserved. <br />
              <span className="text-gray-400">Designed and developed with ❤️</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
