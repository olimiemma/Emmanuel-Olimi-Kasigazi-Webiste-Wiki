import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Award, Rocket } from 'lucide-react';
import { TimelineEvent } from '../types';

const timelineData: TimelineEvent[] = [
  {
    year: "1989 - 2008",
    title: "Origins & Resilience",
    location: "Uganda",
    description: "Born in Entebbe. Raised by a lineage of strong women after losing my father early. Displaced by conflict in the Rwenzori region, which forged an unshakeable resilience and drive for stability.",
    icon: <MapPin size={18} />
  },
  {
    year: "2009",
    title: "The First Venture",
    location: "Kampala",
    description: "Founded Wazi Group Ltd during freshman year. Hired my first employee at 19. Scaled from a tech firm into branding and logistics, securing contracts with UNICEF and War Child.",
    icon: <Rocket size={18} />
  },
  {
    year: "2014 - 2023",
    title: "Pan-African Expansion",
    location: "East Africa",
    description: "Expanded Wazi Group across 5 countries. Led branding for South Sudan's independence. Built supply chains for refugee settlements. A decade of high-stakes operational execution.",
    icon: <Briefcase size={18} />
  },
  {
    year: "2024",
    title: "Global Pivot: NYC",
    location: "New York, USA",
    description: "Relocated to NYC for M.S. in Data Analytics at Yeshiva University. Selected as Entrepreneurial Lead for NSF I-Corps (Axam). Elected President of the African Students Association.",
    icon: <GraduationCap size={18} />
  }
];

const TheJourney: React.FC = () => {
  return (
    <section id="story" className="py-32 bg-navy-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* Left Column: Image & Bio Intro */}
          <div className="lg:w-5/12 sticky top-32">
            <div className="relative mb-12 group">
              <div className="absolute -inset-4 border border-gold-500/20 rounded-sm translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-slate-800">
                <img 
                  src="/emmanuel-hoodie.jpg" 
                  alt="Emmanuel Olimi Kasigazi" 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-navy-950/20"></div>
              </div>
            </div>

            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              From Kampala to <span className="text-gold-500">Manhattan</span>
            </h2>
            <div className="prose prose-lg prose-invert text-slate-400">
              <p>
                My story isn't just about business; it's about <strong>defying odds</strong>. Growing up in Kumba and Banda Island, I saw how lack of access stifles potential. I didn't just want to succeed; I wanted to build systems that allow others to rise.
              </p>
              <p>
                For 14 years, I built <strong>Wazi Group</strong> into a powerhouse, not from a glass office, but on the ground—delivering aid in Congo, branding new nations, and navigating complex markets.
              </p>
            </div>
          </div>

          {/* Right Column: Timeline */}
          <div className="lg:w-7/12 pt-8">
            <div className="border-l border-slate-800 pl-8 lg:pl-12 space-y-16">
              {timelineData.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <span className="absolute -left-[41px] lg:-left-[57px] top-0 flex h-5 w-5 items-center justify-center rounded-full bg-navy-950 ring-4 ring-navy-950 border border-slate-600 group-hover:border-gold-500 group-hover:bg-gold-500 transition-colors duration-300"></span>
                  
                  <div className="flex flex-col sm:flex-row gap-4 sm:items-baseline mb-3">
                    <span className="text-gold-500 font-mono text-sm tracking-wider">{item.year}</span>
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  </div>
                  
                  <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                    <MapPin size={14} /> {item.location}
                  </div>
                  
                  <p className="text-slate-400 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="pt-8"
              >
                <a href="#work" className="inline-flex items-center gap-2 text-white border-b border-gold-500 pb-1 hover:text-gold-500 transition-colors">
                  Explore my work <Rocket size={16} />
                </a>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TheJourney;