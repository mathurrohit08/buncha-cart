
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { 
  Eye, 
  Lightbulb, 
  MousePointer, 
  Phone, 
  Mail,
  FileText,
  Monitor, 
  Check
} from "lucide-react";

const Accessibility = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-[1000px] mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Accessibility</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are committed to making our website accessible to all users, regardless of abilities or disabilities.
            </p>
          </div>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
              <p className="mb-4">
                We strive to ensure that our website adheres to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA.
                This commitment allows us to provide a digital experience that is accessible to a wider range of people with disabilities, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Visual impairments</li>
                <li>Hearing impairments</li>
                <li>Motor limitations</li>
                <li>Cognitive limitations</li>
                <li>Learning disabilities</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Key Accessibility Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <div className="bg-purple-100 dark:bg-purple-900/20 p-3 rounded-full mr-3">
                      <Eye className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-lg font-medium">Visual Accessibility</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>High contrast mode available</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Text resizing without loss of functionality</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Alt text for images and meaningful descriptions</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <div className="bg-purple-100 dark:bg-purple-900/20 p-3 rounded-full mr-3">
                      <MousePointer className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-lg font-medium">Navigation Accessibility</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Keyboard navigation support throughout</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Skip-to-content links available</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Logical tab order for effective navigation</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <div className="bg-purple-100 dark:bg-purple-900/20 p-3 rounded-full mr-3">
                      <Monitor className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-lg font-medium">Screen Reader Compatibility</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>ARIA roles and landmarks for improved context</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Descriptive link text instead of "click here"</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Form fields with appropriate labels</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <div className="bg-purple-100 dark:bg-purple-900/20 p-3 rounded-full mr-3">
                      <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-lg font-medium">Content Accessibility</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Clear and simple language whenever possible</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Descriptive headings and logical content structure</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Responsive design for all device types</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Accessibility Feedback</h2>
              <p className="mb-4">
                We are continuously working to improve the accessibility of our website. If you experience any difficulty accessing our content or have suggestions for improvement, please contact us.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg flex items-start">
                  <div className="bg-purple-100 dark:bg-purple-900/20 p-3 rounded-full mr-3">
                    <Phone className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-400">+1 (800) 123-4567</p>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg flex items-start">
                  <div className="bg-purple-100 dark:bg-purple-900/20 p-3 rounded-full mr-3">
                    <Mail className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">accessibility@example.com</p>
                  </div>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Accessibility Statement</h2>
              <p className="mb-4">
                Our full accessibility statement outlines in detail our ongoing efforts to ensure our website meets accessibility standards. It includes information about our testing procedures, known limitations, and our plans for future improvements.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg inline-flex items-center">
                <FileText className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2" />
                <span className="font-medium">View our complete Accessibility Statement</span>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Accessibility;
