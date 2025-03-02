
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, MapPin, Mail, Phone, CreditCard, Users, Package, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

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

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-[1600px] mx-auto px-4">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Subscribe to our newsletter</h3>
              <p className="text-gray-400 mb-4">
                Get the latest updates, exclusive offers, and design tips straight to your inbox.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition-colors rounded-md font-medium">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Company
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-indigo-600"></span>
            </h3>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Support
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-indigo-600"></span>
            </h3>
            <ul className="space-y-3">
              {links.support.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Programs
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-indigo-600"></span>
            </h3>
            <ul className="space-y-3">
              {links.programs.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Legal
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-indigo-600"></span>
            </h3>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Section - Improved alignment */}
        <div className="py-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-900/50 p-3 rounded-full flex-shrink-0">
                <MapPin className="h-5 w-5 text-indigo-400" />
              </div>
              <div>
                <h4 className="font-medium mb-2 text-white">Our Location</h4>
                <p className="text-gray-400">123 Design Avenue, Suite 100</p>
                <p className="text-gray-400">New York, NY 10001, USA</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-indigo-900/50 p-3 rounded-full flex-shrink-0">
                <Phone className="h-5 w-5 text-indigo-400" />
              </div>
              <div>
                <h4 className="font-medium mb-2 text-white">Call Us</h4>
                <p className="text-gray-400">+1 (800) 123-4567</p>
                <p className="text-gray-400">Mon-Fri: 9am - 6pm EST</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-indigo-900/50 p-3 rounded-full flex-shrink-0">
                <Mail className="h-5 w-5 text-indigo-400" />
              </div>
              <div>
                <h4 className="font-medium mb-2 text-white">Email Us</h4>
                <p className="text-gray-400">info@store.com</p>
                <p className="text-gray-400">support@store.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section - Better responsive design */}
        <div className="py-8 border-t border-gray-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-lg">
              <div className="bg-indigo-900/50 p-3 rounded-full">
                <Package className="h-6 w-6 text-indigo-400" />
              </div>
              <div>
                <h4 className="font-medium">Free Shipping</h4>
                <p className="text-sm text-gray-400">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-lg">
              <div className="bg-indigo-900/50 p-3 rounded-full">
                <CreditCard className="h-6 w-6 text-indigo-400" />
              </div>
              <div>
                <h4 className="font-medium">Secure Payment</h4>
                <p className="text-sm text-gray-400">100% secure checkout</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-lg">
              <div className="bg-indigo-900/50 p-3 rounded-full">
                <Users className="h-6 w-6 text-indigo-400" />
              </div>
              <div>
                <h4 className="font-medium">24/7 Support</h4>
                <p className="text-sm text-gray-400">Dedicated assistance</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-lg">
              <div className="bg-indigo-900/50 p-3 rounded-full">
                <Heart className="h-6 w-6 text-indigo-400" />
              </div>
              <div>
                <h4 className="font-medium">Satisfaction Guarantee</h4>
                <p className="text-sm text-gray-400">30-day money back</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-800" />

        {/* Social & Copyright Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <Link to="/" className="flex items-center gap-2">
                <img src="/lovable-uploads/d0289308-98a6-4913-b7cd-73b0278e8893.png" alt="Logo" className="h-10" />
                <span className="text-xl font-bold">Store</span>
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
            <p className="text-gray-400 text-sm text-center md:text-right">
              © {new Date().getFullYear()} Store. All rights reserved. <br />
              <span className="text-gray-500">Designed and developed with ❤️</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
