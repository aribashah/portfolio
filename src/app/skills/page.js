"use client";
import React from 'react';
import { motion } from "framer-motion";
import { 
  Code2, Globe, Palette, Zap, CheckCircle2, 
  Cpu, Rocket, Star, MousePointer2, Video 
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code2 size={38} />,
    gradient: "from-blue-500 to-indigo-600",
    skills: ["Next.js 14", "React.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS"],
    description: "Building fast, responsive, and SEO-friendly websites using modern JavaScript frameworks and clean UI practices."
  },
  {
    title: "WordPress Development",
    icon: <Globe size={38} />,
    gradient: "from-cyan-400 to-blue-500",
    skills: ["Elementor Pro", "Custom Theme Styling", "Performance Tuning", "Plugin Integration"],
    description: "Turning business requirements into scalable, easy-to-manage WordPress websites with custom design and high performance."
  },
  {
    title: "Creative Digital Media",
    icon: <Palette size={38} />,
    gradient: "from-purple-500 to-pink-500",
    skills: ["Wedding & Engagement Invitations", "Birthday & Celebration E-Cards", "Motion Video Invitations", "Custom Anniversary & Event Cards"],
    description: "Designing engaging digital invitations and visual content that combine creativity with motion and storytelling."
  }
];

export default function SkillsPage() {
  const particles = Array.from({ length: 25 });

  return (
    <div className="relative min-h-screen bg-[#020617] text-white pt-32 pb-20 px-6 overflow-hidden">
      
      {/* 1. KINETIC BACKGROUND ENGINE */}
      <div className="absolute inset-0 z-0">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              scale: Math.random() * 2
            }}
            animate={{ 
              y: ["0%", "-100%"],
              opacity: [0, 1, 0] 
            }}
            transition={{ 
              duration: Math.random() * 20 + 10, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        ))}
        {/* Deep Radial Glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 2. CINEMATIC HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <motion.span 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="inline-block py-1 px-4 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-mono tracking-[0.4em] uppercase mb-6"
          >
            Powering the Digital Future
          </motion.span>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 italic">
           My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500">Expertise.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-slate-400 text-lg md:text-xl font-light leading-relaxed">
            I design and build <span className="text-white font-medium">fast, modern websites and digital experiences</span> that are visually engaging and <span className="text-white font-medium">technically solid.</span>.
          </p>
        </motion.div>

        {/* 3. BENTO SKILLS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="group relative p-1 rounded-[45px] bg-gradient-to-b from-slate-700/50 to-transparent hover:from-blue-500/50 transition-all duration-500"
            >
              <div className="bg-[#0f172a]/90 backdrop-blur-3xl p-10 rounded-[44px] h-full flex flex-col">
                
                {/* Icon Animation */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i }}
                  className={`mb-8 p-6 w-fit rounded-3xl bg-gradient-to-br ${cat.gradient} text-white shadow-2xl shadow-blue-500/20`}
                >
                  {cat.icon}
                </motion.div>

                <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-blue-400 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-10">
                  {cat.description}
                </p>

                <div className="space-y-4 mt-auto">
                  {cat.skills.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between group/line">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-blue-500 group-hover/line:rotate-[360deg] transition-transform duration-500" />
                        <span className="text-slate-300 font-medium">{skill}</span>
                      </div>
                      <div className="h-[1px] w-0 bg-blue-500/50 group-hover/line:w-12 transition-all duration-300" />
                    </div>
                  ))}
                </div>

                {/* Floating "Action" Indicator */}
               
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4. BOTTOM EXPERIENCE STRIP */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 p-10 rounded-[40px] border border-slate-800 bg-slate-900/30 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="p-4 bg-blue-500/20 rounded-full text-blue-400 animate-spin-slow">
              <Cpu size={32} />
            </div>
            <div>
              <h4 className="text-2xl font-bold">Always Learning, Always Improving</h4>
              <p className="text-slate-500">I constantly explore new tools and technologies to deliver modern, future-ready solutions.</p>
            </div>
          </div>
         <a 
  href="mailto:aribabasharat074@gmail.com" 
  className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-black hover:bg-blue-500 hover:text-white transition-all group"
>
  START A PROJECT 
  <MousePointer2 size={18} className="group-hover:translate-x-2 transition-transform" />
</a>
        </motion.div>
      </div>
    </div>
  );
}