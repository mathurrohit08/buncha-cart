
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const careers = [
  {
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "New York, NY",
    type: "Full-time",
  },
  {
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Customer Support Representative",
    department: "Support",
    location: "Los Angeles, CA",
    type: "Full-time",
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-[1600px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold">Join Our Team</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Be part of something special. We're always looking for talented 
                individuals to join our growing team.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                  alt="Our Office"
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Why Join Us?</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">Growth Opportunities</h3>
                    <p className="text-gray-600">
                      We invest in our employees' professional development and 
                      provide clear career progression paths.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Competitive Benefits</h3>
                    <p className="text-gray-600">
                      Comprehensive health coverage, 401(k) matching, and generous 
                      PTO policy.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Work-Life Balance</h3>
                    <p className="text-gray-600">
                      Flexible work arrangements and a culture that respects your 
                      personal time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-semibold mb-8">Open Positions</h2>
              <div className="grid gap-6">
                {careers.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold">{job.title}</h3>
                        <div className="text-gray-600">
                          {job.department} · {job.location} · {job.type}
                        </div>
                      </div>
                      <Button>Apply Now</Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
