import { Facebook, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-slate-800/50 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex gap-8 mb-8">
          <a href="https://www.facebook.com/profile.php?id=61587530903805" className="text-slate-500 hover:text-blue-400 transition-all transform hover:-translate-y-1">
            <Facebook size={24} />
          </a>
          <a href="https://www.linkedin.com/in/ariba-shah-23bb61201/" className="text-slate-500 hover:text-blue-400 transition-all transform hover:-translate-y-1">
            <Linkedin size={24} />
          </a>
          <a href="mailto:aribabasharat074@gmail.com" className="text-slate-500 hover:text-blue-400 transition-all transform hover:-translate-y-1">
            <Mail size={24} />
          </a>
        </div>
        <p className="text-slate-500 font-mono text-xs tracking-[0.2em] uppercase text-center">
          Crafted with design & code by <span className="text-slate-300 font-bold tracking-normal">Ariba Basharat</span> © 2026
        </p>
      </div>
    </footer>
  );
}