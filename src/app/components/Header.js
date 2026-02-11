"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'ABOUT', href: '/about' },
    { name: 'SKILLS', href: '/skills' },
    { name: 'WORK', href: '/work' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] bg-[#0f172a]/80 backdrop-blur-lg border-b border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="group">
          <span className="text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-blue-400 transition-all">
            AB.
          </span>
        </Link>

        {/* Desktop Nav - Added text-white here */}
        <div className="hidden md:flex items-center space-x-10 text-sm font-bold tracking-widest text-white">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="hover:text-blue-400 transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
         <a 
  href="https://wa.me/923339878148" 
  target="_blank" 
  rel="noopener noreferrer"
  className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-2.5 rounded-full transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] active:scale-95 flex items-center gap-2 font-bold"
>
  <svg 
    viewBox="0 0 24 24" 
    width="18" 
    height="18" 
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
  LET'S TALK
</a>
        </div>

        {/* Mobile Toggle Icon - Always white */}
        <button className="md:hidden text-white outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-20 bg-[#0f172a] z-50 flex flex-col items-center pt-10 space-y-8 md:hidden h-screen"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="mailto:aribabasharat074@gmail.com" 
              className="text-xl text-blue-400 border-2 border-blue-400 px-10 py-3 rounded-full font-bold active:bg-blue-400 active:text-white transition-all"
            >
              HIRE ME
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}