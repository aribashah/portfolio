"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, ShoppingBag, 
  Sparkles, Globe, Code2
} from 'lucide-react';

export default function WorkPage() {
  const particles = Array.from({ length: 20 });

  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-200 overflow-x-hidden pt-24 pb-24 px-4 md:px-6">
      
      {/* KINETIC BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
            initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%" }}
            animate={{ y: [null, "-100%"], opacity: [0, 1, 0] }}
            transition={{ duration: Math.random() * 12 + 8, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
       {/* TOP PRIVACY BANNER */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8 md:mb-12 flex items-center justify-center px-2"
        >
          <div className="inline-flex items-center gap-3 px-4 md:px-6 py-3 rounded-2xl md:rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-md max-w-full">
            <ShieldCheck className="text-amber-500 shrink-0" size={18} />
            <p className="text-[10px] md:text-sm font-medium text-amber-200 uppercase tracking-wider leading-tight">
              Corporate Privacy: Some of my enterprise work is protected by company policies and non-disclosure agreements.
            </p>
          </div>
        </motion.div>

        {/* MAIN HEADER */}
        <div className="flex flex-col mb-20">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter italic leading-none">
              PORTFOLIO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
                EXHIBITION.
              </span>
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            {['WordPress Expert', 'Next.js Specialist', 'E-commerce Architect', 'Static Web Designer'].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-blue-300">
                {skill}
              </span>
            ))}
          </motion.div>
        </div>

        {/* SECTION: WEBSITE CREATIONS (Original Sizes) */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-bold italic">Featured Web Projects</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden bg-slate-900/30 border border-white/10 flex items-center justify-center p-2"
              >
                <img 
                  src={`/websites/website${item}.png`} 
                  alt={`Website ${item}`} 
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </motion.div>
            ))}
          </div>
        </div>

       {/* SECTION: DIGITAL MEDIA GALLERY (Two Rows - Original Sizes) */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[1px] flex-1 bg-gradient-to-l from-purple-500/50 to-transparent"></div>
            <h2 className="text-3xl font-bold italic text-right">Digital Media Gallery</h2>
          </div>

          {/* Changed lg:grid-cols-7 to lg:grid-cols-4. 
              With 7 videos, this creates 4 on the first row and 3 on the second.
          */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7].map((v) => (
              <motion.div 
                key={v} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: v * 0.1 }}
                className="relative aspect-[9/16] rounded-2xl bg-slate-900/30 border border-white/5 overflow-hidden shadow-2xl"
              >
                <video 
                  src={`/videos/video${v}.mp4`} 
                  className="w-full h-full object-contain"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* SERVICE STACKS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-8 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-sm">
            <Code2 className="text-blue-400 mb-4" />
            <h4 className="font-bold mb-2">Next.js & Tailwind</h4>
            <p className="text-xs text-slate-400">High-speed static & dynamic websites built with modern frontend frameworks.</p>
          </div>
          <div className="p-8 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-sm">
            <ShoppingBag className="text-green-400 mb-4" />
            <h4 className="font-bold mb-2">E-Commerce</h4>
            <p className="text-xs text-slate-400">Full-scale online stores with seamless checkout and inventory management.</p>
          </div>
          <div className="p-8 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-sm">
            <Globe className="text-cyan-400 mb-4" />
            <h4 className="font-bold mb-2">WordPress</h4>
            <p className="text-xs text-slate-400">Professional business sites and CMS solutions for easy content control.</p>
          </div>
          <div className="p-8 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-sm">
            <Sparkles className="text-purple-400 mb-4" />
            <h4 className="font-bold mb-2">Digital Invitations</h4>
            <p className="text-xs text-slate-400">Premium motion graphics for weddings, birthdays, and corporate events.</p>
          </div>
        </div>

      </div>
    </div>
  );
}