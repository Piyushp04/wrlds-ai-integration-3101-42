import { Plug, CheckCircle, Settings, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const PsycIntegration = () => {
  const integrations = [
    {
      category: "Open Source Platforms",
      systems: [
        { name: "ArduPilot", status: "Full Support", description: "Complete integration with ArduPilot autopilot systems" },
        { name: "PX4", status: "Compatible", description: "Seamless compatibility with PX4 flight stack" },
        { name: "OpenDroneID", status: "Supported", description: "Remote ID compliance and integration" },
        { name: "MAVLink", status: "Native", description: "Native MAVLink protocol implementation" }
      ]
    },
    {
      category: "Commercial Systems",
      systems: [
        { name: "DJI SDK", status: "Certified", description: "Official DJI integration certification" },
        { name: "Autel", status: "Compatible", description: "Integration with Autel enterprise platforms" },
        { name: "Parrot", status: "Supported", description: "Parrot ANAFI and professional series support" },
        { name: "Skydio", status: "Integration", description: "AI-to-AI system integration capabilities" }
      ]
    },
    {
      category: "Drone Segments",
      systems: [
        { name: "Fixed-Wing", status: "Optimized", description: "Long-range fixed-wing platform optimization" },
        { name: "Multi-Rotor", status: "Enhanced", description: "Multi-rotor precision and stability enhancement" },
        { name: "VTOL", status: "Specialized", description: "Vertical takeoff and landing specialized systems" },
        { name: "Heavy-Lift", status: "Designed", description: "Heavy payload carrier optimization" }
      ]
    }
  ];

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Full Support": case "Certified": case "Native": case "Optimized":
        return "text-green-600 bg-green-50";
      case "Compatible": case "Supported": case "Enhanced": case "Specialized":
        return "text-blue-600 bg-blue-50";
      case "Integration": case "Designed":
        return "text-purple-600 bg-purple-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Integration Support</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Universal compatibility across drone ecosystems. Our systems integrate seamlessly with 
              both open-source and commercial platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {integrations.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="bg-gray-50 rounded-lg border border-gray-200 p-8"
                variants={itemVariants}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mr-4">
                    <Plug className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.systems.map((system, systemIndex) => (
                    <div key={systemIndex} className="bg-white rounded-lg p-4 border border-gray-100">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-black">{system.name}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(system.status)}`}>
                          {system.status}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{system.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Integration Process */}
          <motion.div 
            className="bg-black text-white rounded-lg p-12"
            variants={itemVariants}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Integration Process</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Assessment</h4>
                <p className="text-gray-300 text-sm">Platform analysis and compatibility evaluation</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Configuration</h4>
                <p className="text-gray-300 text-sm">Custom payload configuration and optimization</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Testing</h4>
                <p className="text-gray-300 text-sm">Comprehensive testing and validation protocols</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Deployment</h4>
                <p className="text-gray-300 text-sm">Full deployment and ongoing support</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition-colors inline-flex items-center">
                Start Integration
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PsycIntegration;