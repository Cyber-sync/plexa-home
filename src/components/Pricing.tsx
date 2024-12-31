import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "0",
      features: [
        "2GB RAM",
        "100% CPU",
        "5GB SSD Storage",
        "Basic Support",
        "2 Player Slots",
        "99.9% Uptime",
        "Basic Plugin Support"
      ]
    },
    {
      name: "Premium",
      price: "4.99",
      popular: true,
      features: [
        "4GB RAM",
        "150% CPU",
        "15GB SSD Storage",
        "Priority Support",
        "Unlimited Players",
        "99.9% Uptime",
        "Full Plugin Support",
        "Modpack Support",
        "Custom Domain"
      ]
    },
    {
      name: "Ultimate",
      price: "9.99",
      features: [
        "8GB RAM",
        "300% CPU",
        "40GB SSD Storage",
        "24/7 Premium Support",
        "Unlimited Players",
        "99.9% Uptime",
        "Full Plugin Support",
        "Modpack Support",
        "Custom Domain",
        "Dedicated IP",
        "Server Backup"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-900/30 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Choose Your Server Plan
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            From free to premium, we have the perfect plan for your Minecraft server
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`relative p-8 bg-gray-800/50 backdrop-blur-lg rounded-lg border ${plan.popular ? 'border-blue-500 shadow-xl shadow-blue-500/20' : 'border-gray-700'}`}
            >
              {plan.popular && (
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <div className="mt-4 flex justify-center items-baseline">
                  <span className="text-4xl font-extrabold text-white">${plan.price}</span>
                  <span className="ml-1 text-xl text-gray-400">/month</span>
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-blue-400 mr-2" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-8 w-full py-3 px-6 rounded-md ${
                    plan.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  } transition-colors`}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}