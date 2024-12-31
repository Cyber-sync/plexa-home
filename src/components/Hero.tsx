import React from 'react';
import { Gamepad2, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-20 relative">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <motion.div variants={item} className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Premium Minecraft Hosting</span>
            <span className="block text-blue-400">Power Your Adventure</span>
          </h1>
          <motion.p variants={item} className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Experience lag-free Minecraft hosting with instant setup, powerful hardware, and 24/7 support. Start your server today!
          </motion.p>
          <motion.div variants={item} className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <motion.div whileHover={{ scale: 1.05 }} className="rounded-md shadow">
              <a href="#pricing" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors">
                <Gamepad2 className="w-6 h-6 mr-2" />
                Free Hosting
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a href="#pricing" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-400 bg-gray-900 hover:bg-gray-800 md:py-4 md:text-lg md:px-10 transition-colors">
                <Rocket className="w-6 h-6 mr-2" />
                Premium Hosting
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}