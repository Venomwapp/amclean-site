import { motion } from 'framer-motion';
import { Sparkles, Shield, Clock, Award, CheckCircle, Star } from 'lucide-react';

const items = [
  { icon: Sparkles, text: 'Premium Quality' },
  { icon: Shield, text: '98% Satisfaction' },
  { icon: Clock, text: '24/7 Disponible' },
  { icon: Award, text: '+500 Clients B2B' },
  { icon: CheckCircle, text: 'Écologique' },
  { icon: Star, text: 'Toute la Belgique' },
];

const MarqueeSection = () => {
  return (
    <section className="relative py-4 bg-secondary/50 border-y border-border overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 20, ease: 'linear' } }}
          className="flex shrink-0"
        >
          {[...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center gap-3 px-8 text-muted-foreground">
              <item.icon className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium whitespace-nowrap tracking-wider uppercase">{item.text}</span>
              <span className="text-border">•</span>
            </div>
          ))}
        </motion.div>
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 20, ease: 'linear' } }}
          className="flex shrink-0"
        >
          {[...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center gap-3 px-8 text-muted-foreground">
              <item.icon className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium whitespace-nowrap tracking-wider uppercase">{item.text}</span>
              <span className="text-border">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeSection;
