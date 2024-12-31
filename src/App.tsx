import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { Background } from './components/Background';
import { motion } from 'framer-motion';

function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen relative"
    >
      <Background />
      <Navbar />
      <Hero />
      <Pricing />
      <Footer />
    </motion.div>
  );
}

export default App;