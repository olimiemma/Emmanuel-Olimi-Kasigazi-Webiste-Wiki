import React from 'react';
import { Mail, Linkedin, MapPin, Github, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-navy-950 border-t border-slate-900 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">Let's Build Something Legendary</h2>
          <p className="text-slate-400 max-w-xl mb-8">
            Whether it's discussing Data Science strategies, AI implementation, or the future of African tech—I'm always open to meaningful conversations.
          </p>
          <a href="mailto:olimiemma@gmail.com" className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-navy-950 font-bold rounded-sm transition-all duration-300">
            <Mail size={20} /> Say Hello
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-slate-900">
          <div className="flex flex-col items-center md:items-start">
             <h3 className="text-white font-bold text-xl mb-4">EKO</h3>
             <p className="text-slate-500 text-sm">
               Designing systems that empower the next generation.
             </p>
          </div>
          
          <div className="flex flex-col items-center">
            <h4 className="text-white font-bold mb-4">Location</h4>
            <div className="flex items-center gap-2 text-slate-400">
                <MapPin size={16} />
                <span>New York, NY / Global</span>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
             <h4 className="text-white font-bold mb-4">Connect</h4>
             <div className="flex gap-4">
                <a href="https://linkedin.com/in/olimiemma" className="text-slate-400 hover:text-gold-500 transition-colors"><Linkedin size={20} /></a>
                <a href="https://github.com/olimiemma" className="text-slate-400 hover:text-gold-500 transition-colors"><Github size={20} /></a>
                <a href="https://twitter.com/olimiemma" className="text-slate-400 hover:text-gold-500 transition-colors"><Twitter size={20} /></a>
             </div>
          </div>
        </div>

        <div className="text-center pt-8 text-slate-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Emmanuel Olimi Kasigazi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
