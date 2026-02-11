"use client";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Code2, 
  Sparkles, 
  BookOpen, 
  Zap, 
  MoveRight 
} from "lucide-react";

export default function AboutPage() {
  const particles = Array.from({ length: 15 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <div className="relative min-h-screen bg-[#020617] text-white pt-32 pb-20 px-6 overflow-hidden">
      
      {/* KINETIC BACKGROUND */}
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
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* CINEMATIC HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-[1px] w-12 bg-blue-500"></span>
            <span className="text-blue-400 font-mono text-xs tracking-[0.3em] uppercase">The Biography</span>
          </motion.div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter italic leading-none mb-10">
            Ariba <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500">Basharat.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-2xl max-w-3xl leading-relaxed font-light">
            A <span className="text-white font-medium">Computer Science Engineer</span> passionate about blending creativity with technology. I build digital solutions that are not only functional, <span className="text-blue-400">but thoughtfully designed and impactful</span>.
            
          </p>
        </motion.div>

        {/* BENTO ARCHITECTURE SECTION */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* EDUCATION CARD */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 p-8 md:p-12 rounded-[40px] bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-all group overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <GraduationCap size={150} />
            </div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400">
                <BookOpen size={28} />
              </div>
              <h3 className="text-3xl font-bold italic">Education</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-white">BS Computer Science</h4>
                <p className="text-blue-400 font-mono text-sm mb-4">GC University Faisalabad | 2020 — 2024</p>
                <div className="flex items-center gap-6">
                   <div className="bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700">
                      <span className="text-xs text-slate-500 uppercase block">Academic Stand</span>
                      <span className="text-xl font-black text-white italic">CGPA 3.37</span>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* QUICK STATS */}
          <motion.div 
            variants={itemVariants}
            className="p-8 md:p-12 rounded-[40px] bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex flex-col justify-between"
          >
            <Zap size={40} className="mb-8" />
            <div>
              <h4 className="text-5xl font-black mb-2 italic">1+</h4>
              <p className="text-blue-100 font-medium">Years of Hands-On Experience in Modern Web Development</p>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-sm opacity-80">Specializing in API Integrations & Modular Architecture.</p>
            </div>
          </motion.div>

          {/* EXPERIENCE TIMELINE CARD */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-3 p-8 md:p-12 rounded-[40px] bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 transition-all group relative"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
               <div className="flex items-center gap-4">
                  <div className="p-4 bg-cyan-500/10 rounded-2xl text-cyan-400">
                    <Briefcase size={28} />
                  </div>
                  <h3 className="text-3xl font-bold italic">Career Journey</h3>
               </div>
               <span className="text-xs font-mono text-slate-500 tracking-widest uppercase bg-slate-800 px-4 py-2 rounded-full">Work Experience</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="relative pl-8 border-l border-slate-800">
                  <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[6.5px] top-2 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                  <h4 className="text-xl font-bold text-white mb-1">Aethon Company</h4>
                  <p className="text-cyan-400 font-mono text-xs mb-4">Frontend Developer | Nov 2024 — Jan 2026</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Spearheaded the conversion of complex UI/UX designs into functional web pages. Collaborated with backend teams to ensure seamless API integration and high-speed performance.
                  </p>
               </div>
               
               <div className="relative pl-8 border-l border-slate-800">
                  <div className="absolute w-3 h-3 bg-slate-700 rounded-full -left-[6.5px] top-2" />
                  <h4 className="text-xl font-bold text-white mb-1">Internship Certificate</h4>
                  <p className="text-slate-500 font-mono text-xs mb-4">Aethon Company</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Developed fundamental skills in performance optimization and cross-browser compatibility during intensive technical training.
                  </p>
               </div>
            </div>
          </motion.div>

          {/* CORE PHILOSOPHY CARD */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-3 p-12 rounded-[50px] bg-blue-600/5 border border-blue-500/20 flex flex-col md:flex-row items-center gap-10"
          >
            <div className="p-6 bg-blue-500/10 rounded-full text-blue-400 animate-pulse">
              <Award size={48} />
            </div>
            <div>
               <h4 className="text-3xl font-bold italic mb-4">Problem Solving Strategy</h4>
               <p className="text-slate-400 leading-relaxed">
                 I don't just write code; I design systems. Whether it's a high-performance React application or a custom WordPress architecture, I focus on delivering scalable and visually appealing digital solutions that solve real-world problems.
               </p>
            </div>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/work"
              className="whitespace-nowrap flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-black hover:bg-blue-500 hover:text-white transition-all group"
            >
              VIEW PROJECTS <MoveRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}