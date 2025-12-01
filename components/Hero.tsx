import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Linkedin, Github, Mail, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-navy-950">
      {/* Background - Simulating a high-end abstract data visualization/tech background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/95 to-navy-950/80 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
          alt="Data Background" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="container mx-auto px-6 z-20 relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 space-y-8 pt-20 lg:pt-0"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gold-500/30 rounded-full bg-gold-500/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
            <span className="text-gold-400 font-medium tracking-widest text-xs uppercase">Data Scientist &middot; Entrepreneur &middot; Leader</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-serif font-bold text-white leading-[0.9] tracking-tight">
            Emmanuel <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-200 to-gold-500">Olimi Kasigazi</span>
          </h1>
          
          <p className="text-lg lg:text-2xl text-slate-300 max-w-2xl leading-relaxed font-light">
            Architecting the future at the intersection of <span className="text-white font-medium border-b border-gold-500/50">Data Intelligence</span> and <span className="text-white font-medium border-b border-gold-500/50">Global Impact</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <a href="#work" className="px-8 py-4 bg-white text-navy-950 font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-gold-500 transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-gold-500/20">
              View Ventures
            </a>
            <a href="#contact" className="px-8 py-4 border border-slate-700 text-white font-bold text-sm tracking-widest uppercase rounded-sm hover:border-gold-500 hover:text-gold-500 transition-all duration-300 flex items-center justify-center gap-2 group">
              Contact Me <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex gap-8 pt-8 text-slate-500 items-center">
            <div className="h-px w-12 bg-slate-800"></div>
            <a href="https://linkedin.com/in/olimiemma" target="_blank" rel="noreferrer" className="hover:text-white transition-colors hover:scale-110 duration-300"><Linkedin size={24} /></a>
            <a href="https://github.com/olimiemma" target="_blank" rel="noreferrer" className="hover:text-white transition-colors hover:scale-110 duration-300"><Github size={24} /></a>
            <a href="mailto:olimiemma@gmail.com" className="hover:text-white transition-colors hover:scale-110 duration-300"><Mail size={24} /></a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative h-full flex items-end justify-center lg:justify-end"
        >
          {/* Main Image Container */}
          <div className="relative w-full max-w-md lg:max-w-full lg:h-[85vh] z-10">
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent z-20 pointer-events-none"></div>
            <img 
              src="/emmanuel-suit.jpg" 
              alt="Emmanuel Olimi Kasigazi" 
              className="w-full h-full object-cover object-top lg:object-center mask-image-gradient rounded-t-2xl lg:rounded-none shadow-2xl filter contrast-110 saturate-105"
            />
            
            {/* Floating Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-10 -left-6 lg:-left-12 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-sm max-w-xs z-30 hidden md:block"
            >
              <p className="text-gold-400 text-xs font-bold uppercase tracking-wider mb-2">Current Focus</p>
              <p className="text-white text-sm font-medium">Leading AI Education Strategy @ NSF I-Corps & President @ KASA</p>
            </motion.div>
          </div>
          
          {/* Decorative Background Blob */}
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen" />
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hidden lg:block"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;