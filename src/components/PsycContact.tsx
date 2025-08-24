import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const PsycContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // You can integrate with services like:
      // 1. EmailJS (client-side email service)
      // 2. Formspree (form handling service)
      // 3. Netlify Forms (if hosting on Netlify)
      // 4. Your own backend API
      
      // For now, let's use a simple approach that logs and shows success
      console.log('Form submitted:', formData);
      
      // Show success message
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">Contact Us</h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-black mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Ready to discuss your aerospace and defence technology requirements? 
              Get in touch with our team of experts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-6 sm:mb-8">Get in Touch</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-black mb-1">Email</h4>
                    <p className="text-sm sm:text-base text-gray-600">info@psyc-aerospace.com</p>
                    <p className="text-sm sm:text-base text-gray-600">partnerships@psyc-aerospace.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-black mb-1">Phone</h4>
                    <p className="text-sm sm:text-base text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm sm:text-base text-gray-600">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-semibold text-black mb-1">Address</h4>
                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <p className="text-sm sm:text-base text-gray-600">
                          <strong className="block mb-1">Registered Office:</strong>
                          <span className="block">C/O T N VISHUKUMAR</span>
                          <span className="block">Lingadahalli Main Road</span>
                          <span className="block">Tarikere, Chickmagalur</span>
                          <span className="block">Karnataka - 577228</span>
                        </p>
                      </div>
                      
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 -mt-2">
                    <div className="order-2 md:order-1">
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        <strong className="block mb-2">Incubated at:</strong>
                        <span className="block">AIC-DSU Foundation</span>
                        <span className="block">VJPR+WGG, Service Rd</span>
                        <span className="block">Kudlu Main Rd, Srinivasa Nagar</span>
                        <span className="block">Hal Layout, Singasandra</span>
                        <span className="block">Bengaluru, Karnataka - 560068</span>
                      </p>
                    </div>
                    <div className="order-1 md:order-2 w-full h-48 sm:h-56 md:h-48 lg:h-52 xl:h-48 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30773064.056845006!2d61.04182762828652!3d19.69228278198373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15416ce4a1f1%3A0x3ed6fc32360ef825!2sAIC%20DSU%20Innovation%20Foundation!5e0!3m2!1sen!2sin!4v1756016851002!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="PSYC Office Locations - AIC-DSU Innovation Foundation"
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 sm:mt-12">
                <h4 className="text-base sm:text-lg font-semibold text-black mb-3 sm:mb-4">Business Hours</h4>
                <div className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM PST</p>
                  <p>Saturday: 9:00 AM - 2:00 PM PST</p>
                  <p>Sunday: Closed</p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">
                    * Emergency support available 24/7 for defence contracts
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-4 sm:p-6 md:p-8 border border-gray-200">
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">Send us a Message</h3>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md text-sm">
                    ✅ Thank you for your message! We will get back to you within 24 hours.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
                    ❌ Sorry, there was an error sending your message. Please try again or contact us directly.
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label htmlFor="company" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="integration">Integration Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="technical">Technical Support</option>
                      <option value="demo">Request Demo</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent transition-colors resize-vertical"
                    placeholder="Tell us about your project requirements, integration needs, or any questions you may have..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-md focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors flex items-center justify-center text-sm sm:text-base ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </>
                  )}
                </button>

                <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4 text-center">
                  * Required fields. We typically respond within 24 hours.
                </p>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PsycContact;