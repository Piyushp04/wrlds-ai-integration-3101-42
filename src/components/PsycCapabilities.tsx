import { Brain, Camera, Cog, Shield, Radar, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const PsycCapabilities = () => {
  const capabilities = [
    {
      icon: Brain,
      title: "AI-First Payload Systems",
      description: "Advanced artificial intelligence algorithms optimized for real-time payload management and autonomous decision-making in critical aerospace operations.",
      features: ["Real-time processing", "Predictive analytics", "Autonomous optimization", "Machine learning adaptation"]
    },
    {
      icon: Camera,
      title: "Computer Vision Technology",
      description: "State-of-the-art computer vision systems providing enhanced situational awareness and object recognition capabilities for defence applications.",
      features: ["Object detection", "Terrain mapping", "Target identification", "Environmental analysis"]
    },
    {
      icon: Cog,
      title: "Automation Frameworks",
      description: "Comprehensive automation solutions designed to reduce human intervention while maintaining operational precision and safety standards.",
      features: ["Process automation", "System integration", "Error prevention", "Performance optimization"]
    },
    {
      icon: Shield,
      title: "Defence-Grade Security",
      description: "Military-standard security protocols ensuring data integrity and operational security in sensitive aerospace and defence environments.",
      features: ["Data encryption", "Secure communications", "Access control", "Threat mitigation"]
    },
    {
      icon: Radar,
      title: "Sensor Integration",
      description: "Multi-sensor fusion capabilities enabling comprehensive environmental awareness and enhanced operational effectiveness.",
      features: ["Multi-modal sensing", "Data fusion", "Environmental mapping", "Real-time monitoring"]
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "High-performance edge computing solutions for real-time processing and decision-making in bandwidth-constrained environments.",
      features: ["Low-latency processing", "Offline capability", "Resource optimization", "Distributed computing"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="capabilities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Capabilities</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge technologies and methodologies that define the future of aerospace and defence systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  variants={itemVariants}
                >
                  <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-black mb-4">{capability.title}</h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {capability.description}
                  </p>
                  
                  <div className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-black rounded-full mr-3 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            className="mt-16 text-center bg-black text-white rounded-lg p-12"
            variants={itemVariants}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to Deploy</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              All our systems are production-ready and designed for immediate integration 
              into existing aerospace and defence infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition-colors">
                Request Demo
              </button>
              <button className="px-8 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-black transition-colors">
                Technical Specifications
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PsycCapabilities;