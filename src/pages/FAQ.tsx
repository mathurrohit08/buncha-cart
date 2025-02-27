
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Plus, Minus, Truck, Package, CreditCard, RotateCcw, Users, Globe, Mail, Clock, Shield } from "lucide-react";
import { useState } from "react";

const FAQItem = ({ question, answer, icon: Icon, imageUrl = null }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border rounded-lg overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between gap-4 bg-white hover:bg-gray-50 transition-colors text-left"
      >
        <div className="flex items-center gap-4">
          <div className="bg-purple-100 p-2 rounded-md">
            <Icon className="w-5 h-5 text-purple-600" />
          </div>
          <h2 className="text-lg font-semibold">{question}</h2>
        </div>
        <div>
          {isOpen ? (
            <Minus className="w-5 h-5 text-gray-500" />
          ) : (
            <Plus className="w-5 h-5 text-gray-500" />
          )}
        </div>
      </button>
      
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-6 pt-0 bg-white">
          <div className="pt-4 border-t">
            <p className="text-gray-600 mb-4">{answer}</p>
            
            {imageUrl && (
              <div className="mt-4 rounded-lg overflow-hidden">
                <img 
                  src={imageUrl} 
                  alt={question} 
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const FAQ = () => {
  const generalFaqs = [
    {
      question: "How do I create an account?",
      answer: "Creating an account is easy! Click on the 'Account' icon in the top right corner of the page and select 'Register'. Fill in your details, verify your email address, and you're all set to start shopping with us.",
      icon: Users,
      imageUrl: "https://images.unsplash.com/photo-1555421689-3f034debb7a6"
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can also view your order status by logging into your account and visiting the 'Order History' section. There you'll find detailed information about all your current and past orders.",
      icon: Package,
      imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. Shipping costs and times vary by location. During checkout, you can see the shipping options available for your country, along with estimated delivery times and costs.",
      icon: Globe,
      imageUrl: "https://images.unsplash.com/photo-1519861531473-9200262188bf"
    }
  ];

  const shippingFaqs = [
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 5-7 business days within the continental US. Express shipping takes 2-3 business days. For international orders, delivery times range from 7-21 days depending on your location and customs processing times.",
      icon: Truck,
      imageUrl: "https://images.unsplash.com/photo-1506306460327-3164753b74c5"
    },
    {
      question: "Is there free shipping?",
      answer: "Yes! We offer free standard shipping on all orders over $50 within the United States. International orders over $100 qualify for discounted shipping rates, which will be automatically applied during checkout.",
      icon: Truck,
      imageUrl: null
    },
    {
      question: "Can I change my shipping address after placing an order?",
      answer: "You can change your shipping address if your order hasn't been processed yet. Please contact our customer service team immediately with your order number and the new shipping details. Once an order has been shipped, we cannot redirect it to a different address.",
      icon: Package,
      imageUrl: null
    }
  ];

  const paymentFaqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept Visa, Mastercard, American Express, Discover, PayPal, Apple Pay, and Google Pay. All payments are securely processed and your financial information is never stored on our servers.",
      icon: CreditCard,
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
    },
    {
      question: "Is it safe to use my credit card on your website?",
      answer: "Yes, your security is our priority. We use industry-standard SSL encryption to protect your payment information. Additionally, we are PCI DSS compliant, which means we follow strict security standards established by the payment card industry.",
      icon: Shield,
      imageUrl: null
    },
    {
      question: "When will my credit card be charged?",
      answer: "Your credit card will be authorized when you place your order but will not be charged until your order ships. For pre-orders or backorders, we'll notify you before charging your card and shipping your items.",
      icon: CreditCard,
      imageUrl: null
    }
  ];

  const returnFaqs = [
    {
      question: "What is your return policy?",
      answer: "We accept returns within 30 days of delivery for a full refund. Items must be in their original condition with all tags and packaging intact. Please note that certain items like personalized products, intimate apparel, and sale items may have different return policies.",
      icon: RotateCcw,
      imageUrl: "https://images.unsplash.com/photo-1580674285054-bed31e145f59"
    },
    {
      question: "How do I start a return?",
      answer: "To initiate a return, log into your account, go to 'Order History', find the order with the item you want to return, and click 'Return Items'. Follow the instructions to generate a return shipping label and receive return authorization. Pack the items securely and attach the return label.",
      icon: Package,
      imageUrl: null
    },
    {
      question: "How long does it take to process a refund?",
      answer: "Once we receive your return, it typically takes 3-5 business days to inspect and process. After processing, refunds are issued to your original payment method. Credit card refunds may take an additional 5-10 business days to appear on your statement, depending on your bank's policies.",
      icon: Clock,
      imageUrl: null
    }
  ];

  const contactFaqs = [
    {
      question: "How can I contact customer service?",
      answer: "Our customer service team is available 24/7 through multiple channels. You can reach us via email at support@storex.com, through our website's live chat feature, or by phone at 1-800-STORE-X during business hours (9am-8pm EST, Monday through Friday).",
      icon: Mail,
      imageUrl: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624"
    },
    {
      question: "What is your response time for customer inquiries?",
      answer: "We strive to respond to all customer inquiries within 24 hours. For urgent matters, we recommend using our live chat feature for immediate assistance. Email responses may take 1-2 business days during peak seasons.",
      icon: Clock,
      imageUrl: null
    }
  ];

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
              <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about our products, ordering, shipping, and more.
              </p>
            </div>
            
            {/* Banner image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-lg overflow-hidden h-[250px] mb-12"
            >
              <img 
                src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d" 
                alt="Customer support" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-indigo-900/70 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h2 className="text-3xl font-bold mb-4">We're Here To Help</h2>
                  <p className="max-w-2xl mx-auto text-lg">
                    Can't find what you're looking for? Contact our support team for personalized assistance.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* FAQ Categories */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-purple-600" />
                General Questions
              </h2>
              <div className="grid gap-4">
                {generalFaqs.map((faq, index) => (
                  <FAQItem 
                    key={index} 
                    question={faq.question} 
                    answer={faq.answer} 
                    icon={faq.icon}
                    imageUrl={faq.imageUrl}
                  />
                ))}
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Truck className="w-6 h-6 text-purple-600" />
                Shipping
              </h2>
              <div className="grid gap-4">
                {shippingFaqs.map((faq, index) => (
                  <FAQItem 
                    key={index} 
                    question={faq.question} 
                    answer={faq.answer} 
                    icon={faq.icon}
                    imageUrl={faq.imageUrl}
                  />
                ))}
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-purple-600" />
                Payment
              </h2>
              <div className="grid gap-4">
                {paymentFaqs.map((faq, index) => (
                  <FAQItem 
                    key={index} 
                    question={faq.question} 
                    answer={faq.answer} 
                    icon={faq.icon}
                    imageUrl={faq.imageUrl}
                  />
                ))}
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <RotateCcw className="w-6 h-6 text-purple-600" />
                Returns & Refunds
              </h2>
              <div className="grid gap-4">
                {returnFaqs.map((faq, index) => (
                  <FAQItem 
                    key={index} 
                    question={faq.question} 
                    answer={faq.answer} 
                    icon={faq.icon}
                    imageUrl={faq.imageUrl}
                  />
                ))}
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Mail className="w-6 h-6 text-purple-600" />
                Contact & Support
              </h2>
              <div className="grid gap-4">
                {contactFaqs.map((faq, index) => (
                  <FAQItem 
                    key={index} 
                    question={faq.question} 
                    answer={faq.answer} 
                    icon={faq.icon}
                    imageUrl={faq.imageUrl}
                  />
                ))}
              </div>
            </section>
            
            {/* Contact Banner */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="mb-6 max-w-2xl mx-auto">
                Our support team is ready to assist you with any questions or concerns you may have.
                We're just a click away!
              </p>
              <button className="bg-white text-purple-600 hover:bg-gray-100 transition-colors px-6 py-3 rounded-lg font-medium">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
