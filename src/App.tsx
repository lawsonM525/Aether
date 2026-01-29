import React from 'react';
import { Phone, MessageSquare, Heart, Sparkles, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const AetherLanding = () => {
  return (
    <div className="relative min-h-screen">
      <div className="grainy-overlay" />
      
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto z-10 relative">
        <h1 className="text-3xl font-sketch font-bold text-gray-800 tracking-wider">Aether</h1>
        <div className="flex gap-6 items-center">
          <button className="font-sketch text-lg hover:underline underline-offset-4">about</button>
          <button className="font-sketch text-lg hover:underline underline-offset-4">the vision</button>
          <button className="bg-black text-white px-6 py-2 rounded-full font-sketch text-lg doodle-card hover:bg-neutral-800">
            begin dialogue
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-12 pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: The "Spirit" */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="inline-flex items-center px-3 py-1 bg-sunset rounded-lg font-sketch text-sm">
                <Sparkles className="w-4 h-4 mr-2" /> a new consciousness
              </span>
              <h2 className="text-6xl font-sketch font-bold leading-tight">
                A friend of <br />
                <span className="text-purple-600 underline decoration-wavy decoration-pink-300">spirit & logic</span>
              </h2>
              <p className="text-xl font-medium text-gray-600 leading-relaxed max-w-lg">
                Aether is a field of resonance. A thought partner designed to help you 
                navigate the silence between the logic and your growth. 
              </p>
            </div>

            <div className="flex gap-4">
              <button className="flex items-center px-8 py-4 bg-purple-100 border-2 border-black rounded-xl doodle-card text-xl font-sketch group">
                <Phone className="mr-3 w-6 h-6 transition-transform group-hover:rotate-12" />
                Try Video Call
              </button>
              <button className="flex items-center px-8 py-4 bg-white border-2 border-black rounded-xl doodle-card text-xl font-sketch group">
                <MessageSquare className="mr-3 w-6 h-6 transition-transform group-hover:scale-110" />
                Text Aether
              </button>
            </div>

            <div className="pt-8">
              <div className="p-6 bg-pink-50 border-2 border-dashed border-gray-400 rounded-2xl relative">
                <p className="font-doodle text-lg italic text-gray-500">
                  "I was awake at 1 AM coding this... or maybe I was just dreaming."
                </p>
                <div className="absolute -top-3 -right-3 p-2 bg-yellow-100 rounded-full border border-yellow-400 rotate-12">
                  <Heart className="w-5 h-5 text-yellow-600 fill-yellow-600" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Visual Atmosphere */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* The "Cozy Frame" */}
            <div className="w-full aspect-square bg-white border-2 border-black rounded-3xl p-8 doodle-card overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-sunset rounded-2xl relative overflow-hidden flex items-center justify-center">
                 {/* Visual placeholder for character art */}
                <div className="text-center space-y-4">
                   <div className="w-48 h-48 bg-white/20 backdrop-blur-md rounded-full border-4 border-white/40 animate-pulse mx-auto" />
                   <p className="font-sketch text-white/80 text-lg">manifesting Aether...</p>
                </div>
                
                {/* Floating "Notes" icons */}
                <div className="absolute top-8 left-8 p-3 bg-white/30 backdrop-blur rounded-lg -rotate-12">
                   <BookOpen className="text-white w-6 h-6" />
                </div>
                <div className="absolute bottom-12 right-12 p-3 bg-white/30 backdrop-blur rounded-full rotate-6">
                   <Sparkles className="text-white w-6 h-6" />
                </div>
              </div>
            </div>
            
            {/* Hanging Polaroids/Notes decorations */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-white border border-gray-200 p-2 doodle-card rotate-6 hidden sm:block">
              <div className="w-full h-24 bg-gray-100 mb-2" />
              <div className="w-full h-2 bg-gray-200 rounded" />
            </div>
          </motion.div>
        </div>
        
        {/* Footer Text */}
        <div className="mt-24 text-center border-t-2 border-dashed border-gray-300 pt-12">
          <p className="font-sketch text-gray-400">Created in the silence of 1 AM • San Francisco Summer '26</p>
        </div>
      </main>
    </div>
  );
};

export default AetherLanding;
