import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Clock, Users, Leaf, Sparkles } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MetallicText from '@/components/ui/MetallicText';

const WhyAmClean = () => {
  const { t } = useTranslation();

  const benefits = [
    { icon: Clock, title: t('why.flexibility.title'), description: t('why.flexibility.description') },
    { icon: Users, title: t('why.staff.title'), description: t('why.staff.description') },
    { icon: Leaf, title: t('why.eco.title'), description: t('why.eco.description') },
  ];

  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 mb-6"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent tracking-wider uppercase font-medium">{t('why.subtitle')}</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
              <MetallicText variant="silver">{t('why.title')}</MetallicText>
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-16 md:space-y-24">
          {benefits.map((benefit, index) => (
            <ScrollReveal 
              key={index} 
              delay={0.1}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <motion.div
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-12 lg:gap-20`}
              >
                {/* Icon Container */}
                <div className="flex-shrink-0 relative">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-accent/10 rounded-3xl blur-2xl" />
                    <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-3xl bg-card border border-border shadow-lg flex items-center justify-center">
                      <benefit.icon className="w-20 h-20 md:w-24 md:h-24 text-accent" />
                    </div>
                    <motion.div
                      animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-card border border-border shadow-md flex items-center justify-center"
                    >
                      <span className="text-2xl">✨</span>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`text-center ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'} flex-1 max-w-xl`}>
                  <motion.h3 
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    {benefit.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {benefit.description}
                  </motion.p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAmClean;
