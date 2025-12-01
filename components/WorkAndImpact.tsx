import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Database, Users, Globe, BrainCircuit, BarChart3, Target } from 'lucide-react';
import { Venture, Skill } from '../types';

const ventures: Venture[] = [
  {
    title: "Axam (NSF I-Corps)",
    role: "Entrepreneurial Lead",
    period: "2025",
    description: "Spearheading market strategy for an offline AI educational assistant. Conducting rigorous customer discovery to bridge the digital divide for students without internet access.",
    tags: ["AI Strategy", "EdTech", "NSF"],
    link: "#"
  },
  {
    title: "African Students Association",
    role: "President",
    period: "Current",
    description: "Leading a 720+ member STEM community at Yeshiva University. Managing a 7-person executive board and driving cross-campus career initiatives.",
    tags: ["Leadership", "Community", "Growth"],
    link: "#"
  },
  {
    title: "Wazi Group Ltd",
    role: "Founder",
    period: "2009 - 2023",
    description: "Built a multi-industry firm operating in 5 countries. Delivered critical logistics for UNICEF and War Child in conflict zones. 14-year track record of resilience.",
    tags: ["International Business", "Logistics", "Scale"],
    link: "https://wazigrouplimited.com/"
  },
  {
    title: "Strategic AI Implementation",
    role: "Data Scientist",
    period: "Portfolio",
    description: "Deployed production-ready ML systems: Wine Sales prediction (99% outlier handling), NYC Noise Analytics pipeline (30M+ records), and RAG systems for legal docs.",
    tags: ["Machine Learning", "Python", "Big Data"],
    link: "https://github.com/olimiemma"
  }
];

const WorkAndImpact: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-navy-900 relative">
      <div className="container mx-auto px-6">
        
        {/* Header with Speaking Photo Background Effect */}
        <div className="relative rounded-2xl overflow-hidden mb-20 bg-navy-950 border border-slate-800">
          <div className="absolute inset-0">
             <img src="/emmanuel-speaking.jpg" alt="Speaking at African Union" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
             <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-transparent"></div>
          </div>
          
          <div className="relative z-10 p-8 lg:p-16 max-w-4xl">
            <h2 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6">
              Impact at <span className="text-gold-500">Scale</span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              From the boardrooms of East Africa to the lecture halls of the African Union and the innovation hubs of NYC. 
              I don't just analyze data; I build organizations and products that move the world forward.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                <Globe size={18} className="text-gold-500" /> <span>5 Countries</span>
              </div>
              <div className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                <Users size={18} className="text-gold-500" /> <span>720+ Members Led</span>
              </div>
              <div className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                <Target size={18} className="text-gold-500" /> <span>14 Years Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {ventures.map((venture, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-navy-950 p-8 border border-slate-800 hover:border-gold-500/50 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-gold-500 font-mono text-xs uppercase tracking-wider">{venture.period}</span>
                  <h3 className="text-2xl font-bold text-white mt-2 group-hover:text-gold-400 transition-colors">{venture.title}</h3>
                  <p className="text-slate-400 text-sm font-medium mt-1">{venture.role}</p>
                </div>
                <div className="p-3 bg-slate-900 rounded-full group-hover:bg-gold-500/20 group-hover:text-gold-500 transition-colors">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              
              <p className="text-slate-400 mb-8 leading-relaxed">
                {venture.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {venture.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-900 text-slate-300 text-xs font-medium rounded-sm border border-slate-800">
                    {tag}
                  </span>
                ))}
              </div>
              
              {venture.link && (
                <a href={venture.link} className="absolute inset-0 z-10" aria-label={`View ${venture.title}`}></a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="border-t border-slate-800 pt-16">
           <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              <div className="lg:col-span-1">
                 <h3 className="text-2xl font-serif font-bold text-white mb-4">Core Competencies</h3>
                 <p className="text-slate-500 text-sm">The technical arsenal I bring to every challenge.</p>
              </div>
              
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
                 <div className="space-y-4">
                    <div className="flex items-center gap-3 text-white font-bold">
                       <Database className="text-gold-500" size={20} /> Data Engineering
                    </div>
                    <ul className="space-y-2 text-slate-400 text-sm">
                       <li>SQL (PostgreSQL, Snowflake)</li>
                       <li>ETL Pipeline Architecture</li>
                       <li>Python (Pandas, NumPy)</li>
                       <li>NYC 311 Data Analysis</li>
                    </ul>
                 </div>
                 
                 <div className="space-y-4">
                    <div className="flex items-center gap-3 text-white font-bold">
                       <BrainCircuit className="text-gold-500" size={20} /> AI & Machine Learning
                    </div>
                    <ul className="space-y-2 text-slate-400 text-sm">
                       <li>RAG Systems</li>
                       <li>Predictive Analytics (55.9% Acc.)</li>
                       <li>Sentiment Analysis Models</li>
                       <li>LLM Engineering</li>
                    </ul>
                 </div>

                 <div className="space-y-4">
                    <div className="flex items-center gap-3 text-white font-bold">
                       <BarChart3 className="text-gold-500" size={20} /> Strategy
                    </div>
                    <ul className="space-y-2 text-slate-400 text-sm">
                       <li>Product-Market Fit (Lean Startup)</li>
                       <li>Market Validation</li>
                       <li>Supply Chain Optimization</li>
                       <li>Public Speaking</li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default WorkAndImpact;