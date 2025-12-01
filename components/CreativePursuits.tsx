import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Music, Play, ExternalLink } from 'lucide-react';

const CreativePursuits: React.FC = () => {
  return (
    <section id="creative" className="py-24 bg-black relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-fixed bg-center mix-blend-overlay pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
            <span className="text-gold-500 font-mono text-sm tracking-widest uppercase">Beyond the Boardroom</span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mt-4">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Creative</span> Spirit
            </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Podcast Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-navy-900/50 backdrop-blur-md border border-slate-800 p-8 rounded-2xl hover:bg-navy-900/80 transition-all duration-300">
                <div className="flex items-center justify-between mb-8">
                    <div className="p-4 bg-red-600/20 text-red-500 rounded-2xl">
                        <Mic size={32} />
                    </div>
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">MIT OpenCourseWare</span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">Open Learners Podcast</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                I partnered with MIT to co-create and host "Chalk Radio Presents: Open Learners". We tell the stories of how open education transforms lives globally.
                </p>

                <div className="space-y-4">
                    <a href="https://global.mit.edu/news-stories/a-whole-new-world-of-learning-via-mit-opencourseware-videos/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors group/link">
                        <span className="text-white font-medium">Read the MIT News Feature</span>
                        <ExternalLink size={18} className="text-slate-500 group-hover/link:text-white" />
                    </a>
                    <a href="https://www.youtube.com/@mitocw/podcasts" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg hover:bg-red-900/20 hover:border-red-500/30 border border-transparent transition-all group/link">
                        <span className="text-white font-medium">Watch on YouTube</span>
                        <Play size={18} className="text-red-500" />
                    </a>
                </div>
            </div>
          </motion.div>

          {/* Music Section - "EKO Legend" */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl transform rotate-3 opacity-20 blur-lg group-hover:opacity-40 transition-opacity"></div>
            
            <div className="relative bg-navy-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/2 relative h-64 md:h-auto">
                    <img 
                        src="/emmanuel-music.jpg" 
                        alt="EKO Legend" 
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent md:bg-gradient-to-r"></div>
                </div>
                
                <div className="p-8 md:w-1/2 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                        <Music size={20} className="text-purple-500" />
                        <span className="text-purple-400 font-bold tracking-wider text-sm">EKO LEGEND</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">The Artist</h3>
                    <p className="text-slate-400 text-sm mb-6">
                        A 23-year journey in music. From a freestyle champion in high school to releasing "Recruited A Legend". Music taught me the discipline of creativity.
                    </p>
                    
                    <a href="https://soundcloud.com/ekolegend" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-sm font-bold transition-colors w-fit">
                        <Play size={16} fill="currentColor" /> Stream Mixtape
                    </a>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CreativePursuits;