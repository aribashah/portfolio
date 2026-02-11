"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Code2, Globe, ArrowRight, Zap, Palette, Sparkles, 
  CheckCircle2, MousePointer2 
} from 'lucide-react';

export default function Portfolio() {
  const particles = Array.from({ length: 20 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-200 overflow-hidden font-sans">
      
      {/* 1. KINETIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
            initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%" }}
            animate={{ y: [null, "-100%"], opacity: [0, 1, 0] }}
            transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear" }}
          />
        ))}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px]" />
      </div>

      <main className="max-w-7xl mx-auto px-6 pt-28 pb-24 relative z-10">
        
       {/* 2. PREMIUM HERO SECTION */}
        <section className="min-h-[50vh] md:min-h-[80vh] flex flex-col justify-center items-start mb-12 md:mb-24 pt-4 md:pt-0">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] md:text-xs font-mono tracking-widest mb-6 md:mb-10 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              <Sparkles size={14} className="animate-pulse" /> WEB DEVELOPER & DESIGNER
            </div>

            <h1 className="text-5xl md:text-9xl font-black text-white mb-4 md:mb-8 tracking-tighter leading-[1.1] md:leading-[0.8] italic">
              Ariba <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
                Basharat.
              </span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-slate-400 text-base md:text-2xl max-w-3xl mb-8 md:mb-12 leading-relaxed font-light"
            >
             I design and build <span className="text-white">modern, high-performance websites</span> that are fast, visually engaging, and easy to use.
            </motion.p>

            <motion.div className="flex flex-wrap gap-6">
              <Link href="/work" className="group relative w-full sm:w-auto">
                <motion.div 
                   whileHover={{ scale: 1.05, y: -5 }}
                   whileTap={{ scale: 0.95 }}
                   className="relative z-10 flex items-center justify-center gap-3 bg-white text-[#020617] px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black transition-all hover:bg-blue-400 hover:text-white shadow-xl"
                >
                  EXPLORE PROJECTS
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </motion.div>
                <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-0 group-hover:opacity-30 transition-opacity" />
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* 3. ENHANCED BENTO SKILLS GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Frontend Card */}
          <motion.div variants={cardVariants} className="group relative p-10 rounded-[45px] bg-[#0f172a]/40 border border-slate-800/50 backdrop-blur-2xl hover:border-blue-500/50 transition-all overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
              <Code2 size={120} />
            </div>
            <div className="mb-8 p-5 bg-gradient-to-br from-blue-600 to-blue-400 w-fit rounded-3xl text-white shadow-lg shadow-blue-500/20">
              <Code2 size={32} />
            </div>
            <h4 className="text-4xl font-bold mb-4 text-white tracking-tight">Frontend Development</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">Architecting high-performance web interfaces.</p>
            <div className="space-y-3">
              {['Next.js 14', 'React.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS'].map((s) => (
                <div key={s} className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle2 size={16} className="text-blue-500" /> {s}
                </div>
              ))}
            </div>
          </motion.div>

          {/* WordPress Card */}
          <motion.div variants={cardVariants} className="group relative p-10 rounded-[45px] bg-[#0f172a]/40 border border-slate-800/50 backdrop-blur-2xl hover:border-cyan-500/50 transition-all overflow-hidden">
            <div className="mb-8 p-5 bg-gradient-to-br from-cyan-500 to-blue-500 w-fit rounded-3xl text-white shadow-lg shadow-cyan-500/20">
              <Globe size={32} />
            </div>
            <h4 className="text-4xl font-bold mb-4 text-white tracking-tight">WordPress Development </h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">Transforming complex business requirements into scalable ecosystems.</p>
            <div className="space-y-3">
              {['Elementor Pro', 'Custom Theme Styling', 'Performance Tuning', 'Plugin Integration'].map((s) => (
                <div key={s} className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle2 size={16} className="text-cyan-400" /> {s}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Creative Media Card */}
          <motion.div variants={cardVariants} className="group relative p-10 rounded-[45px] bg-[#0f172a]/40 border border-slate-800/50 backdrop-blur-2xl hover:border-purple-500/50 transition-all overflow-hidden">
            <div className="mb-8 p-5 bg-gradient-to-br from-purple-600 to-pink-500 w-fit rounded-3xl text-white shadow-lg shadow-purple-500/20">
              <Palette size={32} />
            </div>
            <h4 className="text-4xl font-bold mb-4 text-white tracking-tight">Creative Digital Media</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">Crafting emotional digital experiences through high-end invitation cards.</p>
            <div className="space-y-3">
              {['Wedding & Engagement Invitations', 'Birthday & Celebration E-Cards', 'Motion Video Invitations', 'Custom Anniversary & Event Cards'].map((s) => (
                <div key={s} className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle2 size={16} className="text-purple-400" /> {s}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

       {/* 4. FINAL CTA STRIP */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 md:mt-32 p-6 md:p-12 rounded-[30px] md:rounded-[50px] bg-gradient-to-r from-blue-600/10 to-transparent border border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2 italic leading-tight">Ready to innovate?</h2>
            <p className="text-slate-400 text-sm md:text-base">Let's build something extraordinary together.</p>
          </div>
          <a 
            href="mailto:aribabasharat074@gmail.com" 
            className="group flex items-center justify-center gap-3 bg-blue-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20 w-full md:w-auto"
          >
            START A CONVERSATION 
            <MousePointer2 size={18} className="group-hover:rotate-12 transition-transform" />
          </a>
        </motion.div>
      </main>
    </div>
  );
}