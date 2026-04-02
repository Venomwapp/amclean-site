import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Building2, Clock, Globe, Leaf } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import MetallicText from '@/components/ui/MetallicText';

interface StatItem {
  icon: React.ElementType;
  value: string;
  numericValue?: number;
  suffix?: string;
  label: string;
}

const useCountUp = (end: number, duration: number = 2000, startCounting: boolean = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startCounting) return;
    let startTime: number;
    let animationFrame: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      if (progress < 1) animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting]);
  return count;
};

const StatCard = ({ stat, index, isVisible }: { stat: StatItem; index: number; isVisible: boolean }) => {
  const count = useCountUp(stat.numericValue || 0, 2500, isVisible);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="relative group"
    >
      <div className="relative bg-card rounded-2xl p-6 md:p-8 text-center border border-border shadow-md group-hover:shadow-lg transition-all duration-300 h-full">
        <motion.div 
          className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-accent/10 flex items-center justify-center"
          whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <stat.icon className="w-8 h-8 text-accent" />
        </motion.div>
        
        <div className="stats-number text-4xl md:text-5xl font-bold mb-3">
          <MetallicText variant="gold">
            {stat.numericValue !== undefined ? (
              <>{count}{stat.suffix}</>
            ) : (
              stat.value
            )}
          </MetallicText>
        </div>
        
        <p className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">{stat.label}</p>
      </div>
    </motion.div>
  );
};

const StatsSection = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats: StatItem[] = [
    { icon: Building2, value: '500+', numericValue: 500, suffix: '+', label: t('stats.companies') },
    { icon: Clock, value: '24/7', label: t('stats.availability') },
    { icon: Globe, value: '3', numericValue: 3, label: t('stats.languages') },
    { icon: Leaf, value: '100%', numericValue: 100, suffix: '%', label: t('stats.eco') },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
