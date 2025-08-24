import { ArrowRight, Cpu, Eye, Zap } from "lucide-react";
import { motion } from "framer-motion";

const PsycHero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section id="home" className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, white 1px, transparent 1px),
                           radial-gradient(circle at 80% 20%, white 1px, transparent 1px),
                           radial-gradient(circle at 40% 40%, white 1px, transparent 1px)`,
          backgroundSize: '100px 100px, 150px 150px, 200px 200px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20">
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6"
            variants={itemVariants}
          >
            <span className="block">PSYC</span>
            <span className="block text-gray-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-1 sm:mt-2">
              Aerospace and Defence Industries
            </span>
          </motion.h1>

          <motion.div 
            className="w-16 sm:w-20 md:w-24 h-1 bg-white mx-auto mb-6 sm:mb-8"
            variants={itemVariants}
          ></motion.div>

          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-200 mb-8 sm:mb-10 md:mb-12 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
            variants={itemVariants}
          >
            AI-First Payload Systems | Computer Vision & Automation for Next-Gen Drones
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-14 md:mb-16"
            variants={itemVariants}
          >
            <button
              onClick={() => scrollToSection('capabilities')}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition-all duration-300 flex items-center justify-center group text-sm sm:text-base"
            >
              Explore Capabilities
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 sm:px-8 py-3 sm:py-4 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base"
            >
              Get in Touch
            </button>
          </motion.div>

          {/* Feature highlights */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-18 md:mt-20"
            variants={containerVariants}
          >
            <motion.div 
              className="text-center p-4 sm:p-6 border border-gray-700 rounded-lg hover:border-gray-500 transition-colors"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI-First Systems</h3>
              <p className="text-gray-400 text-sm">Advanced AI-powered payload systems designed for next-generation applications</p>
            </motion.div>

            <motion.div 
              className="text-center p-6 border border-gray-700 rounded-lg hover:border-gray-500 transition-colors"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Computer Vision</h3>
              <p className="text-gray-400 text-sm">Cutting-edge computer vision technologies for enhanced automation</p>
            </motion.div>

            <motion.div 
              className="text-center p-6 border border-gray-700 rounded-lg hover:border-gray-500 transition-colors"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Universal Integration</h3>
              <p className="text-gray-400 text-sm">Compatible with Ardupilot, DJI, and wide range of drone ecosystems</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PsycHero;