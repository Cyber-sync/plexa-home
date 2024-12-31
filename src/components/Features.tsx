import React from 'react';
import { Shield, Clock, Server, HeartPulse, Cpu, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export function Features() {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Advanced Security",
      description: "Enterprise-grade security with DDoS protection and SSL certificates included."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "99.9% Uptime",
      description: "We guarantee your website will stay online with our reliable infrastructure."
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "SSD Storage",
      description: "Lightning-fast SSD storage for optimal performance and reliability."
    },
    {
      icon: <HeartPulse className="h-6 w-6" />,
      title: "Daily Backups",
      description: "Automatic daily backups to keep your data safe and secure."
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Resource Management",
      description: "Dedicated resources ensuring consistent performance."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Expert support team available around the clock to help you."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-900/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Why Choose Plexa Hosting?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            We provide everything you need to run your website successfully
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative p-6 bg-gray-800/50 backdrop-blur-lg rounded-lg border border-gray-700 hover:border-blue-500 transition-colors"
            >
              <div className="text-blue-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium text-white">{feature.title}</h3>
              <p className="mt-2 text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}