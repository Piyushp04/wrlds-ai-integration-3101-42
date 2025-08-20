import { Target, Zap, Globe } from "lucide-react";
import { motion } from "framer-motion";

const PsycAbout = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">About PSYC</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are at the forefront of aerospace and defence innovation, specializing in AI-first payload systems 
              that redefine what's possible in autonomous operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                PSYC is dedicated to advancing the boundaries of autonomous systems through cutting-edge research 
                and development in computer vision and automation technologies. We focus on creating intelligent 
                payload systems that seamlessly integrate with existing drone platforms while pushing the envelope 
                of what's achievable in aerospace and defence applications.
              </p>
              
              <h4 className="text-xl font-semibold text-black mb-4">Key Focus Areas:</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Advanced AI algorithms for real-time payload optimization</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Computer vision systems for enhanced situational awareness</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Cross-platform integration solutions</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Autonomous operating systems for defence applications</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={itemVariants}
            >
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-black mb-2">Precision Focus</h4>
                <p className="text-gray-600 text-sm">
                  Every system we develop is engineered with military-grade precision and reliability standards.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-black mb-2">Innovation Drive</h4>
                <p className="text-gray-600 text-sm">
                  Continuous R&D ensures our solutions stay ahead of evolving aerospace challenges.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow sm:col-span-2">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-black mb-2">Global Integration</h4>
                <p className="text-gray-600 text-sm">
                  Our systems integrate seamlessly with both open-source platforms like Ardupilot 
                  and proprietary systems like DJI, ensuring maximum compatibility and deployment flexibility.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PsycAbout;