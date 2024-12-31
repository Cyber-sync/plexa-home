import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-gray-900/50 backdrop-blur-lg fixed w-full z-50 border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Plexa Nodes" 
              className="h-8 w-8 object-contain"
              style={{ imageRendering: 'pixelated' }}
            />
            <span className="ml-2 text-xl font-bold text-white">Plexa Nodes</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#pricing" className="text-gray-300 hover:text-blue-400 transition-colors">Pricing</a>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Get Started
            </motion.button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-blue-400"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-900/50 backdrop-blur-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#pricing" className="block px-3 py-2 text-gray-300 hover:text-blue-400">Pricing</a>
            <button className="w-full text-left bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700">
              discord
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}