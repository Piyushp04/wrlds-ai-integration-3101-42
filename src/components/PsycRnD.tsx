import { Beaker, Lightbulb, Cog, Target, TrendingUp, Zap } from "lucide-react";
import { motion } from "framer-motion";

const PsycRnD = () => {
  const researchAreas = [
    {
      icon: Beaker,
      title: "Advanced Payload Systems",
      description: "Research into next-generation payload architectures for enhanced mission capabilities",
      progress: 85,
      status: "Active Development",
      highlights: [
        "Modular payload frameworks",
        "Multi-mission adaptability", 
        "Weight optimization",
        "Power efficiency"
      ]
    },
    {
      icon: Lightbulb,
      title: "AI Vision Technology",
      description: "Cutting-edge computer vision and machine learning algorithms for autonomous operations",
      progress: 78,
      status: "Beta Testing",
      highlights: [
        "Real-time object recognition",
        "Predictive analytics",
        "Environmental adaptation",
        "Edge AI processing"
      ]
    },
    {
      icon: Cog,
      title: "Automation Operating Systems",
      description: "Intelligent OS frameworks for autonomous decision-making and system optimization",
      progress: 92,
      status: "Production Ready",
      highlights: [
        "Autonomous navigation",
        "Mission planning",
        "Resource management",
        "Fault tolerance"
      ]
    }
  ];

  const innovations = [
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Advanced algorithms for high-precision target acquisition and tracking"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Real-time performance monitoring and optimization systems"
    },
    {
      icon: Zap,
      title: "Energy Management",
      description: "Intelligent power distribution and consumption optimization"
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

  return (
    <section id="rnd" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Research & Development</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future of aerospace technology through continuous innovation and 
              cutting-edge research initiatives.
            </p>
          </motion.div>

          {/* Main R&D Areas */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {researchAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-all duration-300"
                  variants={itemVariants}
                >
                  <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      area.status === 'Production Ready' ? 'bg-green-100 text-green-800' :
                      area.status === 'Beta Testing' ? 'bg-blue-100 text-blue-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {area.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-black mb-4">{area.title}</h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {area.description}
                  </p>

                  {/* Progress bar */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Development Progress</span>
                      <span className="text-sm font-medium text-gray-900">{area.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-black h-2 rounded-full transition-all duration-500" 
                        style={{ width: `${area.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-black mb-2">Key Highlights:</h4>
                    {area.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-black rounded-full mr-3 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Innovation Areas */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-bold text-black text-center mb-12">Innovation Focus Areas</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {innovations.map((innovation, index) => {
                const IconComponent = innovation.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-black mb-4">{innovation.title}</h4>
                    <p className="text-gray-600">{innovation.description}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Research Partnership CTA */}
          <motion.div 
            className="bg-black text-white rounded-lg p-12 text-center"
            variants={itemVariants}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Research Partnerships</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              We collaborate with leading academic institutions and industry partners to advance 
              the frontiers of aerospace and defence technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition-colors">
                Partnership Opportunities
              </button>
              <button className="px-8 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-black transition-colors">
                Research Publications
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PsycRnD;