
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle, Users, BadgeCheck, TrendingUp, Heart, Clock } from "lucide-react";

const AboutUs = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      bio: "Sarah founded our company with a vision to revolutionize online shopping. Her background in retail and technology has helped shape our customer-first approach."
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
      bio: "With over 15 years of experience in software development, Michael leads our engineering team in creating seamless shopping experiences."
    },
    {
      name: "Jessica Patel",
      role: "Head of Customer Experience",
      image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6",
      bio: "Jessica ensures that every customer interaction with our platform exceeds expectations. Her passion for service excellence is unmatched."
    },
    {
      name: "David Rodriguez",
      role: "Product Development Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      bio: "David oversees our product pipeline, ensuring we're always bringing innovative and high-quality items to our customers."
    }
  ];

  const valueProps = [
    { 
      icon: CheckCircle, 
      title: "Quality Assured", 
      description: "Every product undergoes rigorous quality checks before being listed on our platform." 
    },
    { 
      icon: Heart, 
      title: "Customer Obsessed", 
      description: "We put our customers at the center of everything we do, constantly improving based on feedback." 
    },
    { 
      icon: Clock, 
      title: "Fast Shipping", 
      description: "With warehouses strategically located across the country, we ensure swift delivery of your orders." 
    },
    { 
      icon: TrendingUp, 
      title: "Continuous Innovation", 
      description: "We're always looking for ways to improve our products and services to meet evolving customer needs." 
    },
    { 
      icon: Users, 
      title: "Community Focused", 
      description: "We actively engage with our community and support causes that matter to our customers." 
    },
    { 
      icon: BadgeCheck, 
      title: "Ethical Standards", 
      description: "We maintain high ethical standards in our business practices, from sourcing to employee treatment." 
    },
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
            className="space-y-16"
          >
            {/* Hero Section */}
            <div className="text-center">
              <motion.h1 
                className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                {...fadeIn}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                About Us
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                {...fadeIn}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                We're passionate about bringing you the best products with an exceptional shopping experience.
                Our journey started with a simple mission: to create an online destination where quality, 
                value, and customer satisfaction converge.
              </motion.p>
            </div>

            {/* Our Story Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur-lg opacity-30"></div>
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Our Team"
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover relative z-10"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-semibold">Our Story</h2>
                <p className="text-gray-600">
                  Founded with a vision to revolutionize online shopping, we've grown from a small startup
                  to a trusted e-commerce destination. Our journey has been driven by our commitment to
                  quality, innovation, and customer satisfaction.
                </p>
                <p className="text-gray-600">
                  What began in a small garage in 2015 has evolved into a global operation serving millions
                  of customers. Through challenges and victories, we've remained true to our core values
                  and mission to provide exceptional products and services.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-600">1M+</h3>
                    <p className="text-gray-600">Happy Customers</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-purple-600">50K+</h3>
                    <p className="text-gray-600">Products</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-purple-600">100+</h3>
                    <p className="text-gray-600">Countries Served</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-purple-600">250+</h3>
                    <p className="text-gray-600">Team Members</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Our Values Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl font-semibold mb-12">Our Values</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {valueProps.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                    className="p-6 bg-white rounded-lg shadow-md relative overflow-hidden group hover:shadow-xl transition-shadow"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    <div className="relative z-10">
                      <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                        <value.icon className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Our Mission and Vision */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-100"
              >
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-4">
                  To provide accessible, high-quality products while maintaining exceptional customer service
                  and fostering sustainable practices that benefit our communities and the planet.
                </p>
                <p className="text-gray-600">
                  We believe in creating value not just for our customers, but for everyone involved in our
                  business ecosystem, from suppliers to employees to the communities we serve.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="p-8 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-lg border border-pink-100"
              >
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p className="text-gray-600 mb-4">
                  To become the most trusted and innovative e-commerce platform, setting new standards for
                  online shopping experiences while driving positive change in the retail industry.
                </p>
                <p className="text-gray-600">
                  We envision a future where online shopping is not just convenient but also personalized,
                  sustainable, and community-oriented, creating connections beyond transactions.
                </p>
              </motion.div>
            </div>

            {/* Our Team */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="text-center"
            >
              <h2 className="text-3xl font-semibold mb-12">Meet Our Leadership Team</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 + (index * 0.1) }}
                    className="relative group"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-50 group-hover:opacity-100 blur transition duration-300"></div>
                    <div className="relative bg-white p-6 rounded-lg space-y-4">
                      <div className="h-40 w-40 mx-auto rounded-full overflow-hidden">
                        <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                      </div>
                      <h3 className="font-semibold text-lg">{member.name}</h3>
                      <p className="text-purple-600 font-medium">{member.role}</p>
                      <p className="text-gray-600 text-sm">{member.bio}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
